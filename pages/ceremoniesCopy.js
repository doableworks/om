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
import styles from "@/styles/pages/Ceremonies.module.scss";

// IMAGES //
import BannerSlider from "../public/img/ceremonies/banner.jpg";
import videoTham from "../public/img/weddings/video_tham.jpg";
import playBtn from "../public/img/weddings/play_btn.svg";
import testAnimation from "../public/img/weddings/animation_img.png";
import hindiText1 from "../public/img/ceremonies/hindi_text_1.png";
import event1 from "../public/img/ceremonies/event_1.jpg";
import event2 from "../public/img/ceremonies/event_2.jpg";
import event3 from "../public/img/ceremonies/event_3.jpg";
import event4 from "../public/img/ceremonies/event_4.jpg";
import event5 from "../public/img/ceremonies/event_5.jpg";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";

// DATA //

/** Home Page */
export default function CeremoniesPage() {
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
			<main className={`${styles.ceremonies_Page}`}>
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
					<div className={`${styles.weddings_info} pt_40 pb_60 text_center`}>
						<h3 className="text_36_b gradient_text pb_30">Ceremonies</h3>
						<div className={`${styles.para_section}`}>
							<p className="text_18_m pb_20">
								Hindu wisdom is woven into every aspect of life - from auspicious
								beginnings to life-changing events.
							</p>
							<p className="text_18_m pb_20">
								Om’s ceremonies bring out these profound nuggets of wisdom - allowing
								participants to fully understand and immerse themselves in the beauty of
								Hindu worship.
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
				<section className="container">
					<h4 className="text_24_m text_uppercase text_center pt_80 pb_30">
						celebrations OVER the years
					</h4>
					<div className={`${styles.weddings_work}  pb_40`}>
						<div className={`${styles.left_box}`}>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event1.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Name of the event</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">
											“Lorem ipsum dolor sit amet consectetur...
										</h6>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event3.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Name of the event</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">
											“Lorem ipsum dolor sit amet consectetur...
										</h6>
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.right_box}`}>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event2.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Name of the event</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">
											“Lorem ipsum dolor sit amet consectetur...
										</h6>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event4.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Name of the event</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">
											“Lorem ipsum dolor sit amet consectetur...
										</h6>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event5.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Name of the event</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">
											“Lorem ipsum dolor sit amet consectetur...
										</h6>
									</div>
								</div>
							</div>
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
								<a href="connect" className="text_24_m">
									CONNECT WITH OM +
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
