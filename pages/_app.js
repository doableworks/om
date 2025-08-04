// MODULES //
import { useEffect } from "react";
import Script from "next/script";

// COMPONENTS //
import { Toaster } from "sonner";
// SECTIONS //

// PLUGINS //
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import ScrollOut from "scroll-out";

// UTILS //
import SmoothScrolling from "@/utils/SmoothScrolling";
import { useCookieConsent } from "@/hooks/useCookieConsent";
// STYLES //

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals/globals.scss";
import { use } from "react";

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

	useCookieConsent();

	return (
		<>
			<Component {...pageProps} />
			<Toaster
				position="bottom-center"
				expand={true}
				richColors={false}
				closeButton={false}
			/>
		</>
	);
}
