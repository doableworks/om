// MODULES //
import React, { useState, useRef, useEffect } from "react";

// COMPONENTS //
import Image from "next/image";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/components/Accordian.module.scss";

// IMAGES //
// import ArrowIcon from "@/../public/img/icons/acc_arrow.svg";

/** Accordian  */
const Accordion = ({ children }) => {
	return <div className="accordion">{children}</div>;
};

/** Accordion Item  */
const AccordionItem = ({ children, uniqueKey }) => {
	const [isOpen, setIsOpen] = useState(false);
	const accordionRef = useRef(null);

	/** Toggle Accordion  */
	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	/** Close accordion when clicking outside */
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (accordionRef.current && !accordionRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div
			ref={accordionRef}
			className={`accordian_wrap ${styles.accordian_wrap} ${
				isOpen && styles.active
			}`}
		>
			{React.Children.map(children, (child) => {
				if (child.type === AccordionTitle) {
					return React.cloneElement(child, { isOpen, toggleAccordion });
				}
				if (child.type === AccordionContent && isOpen) {
					return React.cloneElement(child, {
						closeAccordion: () => setIsOpen(false),
					});
				}
				return null;
			})}
		</div>
	);
};

/** Accordion Title  */
const AccordionTitle = ({ children, isOpen, toggleAccordion }) => {
	return (
		<div className={`${styles.accordian_title_wrap}`} onClick={toggleAccordion}>
			{children}
			<div className={`${styles.arrow_icon} ${isOpen ? styles.rotated : ""}`}>
				<span>+</span>
			</div>
		</div>
	);
};
/** Accordion Content  */
const AccordionContent = ({ children, closeAccordion }) => {
	const handleContentClick = () => {
		if (closeAccordion) {
			closeAccordion();
		}
	};

	return (
		<div
			className={`${styles.accordian_content_wrap}`}
			onClick={handleContentClick}
		>
			{children}
		</div>
	);
};

export { Accordion, AccordionItem, AccordionTitle, AccordionContent };
