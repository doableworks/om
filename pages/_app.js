// MODULES //
import { useEffect } from "react";
import Script from "next/script";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import ScrollOut from "scroll-out";

// UTILS //
import SmoothScrolling from "@/utils/SmoothScrolling";

// STYLES //

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals/globals.scss";

// IMAGES //

// DATA //

/** App Page */
export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		SmoothScrolling();
		ScrollOut({
			targets: "[data-scroll]",
		});
	}, []);

	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
