/* eslint-disable no-irregular-whitespace */
/**
 * WeddingsPage component renders the Weddings page with event details, video, and testimonials.
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
import WeddingVideoCover from "../public/img/weddings/weddingsVideoCover.jpg";
import arrows from "../public/img/arrows.svg";

// DATA //

/** Home Page */
export default function WeddingsPage() {
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
						src="https://websitetestcontent.s3.us-east-1.amazonaws.com/weddingBanner.mp4"
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
							WEDDINGS
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
									&quot;Thank you for being such a guiding light&quot;
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									&quot;Every mantra felt like a blessing.&quot;
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									&quot;Om brought divine grace to our wedding.&quot;
								</p>
							</div>
							<div className={`${styles.item}`}>
								<p
									className={`${styles.para_section} text_24_r`}
									style={{ textAlign: "end" }}
								>
									&quot;The rituals were deeply meaningful and unforgettable.&quot;
								</p>
							</div>
						</Slider>
					</div>
				</section>
				<section className="container">
					<div className={`${styles.weddings_info} pt_40 pb_60 text_center`}>
						<h3 className="text_36_b gradient_text pb_30">WEDDINGS</h3>
						<div className={`${styles.para_section}`}>
							<p className="text_18_m pb_20">
								Hindu weddings are profound, life-changing events.{" "}
							</p>
							<p className="text_18_m pb_20">
								But the depth of the ceremony is often lost in complicated rituals that
								the couple doesn&apos;t understand, and the guests don&apos;t enjoy.
							</p>
							<p className="text_18_m pb_20">
								Om&apos;s ceremony explains each wedding ritual in its modern context,
								making it meaningful for the couple, and inviting their families and the
								audience to participate.
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
									src={WeddingVideoCover.src}
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
									"https://websitetestcontent.s3.us-east-1.amazonaws.com/weddingVideo.mp4"
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
									src={hindiText1.src}
									className="img-responsive pb_20"
									alt="hindiText1"
								/>
								<p className="text_16_r pt_60" style={{ lineHeight: "1.5", width:"65%" }}>
									THIS THREAD THAT BINDS US IS A COMMITMENT FOR LIFE. MAY THIS KNOT OF
									MARRIAGE BRING AUSPICIOUSNESS FOR A HUNDRED YEARS.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="container">
					<h4 className="text_24_m text_uppercase text_center pt_80 pb_30">
						weddings over the years
					</h4>
					<div className={`${styles.weddings_work}  pb_40`}>
						<div className={`${styles.left_box}`}>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event1.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Shruti & Rahul</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Mumbai</h6>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event2.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Ying & Vishal</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Mumbai</h6>
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.right_box}`}>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event3.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Priya & Kabir</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Miami</h6>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event4.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Mahima & Harsh</h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Gujarat</h6>
									</div>
								</div>
							</div>
							<div className={`${styles.box} pb_40`}>
								<div className={`${styles.box_img}`}>
									<img src={event5.src} className="img-responsive" alt="event1" />
								</div>
								<div className={`${styles.name_title} pt_20`}>
									<div className={`${styles.name}`}>
										<h5 className="text_18_m text_uppercase">Priya & Kabir </h5>
									</div>
									<div className={`${styles.title}`}>
										<h6 className="text_16_r">Bali</h6>
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
