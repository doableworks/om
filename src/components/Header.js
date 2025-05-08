// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Header.module.scss";

// IMAGES //
import Logo from "../../public/img/header_logo.svg";

// DATA //

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};

	/** Function to toggle dropdown */
	const toggleDropdown = (dropdownKey) => {
		setOpenDropdown((prevOpenDropdown) =>
			prevOpenDropdown === dropdownKey ? null : dropdownKey
		);
	};

	return (
		<div
			className={`${styles.main_header} ${
				openSidebar ? styles.sidebar_opened : ""
			}`}
		>
			<div className="container">
				<div className={`${styles.header_inside}`}>
					{/* Logo wrap */}
					<div className={`${styles.header_logo}`}>
						<Link href="/">
							<div className={styles.image_wrap}>
								<img src={Logo.src} alt="Logo" className="img-responsive" />
							</div>
						</Link>
					</div>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap}`}>
						<ul>
							<li>
								<a href="#" className="text_15_r">
									ABOUT
								</a>
							</li>
							<li>
								<a href="#" className="text_15_r">
									WORK WITH OM
								</a>
							</li>
							<li>
								<a href="#" className="text_15_r">
									LEARN WITH OM
								</a>
							</li>
							<li>
								<a href="#" className="text_15_r">
									OD PARTNERS
								</a>
							</li>
							<li>
								<a href="#" className="text_15_r">
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
