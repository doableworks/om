/* eslint-disable no-irregular-whitespace */
// MODULES //
import { useRef, useEffect, useState } from "react";

// COMPONENTS //
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
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
import BannerSlider from "../public/img/om/banner_slider_1.jpg";
import videoTham from "../public/img/weddings/video_tham.jpg";
import playBtn from "../public/img/weddings/play_btn.svg";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";
import Form from "@/components/Form";

// DATA //

/** OneInOnePage Page */
export default function OmPage() {
	useEffect(() => {
		Fancybox.bind("[data-fancybox]", {});
	}, []);
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: false,
	};
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Om"} Desc={"Om"} OgImg={""} Url={"/"} />

			<Header />
			{/* Page Content starts here */}
			<main className={`${styles.ContactPage}`}>
				<section className={styles.form_section}>
					<div className={styles.left_img_wrapper}>
						<img
							src="/img/contactUs.png"
							className={styles.contact_img}
							alt="Contact Us"
						/>
					</div>
					<div className={styles.right_content}>
						<div className={styles.writeToUsText}>
							<span>Write to us at</span>
							<br />
							<a href="mailto:team@omdhumatkar.com">team@omdhumatkar.com</a>
						</div>
						{/* You can add your Form component here if needed */}
						<Form />
					</div>
				</section>
				<section className={`${styles.banner_Section}`}>
					{/* <div> */}
					<img src="/img/contactBanner.png" className="img-responsive" />
					<p>
						“I am optimistic on India's growth prospects; and has a personal mission
						of{" "}
						<span style={{ fontWeight: "bolder" }}>
							'bringing Bhakti to the Boardroom'
						</span>
						.”
					</p>
					{/* </div> */}
				</section>
			</main>
			<Footer />
			{/* Page Content ends here */}
		</div>
	);
}
