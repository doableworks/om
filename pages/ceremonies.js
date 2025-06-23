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
import styles from "@/styles/pages/Weddings.module.scss";

// IMAGES //
import BannerSlider from "../public/img/weddings/banner.jpg";
import videoTham from "../public/img/weddings/video_tham.jpg";
import playBtn from "../public/img/weddings/play_btn.svg";
import testAnimation from "../public/img/weddings/animation_img.png";
import hindiText1 from "../public/img/weddings/hindi_text_1.png";
import event1 from "../public/img/ceremonies/event_1.jpg";
import event2 from "../public/img/ceremonies/event_2.jpg";
import event3 from "../public/img/ceremonies/event_3.jpg";
import event4 from "../public/img/ceremonies/event_4.jpg";
import event5 from "../public/img/ceremonies/event_5.jpg";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";
import arrows from "../public/img/arrows.svg";

// DATA //

/**
 * Ceremonies page for Om.
 * @returns {JSX.Element}
 */
export default function CeremoniesPage() {
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
				<section className={styles.banner}>
					<video
						src="https://awsvideostorage.s3.us-east-1.amazonaws.com/Copy+of+Top+Banner+-+Ceremonies.mp4"
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
							CEREMONIES
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
									&ldquo;Spiritual grounding on such an important day.&rdquo;
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									&ldquo;Your calm guidance and devotion brought peace and
									positivity.&rdquo;
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									&ldquo;Each chant felt like a bridge between the seen and the
									unseen.&rdquo;
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									&ldquo;Created a space that felt both protected and
									profoundly blessed.&rdquo;
								</p>
							</div>
						</Slider>
					</div>
				</section>
				<section className="container">
					<div className={`${styles.weddings_info} pt_40 pb_60 text_center`}>
						<h3 className="text_36_b gradient_text pb_30">CEREMONIES</h3>
						<div className={`${styles.para_section}`}>
							<p className="text_18_m pb_20">
								Hindu wisdom is woven into every aspect of life - from auspicious
								beginnings to life-changing events.
							</p>
							<p className="text_18_m pb_20">
								Om&apos;s ceremonies bring out these profound nuggets of wisdom -
								allowing participants to fully understand and immerse themselves in the
								beauty of Hindu worship.
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
									src={"/img/HindiCeremonies.png"}
									className="img-responsive pb_20"
									alt="hindiText1"
								/>
								<p className="text_24_r pt_60" style={{ lineHeight: "1.2" }}>
									ALWAYS PERFORM ACTION IN A SPIRIT OF SACRIFICE. BY PERFORMING ACTION IN
									THIS WAY, ONE ATTAINS THE SUPREME.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="container">
					<h4 className="text_24_m text_uppercase text_center pt_80 pb_30">
						ceremonies over the years
					</h4>
					<div className={`${styles.weddings_work}  pb_40`}>
						<div className={`${styles.left_box}`}>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event1.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Office Inauguration</h5>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event4.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Griha Pravesh</h5>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event5.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Devi Havan</h5>
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
										<h5 className="text_18_m text_uppercase">Ganesh Puja</h5>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event3.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Baby Nursery Blessing</h5>
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
