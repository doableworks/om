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

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //
import Banner from "../public/img/home/banner.jpg";
import BannerText from "../public/img/home/banner_text.png";
import Om from "../public/img/home/om.jpg";
import Weddings from "../public/img/home/weddings.jpg";
import ceremonies from "../public/img/home/ceremonies.jpg";
import speaking from "../public/img/home/speaking.jpg";
import OneON from "../public/img/home/one-on-one.jpg";
import creative from "../public/img/home/creative.jpg";
import business from "../public/img/home/BUSINESS.jpg";
import testAnimation from "../public/img/home/test_animation.png";

// DATA //

/** Home Page */
export default function HomePage() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Om"} Desc={"Om"} OgImg={""} Url={"/"} />

			<Header />
			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<section className={styles.banner_section}>
					<img
						src={Banner.src}
						className={`${styles.banner_img} img-responsive`}
						alt="banner"
					/>
					<img
						src={BannerText.src}
						className={`${styles.banner_text} img-responsive`}
						alt="banner"
					/>
				</section>
				<section className={`${styles.about} ptb_80`}>
					<div className="container">
						<div className={`${styles.about_section}`}>
							<div className={`${styles.image}`}>
								<img src={Om.src} className="img-responsive" alt="Om" />
							</div>
							<div className={`${styles.info}`}>
								<p className="text_18_m pb_20">
									Om Dhumatkar is a strategist & coach to India’s leading Founders,
									Investors, and Execs.
								</p>
								<p className="text_18_m pb_20">
									He splits his time between London and India.
								</p>
								<p className="text_18_m pb_20">
									With 18+ years of Vedic learning, Om is a renowned speaker on the
									Bhagavad Gita.
								</p>
								<p className="text_18_m pb_20">
									He is a sought-after pundit, bringing alive ancient ceremonies for
									modern times.
								</p>
								<div className={`${styles.btn}`}>
									<a href="#" className="text_18_b">
										+ learn more
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.work}`}>
					<h3 className="text_center text_24_m text_uppercase">Work with Om</h3>
					<div className={`${styles.work_section} pt_40`}>
						<div className={`${styles.work_item}`}>
							<img src={Weddings.src} className="img-responsove" alt="Weddings" />
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">Weddings</h3>
								<a href="#" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img src={ceremonies.src} className="img-responsove" alt="Weddings" />
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">
									ceremonies
								</h3>
								<a href="#" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img src={speaking.src} className="img-responsove" alt="Weddings" />
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">speaking</h3>
								<a href="#" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img src={OneON.src} className="img-responsove" alt="Weddings" />
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">
									one-on-one
								</h3>
								<a href="#" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img src={creative.src} className="img-responsove" alt="Weddings" />
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">
									creative Consulting
								</h3>
								<a href="#" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img src={business.src} className="img-responsove" alt="Weddings" />
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">
									BUSINESS CONSULTING
								</h3>
								<a href="#" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.testimonials} pb_80`}>
					<img
						src={testAnimation.src}
						className="img-responsive"
						alt="testAnimation"
					/>
					<div className="container">
						<div className={`${styles.testimonials_section} pt_40`}>
							<Slider {...settings}>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r">
										Lorem ipsum dolor sit amet consectetur. Non eget convallis mi mauris.
										Egestas duis vulputate elit non odio arcu pellentesque accumsan. 1
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r">
										Lorem ipsum dolor sit amet consectetur. Non eget convallis mi mauris.
										Egestas duis vulputate elit non odio arcu pellentesque accumsan. 2
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r">
										Lorem ipsum dolor sit amet consectetur. Non eget convallis mi mauris.
										Egestas duis vulputate elit non odio arcu pellentesque accumsan. 3
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r">
										Lorem ipsum dolor sit amet consectetur. Non eget convallis mi mauris.
										Egestas duis vulputate elit non odio arcu pellentesque accumsan. 4
									</p>
								</div>
							</Slider>
						</div>
					</div>
				</section>
			</main>
			<Footer />
			{/* Page Content ends here */}
		</div>
	);
}
