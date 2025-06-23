/* eslint-disable no-irregular-whitespace */
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
import styles from "@/styles/pages/Speaking.module.scss";

// IMAGES //
import BannerSlider from "../public/img/weddings/banner.jpg";
import videoTham from "../public/img/weddings/video_tham.jpg";
import playBtn from "../public/img/weddings/play_btn.svg";
import testAnimation from "../public/img/weddings/animation_img.png";
import hindiText1 from "../public/img/weddings/hindi_text_1.png";
import event1 from "../public/img/weddings/event_1.jpg";
import event2 from "../public/img/weddings/event_2.jpg";
import event3 from "../public/img/weddings/event_3.jpg";
import event4 from "../public/img/weddings/event_4.jpg";
import event5 from "../public/img/weddings/event_5.jpg";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";
import arrows from "../public/img/arrows.svg";
import speakingImg from "../public/img/speaking/speaking_img.jpg";

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
				<section className={styles.banner}>
					<video
						src="https://awsvideostorage.s3.us-east-1.amazonaws.com/Copy+of+Top+Banner+-+Speaking.mp4"
						className="img-responsive"
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
					<div className={styles.slider_container}>
						<Slider {...settings}>
							<div className={`${styles.item}`}>
								<p className={`${styles.para_section}`} style={{ textAlign: "end" }}>
									"Om's words carry not just knowledge, but lived experience."
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p className={`${styles.para_section}`} style={{ textAlign: "end" }}>
									"He spoke to the mind, but touched the soul."
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p className={`${styles.para_section}`} style={{ textAlign: "end" }}>
									"Om left us feeling grounded yet uplifted."
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p className={`${styles.para_section}`} style={{ textAlign: "end" }}>
									"Omji reminded us of the strength and divinity of everyday life."
								</p>
							</div>
						</Slider>
					</div>
				</section>
				<section className="container">
					<div className={`${styles.weddings_info} pt_40 text_center`}>
						<h3 className="text_36_b gradient_text pb_30">SPEAKING</h3>
						<div className={`${styles.para_section}`}>
							<p className="pb_20">
								Hindu wisdom is timeless. That is why it is called ‘Sanatan’ or
								‘eternal’. But this wisdom can be difficult to understand, unless
								explained in its modern context.
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
									"https://awsvideostorage.s3.us-east-1.amazonaws.com/SSYouTube.online_Wedding+Final+Draft_1080p.mp4"
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
					<h4 className="text_24_m text_uppercase text_center pt_80 pb_30">
						Events over the years
					</h4>
					<div className={`${styles.weddings_work}  pb_40`}>
						<div className={`${styles.left_box}`}>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img
										src={"/img/speakingEvent1.jpg"}
										className="img-responsive"
										alt="event1"
									/>
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Event</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Location</h6>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img
										src={"/img/speakingEvent2.jpg"}
										className="img-responsive"
										alt="event1"
									/>
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Event</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Location</h6>
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.right_box}`}>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img
										src={"/img/speakingEvent3.jpg"}
										className="img-responsive"
										alt="event1"
									/>
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Event</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Location</h6>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img
										src={"/img/speaking/placeholder2.jpg"}
										className="img-responsive"
										alt="event1"
									/>
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Event</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Location</h6>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img
										src={"/img/speaking/placeholder1.jpg"}
										className="img-responsive"
										alt="event1"
									/>
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Event</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Location</h6>
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
