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
import styles from "@/styles/pages/Creative.module.scss";

// IMAGES //
import BannerSlider from "../public/img/creative/banner.jpg";
import videoTham from "../public/img/weddings/video_tham.jpg";
import playBtn from "../public/img/weddings/play_btn.svg";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";

// DATA //

/** Home Page */
export default function CreativePage() {
	useEffect(() => {
		Fancybox.bind("[data-fancybox]", {});
	}, []);
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		// fade: true,
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
			<main className={`${styles.creative_Page}`}>
				<section className={`${styles.banner}`}>
					<div className={`${styles.banner_section}`}>
						<Slider {...settings}>
							<div className={`${styles.item} pb_40`}>
								<img
									src={BannerSlider.src}
									className="img-responsive"
									alt="BannerSlider"
								/>
								<div className="container">
									<p className={`${styles.para_section} text_24_r pt_20`}>
										“Lorem ipsum dolor sit amet consectetur. Commodo.”
									</p>
								</div>
							</div>
							<div className={`${styles.item} pb_40`}>
								<img
									src={BannerSlider.src}
									className="img-responsive"
									alt="BannerSlider"
								/>
								<div className="container">
									<p className={`${styles.para_section} text_24_r pt_20`}>
										“Lorem ipsum dolor sit amet consectetur. Commodo.”
									</p>
								</div>
							</div>
							<div className={`${styles.item} pb_40`}>
								<img
									src={BannerSlider.src}
									className="img-responsive"
									alt="BannerSlider"
								/>
								<div className="container">
									<p className={`${styles.para_section} text_24_r pt_20`}>
										“Lorem ipsum dolor sit amet consectetur. Commodo.”
									</p>
								</div>
							</div>
						</Slider>
					</div>
				</section>
				<section className="container">
					<div className={`${styles.weddings_info} pt_60 pb_100 text_center`}>
						<h3 className="text_36_b gradient_text pb_30">creative consulting</h3>
						<div className={`${styles.para_section}`}>
							<p className="text_18_m pb_20">
								Om is regularly approached by filmmakers and creative artists to
								understand the spiritual meaning behind Hinduisms rich storytelling
								traditions.
							</p>
							<p className="text_18_m pb_20">
								His ability to bridge mystical Hindu history, with practical everyday
								insights appeals to those who know these stories, and those who are new
								to Hinduism. 
							</p>
							<p className="text_18_m pb_20">
								Om is a credited writer for Dashavtar, a film production with a
								six-month run at the Nita Mukesh Ambani Cultural Centre (NMACC).
							</p>
						</div>
					</div>
				</section>
				<section className="container">
					<div className={`${styles.connect_section} pt_20 pb_80`}>
						<div className={`${styles.left_img}`}>
							<img src={leftImg.src} className="img-responsive" alt="leftImg" />
						</div>
						<div className={`${styles.btn_section}`}>
							<div className={`${styles.btn}`}>
								<a href="contact-us" className="text_24_m">
									+ CONNECT WITH OM
								</a>
							</div>
						</div>
						<div className={`${styles.right_img}`}>
							<img src={rightImg.src} className="img-responsive" alt="leftImg" />
						</div>
					</div>
				</section>
			</main>
			<Footer />
			{/* Page Content ends here */}
		</div>
	);
}
