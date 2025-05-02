/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/naming-convention */
// MODULES //
import { useRef, useEffect, useState } from "react";

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //

// DATA //

/** Home Page */
export default function HomePage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Om"} Desc={"Om"} OgImg={""} Url={"/"} />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<h1>OM</h1>
			</main>
			{/* <Footer /> */}
			{/* Page Content ends here */}
		</div>
	);
}
