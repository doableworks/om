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
import styles from "@/styles/pages/About.module.scss";

// IMAGES //
import Banner from "../public/img/about/banner.jpg";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";
import Weddings from "../public/img/home/weddings.jpg";
import ceremonies from "../public/img/home/ceremonies.jpg";
import speaking from "../public/img/home/speaking.jpg";
import OneON from "../public/img/home/one-on-one.jpg";
import creative from "../public/img/home/creative.jpg";
import business from "../public/img/home/BUSINESS.jpg";
import Journey from "../public/img/about/journey.png";

// DATA //

/** AboutPage Page */
export default function AboutPage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Om"} Desc={"Om"} OgImg={""} Url={"/"} />

			<Header />
			{/* Page Content starts here */}
			<main className={`${styles.AboutPage}`}>
				<section className={styles.banner_section}>
					{/* <img
						src={Banner.src}
						className={`${styles.banner_img} img-responsive`}
						alt="banner"
					/> */}
					<video
						src="https://websitetestcontent.s3.us-east-1.amazonaws.com/aboutUsBanner.mp4"
						className={`${styles.banner_img} img-responsive`}
						muted
						autoPlay
						loop
					/>
				</section>
				<section className={`${styles.counter}`}>
					<div className="container">
						<div className={`${styles.counter_section}`}>
							<div className={`${styles.counter_box}`}>
								<h3 className="text_36_b text_uppercase">18 yrs</h3>
								<h6 className="text_15_r f_w_m text_uppercase">Study of Shastras</h6>
							</div>
							<div className={`${styles.counter_box}`}>
								<h3 className="text_36_b text_uppercase">16 yrs</h3>
								<h6 className="text_15_r f_w_m text_uppercase">
									Corporate Life in London
								</h6>
							</div>
							<div className={`${styles.counter_box}`}>
								<h3 className="text_36_b text_uppercase">10,000</h3>
								<h6 className="text_15_r f_w_m text_uppercase">
									Hours of leadership coaching 
								</h6>
							</div>
							<div className={`${styles.counter_box}`}>
								<h3 className="text_36_b text_uppercase">7.1 m</h3>
								<h6 className="text_15_r f_w_m text_uppercase">Views on YouTube</h6>
							</div>
							<div className={`${styles.counter_box}`}>
								<h3 className="text_36_b text_uppercase">200k</h3>
								<h6 className="text_15_r f_w_m text_uppercase">
									Followers on  Instagram
								</h6>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.journey} pb_80`}>
					<div className="container">
						<div className={`${styles.journey_section}`}>
							<img
								src={Journey.src}
								className={`${styles.journey_img} img-responsive`}
								alt="image"
							/>
							<h3 className="text_36_b text_center text_uppercase">
								Journey Back to Wisdom
							</h3>
							<div className={`${styles.info_section} pt_50`}>
								<div className={`${styles.box}`}>
									<p className="text_18_m pb_20">
										Om Dhumatkar is a strategist & coach to India’s leading Founders,
										Investors, and Execs; and splits his time between London and India. 
									</p>
									<p className="text_18_m pb_20">
										With 18+ years of Vedic learning, Om is a renowned speaker on the
										Bhagavad Gita. He is a sought-after pundit, bringing alive ancient
										ceremonies for modern times. 
									</p>
									<p className="text_18_m pb_20">
										His insights on everyday spirituality means that Om is a regular guest
										on several media platforms, including the BBC.
									</p>
								</div>
								<div className={`${styles.box}`}>
									<p className="text_18_m pb_20">
										Om is a qualified pundit - regularly conducting wedding and Havan
										ceremonies, explaining the meaning behind each act of worship.
									</p>
									<p className="text_18_m pb_20">
										He is the founding MD of OD Partners Strategic Advisory, with clients
										across California, New York, London, Amsterdam, Dubai, and India. 
									</p>
									<p className="text_18_m pb_20">
										He is a graduate of the prestigious London School of Economics; was
										recognised as one of UK’s Top 10 Inspirational Leaders in 2021.
									</p>
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
								<a href="weddings" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img
								src={"img/home/Ceremonies2025.jpg"}
								className="img-responsove"
								alt="Weddings"
							/>
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">
									ceremonies
								</h3>
								<a href="ceremonies" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img
								src={"/img/home/Speaking2025.jpg"}
								className="img-responsove"
								alt="Weddings"
							/>
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">speaking</h3>
								<a href="speaking" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img src={business.src} className="img-responsove" alt="Weddings" />
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">
									one-on-one
								</h3>
								<a href="one-in-one" className="text_16_m text_center text_uppercase">
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
								<a href="creative" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img
								src={"/img/home/placeholder.jpg"}
								className="img-responsove"
								alt="Weddings"
							/>
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">
									BUSINESS CONSULTING
								</h3>
								<a href="business" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
					</div>
				</section>
				<section className="container">
					<div className={`${styles.connect_section} pt_100 pb_80`}>
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
