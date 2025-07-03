/* eslint-disable no-irregular-whitespace */
// MODULES //
import { useEffect } from "react";

// COMPONENTS //
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";

// SECTIONS //

// PLUGINS //
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// UTILS //

// STYLES //
import styles from "@/styles/pages/Contact.module.scss";

// IMAGES //
import Form from "@/components/Form";

// DATA //

/** OneInOnePage Page */
export default function OmPage() {
	useEffect(() => {
		Fancybox.bind("[data-fancybox]", {});
	}, []);
	// var settings = {
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	fade: true,
	// 	arrows: false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 3000,
	// 	pauseOnHover: false,
	// };
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Om"} Desc={"Om"} OgImg={""} Url={"/"} />

			<Header />
			{/* Page Content starts here */}
			<main className={`${styles.ContactPage}`}>
				<section className={styles.form_section} data-scroll>
					<div className="container">
						<div className={styles.writeToUsText}>
							<span>Write to us at</span>
							<br />
							<a href="mailto:team@omdhumatkar.com">team@omdhumatkar.com</a>
						</div>
						<div className={`${styles.form_section_wrapper} pb_80`}>
							<div className={styles.left_img_wrapper}>
								<img
									src="/img/contactUs.png"
									className={styles.contact_img}
									alt="Contact Us"
								/>
							</div>
							<div className={`${styles.right_content} pt_80`}>
								{/* You can add your Form component here if needed */}
								<div className={`${styles.form_section}`}>
									<Form />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.banner_Section}`} data-scroll>
					{/* <div> */}
					<img
						src="/img/contactbanner.png"
						className="img-responsive"
						alt="Contact Banner"
					/>
					<p data-scroll>
						Rooted in <span style={{ fontWeight: "800" }}>Bhakti</span>, powered by{" "}
						<span style={{ fontWeight: "800" }}>Karma</span> and sharpened by{" "}
						<span style={{ fontWeight: "800" }}>Jnana</span>, we help you align your
						inner journey with your outer ambitions.
					</p>
					{/* </div> */}
				</section>
			</main>
			<Footer />
			{/* Page Content ends here */}
		</div>
	);
}
