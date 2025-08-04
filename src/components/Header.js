/* eslint-disable @next/next/no-html-link-for-pages */
// MODULES //
import { useState, useEffect, useRef } from "react";

// COMPONENTS //
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Header.module.scss";

// IMAGES //
import Logo from "../../public/img/header_logo.svg";
import leftImg from "../../public/img/weddings/left_img.png";
import rightImg from "../../public/img/weddings/right_img.png";

// DATA //

/**
 * Header component renders the main navigation header with logo, links, and dropdowns.
 * Handles sidebar and dropdown toggling for navigation.
 * @returns {JSX.Element}
 */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);
	const [rotatingIcon, setRotatingIcon] = useState(null);
	const dropdownRef = useRef(null);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};

	/**
	 * Toggles the dropdown menu for the given dropdown key.
	 * @param {string} dropdownKey - The key of the dropdown to toggle.
	 */
	const toggleDropdown = (dropdownKey) => {
		// Trigger rotation animation
		setRotatingIcon(dropdownKey);
		setTimeout(() => setRotatingIcon(null), 600); // Remove after animation duration
		
		setOpenDropdown((prevOpenDropdown) =>
			prevOpenDropdown === dropdownKey ? null : dropdownKey
		);
	};

	/**
	 * Handles clicks outside the dropdown to close it.
	 * @param {MouseEvent} event - The mouse event triggered by clicking outside.
	 */
	function handleClickOutside(event) {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setOpenDropdown(null);
		}
	}

	useEffect(() => {
		if (openDropdown !== "workWithOm" && openDropdown !== "learnWithOm") return;
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [openDropdown]);

	return (
		<div
			className={`${styles.main_header} ${
				openSidebar ? styles.sidebar_opened : ""
			}`}
		>
			<div className={`container ${styles.header_container}`}>
				<div className={`${styles.header_inside}`}>
					{/* Logo wrap */}
					<div className={`${styles.header_logo}`}>
						<a href="/">
							<div className={styles.image_wrap}>
								<img src={Logo.src} alt="Logo" className="img-responsive" />
							</div>
						</a>
					</div>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap}`} ref={dropdownRef}>
						<ul>
							<li>
								<a href="about-us" className="text_15_r">
									ABOUT
								</a>
							</li>
							<li
								className="text_15_r"
								style={{
									position: "relative",
									display: "flex",
									flexDirection: "row",
									columnGap: "8px",
								}}
							>
								{/* <div className={`${styles.left_img}`}>
								<img src={leftImg.src} className="img-responsive" alt="leftImg" style={{maxWidth:"80px", maxHeight:"20px", objectFit:"cover"}} />
							</div> */}
								<span
									onClick={() => toggleDropdown("workWithOm")}
									className={`text_14_r ${
										openDropdown === "workWithOm" ? styles.work_with_om_open : ""
									}`}
								>
									WORK WITH OM <span className={`${styles.mobile_plus} ${rotatingIcon === "workWithOm" ? styles.rotating : ""}`}>+</span>
								</span>
								{/* <div className={`${styles.right_img}`}>
								<img src={rightImg.src} className="img-responsive" alt="leftImg" style={{maxWidth:"80px", objectFit:"contain"}} />
							</div> */}
								{openDropdown === "workWithOm" && (
									<ul className={`text_16_r ${styles.dropdown_custom_list}`}>
										<li>
											<a
												href="weddings"
												className="text_15_r"
												style={{ color: "#F0EAE0" }}
											>
												Weddings
											</a>
										</li>
										<li>
											<a
												href="ceremonies"
												className="text_15_r"
												style={{ color: "#F0EAE0" }}
											>
												ceremonies
											</a>
										</li>
										<li>
											<a
												href="speaking"
												className="text_15_r"
												style={{ color: "#F0EAE0" }}
											>
												Speaking
											</a>
										</li>
										<li>
											<a
												href="one-on-one"
												className="text_15_r"
												style={{ color: "#F0EAE0" }}
											>
												One-on-One
											</a>
										</li>
										<li>
											<a
												href="creative-consulting"
												className="text_15_r"
												style={{ color: "#F0EAE0" }}
											>
												Creative Consulting
											</a>
										</li>
										<li>
											<a
												href="business-consulting"
												className="text_15_r"
												style={{ color: "#F0EAE0" }}
											>
												Business Consulting
											</a>
										</li>
									</ul>
								)}
							</li>
							<li
								className="text_15_r"
								style={{
									position: "relative",
									display: "flex",
									flexDirection: "row",
									columnGap: "8px",
								}}
							>
								<span
									onClick={() => toggleDropdown("learnWithOm")}
									className={`text_14_r ${
										openDropdown === "learnWithOm" ? styles.work_with_om_open : ""
									}`}
								>
									LEARN WITH OM <span className={`${styles.mobile_plus} ${rotatingIcon === "learnWithOm" ? styles.rotating : ""}`}>+</span>
								</span>
								{openDropdown === "learnWithOm" && (
									<ul className={`text_16_r ${styles.dropdown_custom_list}`}>
										<li>
											<a
												href="learn-with-om"
												className="text_15_r"
												style={{ color: "#F0EAE0" }}
											>
												Overview
											</a>
										</li>
										<li>
											<a
												href="learn-with-om#bhagavad-gita"
												className="text_15_r"
												style={{ color: "#F0EAE0" }}
											>
												Bhagavad Gita
											</a>
										</li>
										<li>
											<a
												href="learn-with-om#hanuman-chalisa"
												className="text_15_r"
												style={{ color: "#F0EAE0" }}
											>
												Hanuman Chalisa
											</a>
										</li>
									</ul>
								)}
							</li>
							{/* <li>
							<a href="business-consulting" className="text_15_r">
								GD PARTNERS
							</a>
						</li> */}
							<li>
								<a href="connect" className="text_15_r">
									CONNECT
								</a>
							</li>
						</ul>
					</div>

					{/* Hamburger icon visible in mobile only */}
					<div className={styles.hamburger_icon} onClick={toggleSidebar}>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
					</div>
				</div>
			</div>
		</div>
	);
}
