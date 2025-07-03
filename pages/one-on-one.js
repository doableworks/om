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
import styles from "@/styles/pages/OneInOne.module.scss";

// IMAGES //
import videoTham from "../public/img/weddings/video_tham.jpg";
import playBtn from "../public/img/weddings/play_btn.svg";
import testAnimation from "../public/img/weddings/animation_img.png";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";
import arrows from "../public/img/arrows.svg";

// DATA //

/**
 * One-on-one coaching page for Om.
 * @returns {JSX.Element}
 */
export default function OneInOnePage() {
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

	// const handleVideoToggle = () => {
	// 	setIsVideoPlaying((prev) => !prev);
	// };

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
					{/* <video
						src="/Video/weddingBanner.mp4"
						className="img-responsive"
						muted
						autoPlay
						loop
					/> */}
					<img
						src={videoTham.src}
						className="img-responsive"
						alt="videoTham"
						style={{ width: "100%", height: "100%", display: "block" }}
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
							ONE ON ONE
						</a>
					</Link>
				</section>
				<section className={`${styles.slider_section}`}>
					<div className={styles.slider_container}>
						<Slider {...settings}>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									&ldquo;Being coached by Om means feeling seen, heard and
									understood&rdquo;
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									&ldquo;Om, your guidance has reshaped my world.&rdquo;
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									&ldquo;I have grown more in these two years than I did in the past 15
									years.&rdquo;
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									&ldquo;Om has helped me align with my true self.&rdquo;
								</p>
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
								life&apos;s challenges with faith, clarity, resilience, and an
								ever-deepening connection to their truest selves.
							</p>
						</div>
					</div>
					<div
						className={`${styles.video_section}`}
						style={{ position: "relative" }}
					>
						{/* {!isVideoPlaying && ( */}
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
								// onClick={handleVideoToggle}
							/>
						</>
						{/* )} */}
						{/* {isVideoPlaying && (
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
						)} */}
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
							<div className={`${styles.item} pb_40`}>
								<img
									src={"/img/HindiOneOnOne.png"}
									className="img-responsive pb_20"
									alt="hindiText1"
								/>
								<p className="text_16_r pt_60" style={{ lineHeight: "1.2" }}>
									Lift yourself by yourself
								</p>
								<p className="text_16_r pt_20" style={{ lineHeight: "1.5",  width:"60%"}}>
									Do not lower yourself. For this self alone is your friend; and this
									self also can be your enemy.
								</p>
								<div
									style={{
										width: "10px",
										height: "10px",
										backgroundColor: "#00A1BC",
										borderRadius: "15px",
										margin: "40px auto",
										display: "block",
									}}
								>
									{" "}
								</div>
								<p
									className="text_16_r"
									style={{ lineHeight: "1.2", color: "#F9B875" }}
								>
									Bhagavad Gita Chapter 6 | Verse 5
								</p>
							</div>
						</div>
					</div>
				</section>
				{/* <section className={`${styles.one_in_one_event} ptb_80`}>
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
				</section> */}
				<section className="container">
					<div className={`${styles.connect_section} pt_80 pb_80`}>
						<div className={`${styles.left_img}`}>
							<img src={leftImg.src} className="img-responsive" alt="leftImg" />
						</div>
						<div className={`${styles.btn_section}`}>
							<div className={`${styles.btn}`}>
								<a href="connect" className="text_24_m">
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
