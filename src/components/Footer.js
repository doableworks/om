/* eslint-disable react/jsx-no-target-blank */
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //
// import Face from "../../public/img/home/face.png";
// import Link from "../../public/img/home/linkedin.png";
// import Insta from "../../public/img/home/insta.png";
// import You from "../../public/img/home/you.png";

// DATA //

/** Footer Component */
export default function Footer() {
	return (
		<footer className={`${styles.main_footer}`}>
			<div className="container">
				<div className={`${styles.footer_section_1}`}>
					<div className={`${styles.left}`}></div>
					<div className={`${styles.right}`}></div>
				</div>
				<div className={`${styles.footer_section_2}`}></div>
			</div>
		</footer>
	);
}
