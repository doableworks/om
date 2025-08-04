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
// import Slider from "react-slick";
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
import videoTham from "../public/img/weddings/video_tham.jpg";
// import playBtn from "../public/img/weddings/play_btn.svg";
// import testAnimation from "../public/img/weddings/animation_img.png";
// import hindiText1 from "../public/img/weddings/hindi_text_1.png";
// import event1 from "../public/img/weddings/event_1.jpg";
// import event2 from "../public/img/weddings/event_2.jpg";
// import event3 from "../public/img/weddings/event_3.jpg";
// import event4 from "../public/img/weddings/event_4.jpg";
// import event5 from "../public/img/weddings/event_5.jpg";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";
import arrows from "../public/img/arrows.svg";

// DATA //

/**
 * Creative consulting page for Om.
 * @returns {JSX.Element}
 */
export default function CreativePage() {
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

	// var settings = {
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	// fade: true,
	// 	arrows: false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 3000,
	// 	pauseOnHover: false,
	// };
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Om"} Desc={"Om"} OgImg={""} Url={"/"} />

			<Header />
			{/* Page Content starts here */}
			<main className={`${styles.weddings_Page}`}>
				<section className={styles.banner} data-scroll>
					{/* Desktop video */}
					<video
						src="https://websitetestcontent.s3.us-east-1.amazonaws.com/Creative+Consulting+Banner.mp4"
						className={`${styles.videoDesktop} img-responsive`}
						muted
						autoPlay
						loop
						style={{}}
					/>
					{/* Mobile video */}
					<video
						src="https://websitetestcontent.s3.us-east-1.amazonaws.com/Creative+Consulting+Mobile.mp4"
						className={`${styles.videoMobile} img-responsive`}
						muted
						autoPlay
						loop
					/>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							backgroundColor: "rgba(0, 0, 0, 0.3)",
							pointerEvents: "none",
						}}
					/>
					{/* <img
						src={videoTham.src}
						className="img-responsive"
						alt="videoTham"
						style={{ width: "100%", height: "100%", display: "block" }}
					/> */}
					<Link href="/" legacyBehavior>
						<a className={styles.weddingBannerBtn}>
							<span className={styles.weddingBannerBtnArrow}>
								<img
									src={arrows.src}
									alt="arrow"
									style={{ width: "100%", height: "auto" }}
								/>
							</span>
							CREATIVE CONSULTING
						</a>
					</Link>
				</section>
				{/* <section className={`${styles.slider_section}`}>
					<div className={styles.slider_container}>
						<Slider {...settings}>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									"Thank you for being such a guiding light"
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									"Every mantra felt like a blessing."
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									"Om brought divine grace to our wedding."
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									"The rituals were deeply meaningful and unforgettable."
								</p>
							</div>
						</Slider>
					</div>
				</section> */}
				<section className="container">
					<div className={`${styles.weddings_info} pt_60 pb_100 text_center`}>
						<h3 className="text_36_b gradient_text pt_60 pb_30" data-scroll>
							CREATIVE CONSULTING
						</h3>
						<div className={`${styles.para_section}`}>
							<p className="text_18_m pb_20" data-scroll>
								Om is regularly approached by filmmakers and creative artists to
								understand the spiritual meaning behind Hinduisms rich storytelling
								traditions.
							</p>
							<p className="text_18_m pb_20" data-scroll>
								His ability to bridge mystical Hindu history, with practical everyday
								insights appeals to those who know these stories, and those who are new
								to Hinduism. 
							</p>
							<p className="text_18_m pb_20" data-scroll>
								Om is a credited writer for Dashavtar, a film production with a
								six-month run at the Nita Mukesh Ambani Cultural Centre (NMACC).
							</p>
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
