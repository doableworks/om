/* eslint-disable no-irregular-whitespace */
/**
 * SpeakingPage component renders the Speaking page with event details, video, and testimonials.
 * @returns {JSX.Element}
 */
// MODULES //
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

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
import styles from "@/styles/pages/Weddings.module.scss";

// IMAGES //

import videoTham from "../public/img/speaking/eventThumbnail.jpg";
import playBtn from "../public/img/weddings/play_btn.svg";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";
import arrows from "../public/img/arrows.svg";
import event_6 from "../public/img/speaking/event_6.jpg";

// DATA //

/** Home Page */
export default function SpeakingPage() {
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
	const videoRef = useRef(null);

	useEffect(() => {
		Fancybox.bind("[data-fancybox]", {});
	}, []);

	useEffect(() => {
		if (videoRef.current) {
			if (isVideoPlaying) {
				videoRef.current.play();
			} else {
				videoRef.current.pause();
			}
		}
	}, [isVideoPlaying]);

	/**
	 * Toggles the video play/pause state.
	 */
	const handleVideoToggle = () => {
		setIsVideoPlaying((prev) => !prev);
	};

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
			<main className={`${styles.weddings_Page}`}>
				<section className={styles.banner} data-scroll>
					<video
						src="https://websitetestcontent.s3.us-east-1.amazonaws.com/speakingHero.mp4"
						className={`${styles.videoDesktop} img-responsive`}
						muted
						autoPlay
						loop
					/>
					<video
						src="https://websitetestcontent.s3.us-east-1.amazonaws.com/Top+Banner+-+Speaking+Mobile.mp4"
						className={`${styles.videoMobile} img-responsive`}
						muted
						autoPlay
						loop
					/>
					<Link href="/" legacyBehavior>
						<a className={styles.weddingBannerBtn}>
							<span className={styles.weddingBannerBtnArrow}>
								<img
									src={arrows.src}
									alt="arrow"
									style={{ width: "100%", height: "auto" }}
								/>
							</span>
							SPEAKING
						</a>
					</Link>
				</section>
				<section className={`${styles.slider_section}`}>
					<div className={styles.slider_container} data-scroll>
						<Slider {...settings}>
							<div className={`${styles.item}`}>
								<p className={`${styles.para_section}`} style={{ textAlign: "end" }}>
									&quot;Om&apos;s words carry not just knowledge, but lived
									experience.&quot;
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p className={`${styles.para_section}`} style={{ textAlign: "end" }}>
									&quot;He spoke to the mind, but touched the soul.&quot;
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p className={`${styles.para_section}`} style={{ textAlign: "end" }}>
									&quot;Om left us feeling grounded yet uplifted.&quot;
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p className={`${styles.para_section}`} style={{ textAlign: "end" }}>
									&quot;Omji reminded us of the strength and divinity of everyday
									life.&quot;
								</p>
							</div>
						</Slider>
					</div>
				</section>
				<section className="container">
					<div className={`${styles.weddings_info} pt_40 text_center`}>
						<h3 className="text_36_b gradient_text pb_30" data-scroll>
							SPEAKING
						</h3>
						<div className={`${styles.para_section}`} data-scroll>
							<p className="pb_20">
								Hindu wisdom is timeless. That is why it is called &apos;Sanatan&apos;
								or &apos;eternal&apos;. But this wisdom can be difficult to understand,
								unless explained in its modern context.
							</p>
							<p>
								Whether at public events, corporate seminars, or family gatherings, Om
								conveys the timeless wisdom of Hindu shastras in a way that is
								relatable, practical, and impactful in our everyday lives.
							</p>
						</div>
					</div>
					<div
						className={`${styles.video_section}`}
						style={{ position: "relative" }}
						data-scroll
					>
						{!isVideoPlaying && (
							<>
								<img
									src={videoTham.src}
									className="img-responsive"
									alt="videoTham"
									style={{ width: "100%", height: "100%", display: "block" }}
								/>
								<img
									src={playBtn.src}
									alt="playBtn"
									style={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
										width: 100,
										cursor: "pointer",
										zIndex: 2,
									}}
									onClick={handleVideoToggle}
								/>
							</>
						)}
						{isVideoPlaying && (
							<video
								src={
									"https://websitetestcontent.s3.us-east-1.amazonaws.com/a23ff480-38f9-4fd2-bbb0-1a517216c06b.mp4"
								}
								className="img-responsive"
								style={{ height: "100%", width: "100%" }}
								alt="videoTham"
								playsInline
								controls
								ref={videoRef}
							/>
						)}
					</div>
				</section>
				<section className="container">
					<h4
						className="text_24_m text_uppercase text_center pt_80 pb_30"
						data-scroll
					>
						Events over the years
					</h4>
					<div className={`${styles.weddings_work}  pb_40`}>
						<div className={`${styles.left_box}`}>
							<div className={`${styles.box} pb_40`} data-scroll>
								<div className={`${styles.box_img}`}>
									<img
										src={"/img/speakingEvent1.jpg"}
										className="img-responsive"
										alt="event1"
									/>
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Business Startup Forum</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Hyderabad</h6>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`} data-scroll>
								<div className={`${styles.box_img}`}>
									<img
										src={"/img/speakingEvent2.jpg"}
										className="img-responsive"
										alt="event1"
									/>
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Diwali with Mayor</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Birmingham (UK)</h6>
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.right_box}`}>
							<div className={`${styles.box} pb_40`} data-scroll>
								<div className={`${styles.box_img}`}>
									<img
										src={"/img/speakingEvent3.jpg"}
										className="img-responsive"
										alt="event1"
									/>
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">EO/YPO Wellness event</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Ahmedabad</h6>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`} data-scroll>
								<div className={`${styles.box_img}`}>
									<img
										src={"/img/speakingEvent4.jpg"}
										className="img-responsive"
										alt="event1"
									/>
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Maha Kumbh Mela</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Prayagraj</h6>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`} data-scroll>
								<div className={`${styles.box_img}`}>
									<img
										src={event_6.src}
										className="img-responsive"
										alt="event1"
									/>
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Youth Retreat</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Mulshi</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="container">
					<div className={`${styles.connect_section} pt_20 pb_80`} data-scroll>
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
