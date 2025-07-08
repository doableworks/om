/* eslint-disable no-irregular-whitespace */
// MODULES //
// Remove unused imports: useRef, useEffect, useState, Slider

// COMPONENTS //
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/About.module.scss";

// IMAGES //
// Remove unused image imports if not used in JSX
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";
import Weddings from "../public/img/home/weddings.jpg";
import creative from "../public/img/home/creativeConsulting.jpg";
import business from "../public/img/home/one-on-one-grid.jpg";
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
				<section className={styles.banner_section} data-scroll>
					{/* <img
						src={Banner.src}
						className={`${styles.banner_img} img-responsive`}
						alt="banner"
					/> */}
					<video
						src="https://websitetestcontent.s3.us-east-1.amazonaws.com/aboutUsBanner.mp4"
						className={`${styles.videoDesktop} img-responsive`}
						muted
						autoPlay
						loop
					/>
					<video
						src="https://websitetestcontent.s3.us-east-1.amazonaws.com/Top+Banner+-+About+Mobile.mp4"
						className={`${styles.videoMobile} img-responsive`}
						muted
						autoPlay
						loop
					/>
					<div className={styles.banner_overlay}></div>
					<div className={`${styles.banner_text} img-responsive ${styles.banner_text_row}`}>
						<p className={styles.banner_text_item}>STRATEGIST</p>
						<span className={styles.banner_text_sep}>|</span>
						<p className={styles.banner_text_item}>SPEAKER</p>
						<span className={styles.banner_text_sep}>|</span>
						<p className={styles.banner_text_item}>PUNDIT</p>
						<span className={styles.banner_text_sep}>|</span>
						<p className={styles.banner_text_item}>COACH</p>
					</div>
				</section>
				<section className={`${styles.counter}`}>
					{/* <div className="container"> */}
					<div className={`${styles.counter_section}`}>
						<div
							className={`${styles.counter_box}`}
							style={{ paddingLeft: "40px" }}
							data-scroll
						>
							<h3 className="text_32_b text_uppercase">18 years</h3>
							<h6 className="text_15_r f_w_m text_uppercase">OF VEDIC STUDY</h6>
						</div>
						<div className={`${styles.counter_box}`} data-scroll>
							<h3 className="text_32_b text_uppercase">16 years</h3>
							<h6 className="text_15_r f_w_m text_uppercase">
								OF BANKING STRATEGY IN LONDON
							</h6>
						</div>
						<div className={`${styles.counter_box}`} data-scroll>
							<h3 className="text_32_b text_uppercase">10,000+ hours</h3>
							<h6 className="text_15_r f_w_m text_uppercase">
								OF LEADERSHIP COACHING
							</h6>
						</div>
						<div className={`${styles.counter_box}`} data-scroll>
							<h3 className="text_32_b text_uppercase">7,000,000+</h3>
							<h6 className="text_15_r f_w_m text_uppercase">VIEWS ON YOUTUBE</h6>
						</div>
						{/* </div> */}
					</div>
				</section>
				<section className={`${styles.journey} pb_80`}>
					<div className="container">
						<div className={`${styles.journey_section}`} data-scroll>
							<img
								src={Journey.src}
								className={`${styles.journey_img} img-responsive`}
								alt="image"
							/>
							<h3 className="text_36_b text_center text_uppercase" data-scroll>
								Journey Back to Wisdom
							</h3>
							<div className={`${styles.info_section} pt_50`}>
								<div className={`${styles.box}`}>
									<p className="text_18_m pb_20" data-scroll>
										Om Dhumatkar is a strategist & coach to India&apos;s leading Founders,
										Investors, and Execs; and splits his time between London and
										India.&nbsp;
									</p>
									<p className="text_18_m pb_20" data-scroll>
										With 18+ years of Vedic learning, Om is a renowned speaker on the
										Bhagavad Gita. He is a sought-after pundit, bringing alive ancient
										ceremonies for modern times.&nbsp;
									</p>
									<p className="text_18_m pb_20" data-scroll>
										His insights on everyday spirituality means that Om is a regular guest
										on several media platforms, including the BBC.
									</p>
								</div>
								<div className={`${styles.box}`}>
									<p className="text_18_m pb_20" data-scroll>
										Om is a qualified pundit - regularly conducting wedding and Havan
										ceremonies, explaining the meaning behind each act of worship.
									</p>
									<p className="text_18_m pb_20" data-scroll>
										He is the founding MD of GD Partners Strategic Advisory, with clients
										across California, New York, London, Amsterdam, Dubai, and
										India.&nbsp;
									</p>
									<p className="text_18_m pb_20" data-scroll>
										He is a graduate of the prestigious London School of Economics; was
										recognised as one of UK&apos;s Top 10 Inspirational Leaders in 2021.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.work}`}>
					<section className="container">
						<div className={`${styles.connect_section} pt_100 pb_80`}>
							<div className={`${styles.left_img}`} data-scroll>
								<img src={leftImg.src} className="img-responsive" alt="leftImg" />
							</div>
							<div className={`${styles.btn_section}`} data-scroll>
								<div className={`${styles.btn}`}>
									<span className="text_24_m">WORK WITH OM</span>
								</div>
							</div>
							<div className={`${styles.right_img}`} data-scroll>
								<img src={rightImg.src} className="img-responsive" alt="leftImg" />
							</div>
						</div>
					</section>
					<div className={`${styles.work_section} pt_40`}>
						<div className={`${styles.work_item}`} data-scroll>
							<a href="weddings" className="text_16_m text_center text_uppercase">
								<img src={Weddings.src} className="img-responsove" alt="Weddings" />
								<div className={`${styles.work_info} text_center`}>
									<h3 className="text_center text_24_b text_uppercase pb_10">
										Weddings
									</h3>
									<span className={styles.knowMorePlus}>+</span> Know More
								</div>
							</a>
						</div>
						<div className={`${styles.work_item}`} data-scroll>
							<a href="ceremonies" className="text_16_m text_center text_uppercase">
								<img
									src={"img/home/Ceremonies2025.jpg"}
									className="img-responsove"
									alt="Ceremonies"
								/>
								<div className={`${styles.work_info} text_center`}>
									<h3 className="text_center text_24_b text_uppercase pb_10">
										ceremonies
									</h3>
									<span className={styles.knowMorePlus}>+</span> Know More
								</div>
							</a>
						</div>
						<div className={`${styles.work_item}`} data-scroll>
							<a href="speaking" className="text_16_m text_center text_uppercase">
								<img
									src={"/img/home/Speaking2025.jpg"}
									className="img-responsove"
									alt="Speaking"
								/>
								<div className={`${styles.work_info} text_center`}>
									<h3 className="text_center text_24_b text_uppercase pb_10">
										speaking
									</h3>
									<span className={styles.knowMorePlus}>+</span> Know More
								</div>
							</a>
						</div>
						<div className={`${styles.work_item}`} data-scroll>
							<a href="one-on-one" className="text_16_m text_center text_uppercase">
								<img src={business.src} className="img-responsove" alt="One on One" />
								<div className={`${styles.work_info} text_center`}>
									<h3 className="text_center text_24_b text_uppercase pb_10">
										one-on-one
									</h3>
									<span className={styles.knowMorePlus}>+</span> Know More
								</div>
							</a>
						</div>
						<div className={`${styles.work_item}`} data-scroll>
							<a
								href="creative-consulting"
								className="text_16_m text_center text_uppercase"
							>
								<img
									src={creative.src}
									className="img-responsove"
									alt="Creative Consulting"
								/>
								<div className={`${styles.work_info} text_center`}>
									<h3 className="text_center text_24_b text_uppercase pb_10">
										creative Consulting
									</h3>
									<span className={styles.knowMorePlus}>+</span> Know More
								</div>
							</a>
						</div>
						<div className={`${styles.work_item}`} data-scroll>
							<a
								href="business-consulting"
								className="text_16_m text_center text_uppercase"
							>
								<img
									src={"/img/home/businessConsulting.jpg"}
									className="img-responsove"
									alt="Business Consulting"
								/>
								<div className={`${styles.work_info} text_center`}>
									<h3 className="text_center text_24_b text_uppercase pb_10">
										BUSINESS CONSULTING
									</h3>
									<span className={styles.knowMorePlus}>+</span> Know More
								</div>
							</a>
						</div>
					</div>
				</section>
				<section style={{ backgroundColor: "#fff" }}>
					<section className="container">
						<div className={`${styles.connect_section} pt_100 pb_80`}>
							<div className={`${styles.left_img}`} data-scroll>
								<img src={leftImg.src} className="img-responsive" alt="leftImg" />
							</div>
							<div className={`${styles.btn_section}`} data-scroll>
								<div className={`${styles.btn}`}>
									<a href="connect" className="text_24_m">
										+ CONNECT WITH OM
									</a>
								</div>
							</div>
							<div className={`${styles.right_img}`} data-scroll>
								<img src={rightImg.src} className="img-responsive" alt="leftImg" />
							</div>
						</div>
					</section>
				</section>
			</main>
			<Footer />
			{/* Page Content ends here */}
		</div>
	);
}
