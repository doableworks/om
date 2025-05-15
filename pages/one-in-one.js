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
import styles from "@/styles/pages/OneInOne.module.scss";

// IMAGES //
import BannerSlider from "../public/img/creative/banner.jpg";
import videoTham from "../public/img/weddings/video_tham.jpg";
import playBtn from "../public/img/weddings/play_btn.svg";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";
import testAnimation from "../public/img/weddings/animation_img.png";
import hindiText1 from "../public/img/ceremonies/hindi_text_1.png";
import OneEvent from "../public/img/one-in-one/one_event.png";

// DATA //

/** OneInOnePage Page */
export default function OneInOnePage() {
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
			<main className={`${styles.one_in_one_Page}`}>
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
						<h3 className="text_36_b gradient_text pb_30">ONE-ON-ONE</h3>
						<div className={`${styles.para_section}`}>
							<p className="text_18_m pb_20">
								As a 1-1 coach Om regularly helps investors, CEOs, and senior executives
								achieve balance and purpose. Using timeless concepts such as Karma Yoga,
								Om guides people to unlock and honour the divinity that lies within.
							</p>
							<p className="text_18_m pb_20">
								Through 1-1 sessions with Om, several people have been able to navigate
								life’s challenges with faith, clarity, resilience, and an ever-deepening
								connection to their truest selves.
							</p>
						</div>
					</div>
					<div className={`${styles.video_section}`}>
						<a data-fancybox href="https://youtu.be/EngW7tLk6R8">
							<img src={videoTham.src} className="img-responsive" alt="videoTham" />
							<img
								src={playBtn.src}
								className={`${styles.play_btn} img-responsive`}
								alt="videoTham"
							/>
						</a>
					</div>
				</section>
				<section className={`${styles.testimonials} pb_80`}>
					<img
						src={testAnimation.src}
						className={`${styles.testAnimation} img-responsive pb_20`}
						alt="testAnimation"
					/>
					<div className="container">
						<div className={`${styles.testimonials_section} pt_40`}>
							<Slider {...settings}>
								<div className={`${styles.item} pb_40`}>
									<img
										src={hindiText1.src}
										className="img-responsive"
										alt="hindiText1"
									/>
									<p className="text_24_r pt_10">
										Always perform action in a spirit of sacrifice. By performing action
										in this way, one attains the supreme.
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<img
										src={hindiText1.src}
										className="img-responsive"
										alt="hindiText1"
									/>
									<p className="text_24_r pt_10">
										Always perform action in a spirit of sacrifice. By performing action
										in this way, one attains the supreme.
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<img
										src={hindiText1.src}
										className="img-responsive"
										alt="hindiText1"
									/>
									<p className="text_24_r pt_10">
										Always perform action in a spirit of sacrifice. By performing action
										in this way, one attains the supreme.
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<img
										src={hindiText1.src}
										className="img-responsive"
										alt="hindiText1"
									/>
									<p className="text_24_r pt_10">
										Always perform action in a spirit of sacrifice. By performing action
										in this way, one attains the supreme.
									</p>
								</div>
							</Slider>
						</div>
					</div>
				</section>
				<section className={`${styles.one_in_one_event} ptb_80`}>
					<div className={`${styles.one_in_one_event_section}`}>
						<h4 className="text_24_m text_center text_uppercase pb_50">
							One-on-one events
						</h4>
						<img src={OneEvent.src} className="img-responsive" alt="Image" />
					</div>
					<div className="container">
						<div className={`${styles.event_slider} pt_80`}>
							<Slider {...settings}>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r pt_10">
										Lorem ipsum dolor sit amet consectetur. Non eget convallis mi mauris.
										Egestas duis vulputate elit non odio arcu pellentesque accumsan.
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r pt_10">
										Lorem ipsum dolor sit amet consectetur. Non eget convallis mi mauris.
										Egestas duis vulputate elit non odio arcu pellentesque accumsan.
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r pt_10">
										Lorem ipsum dolor sit amet consectetur. Non eget convallis mi mauris.
										Egestas duis vulputate elit non odio arcu pellentesque accumsan.
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r pt_10">
										Lorem ipsum dolor sit amet consectetur. Non eget convallis mi mauris.
										Egestas duis vulputate elit non odio arcu pellentesque accumsan.
									</p>
								</div>
							</Slider>
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
								<a href="#" className="text_24_m">
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
