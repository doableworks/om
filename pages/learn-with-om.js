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
import styles from "@/styles/pages/Om.module.scss";

// IMAGES //
import BannerSlider from "../public/img/om/banner_slider_1.jpg";
import videoTham from "../public/img/weddings/video_tham.jpg";
import playBtn from "../public/img/weddings/play_btn.svg";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";

// DATA //

/** OneInOnePage Page */
export default function OmPage() {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		Fancybox.bind("[data-fancybox]", {});
	}, []);

	/**
	 handle play of audio 
	*/
	const handlePlayAudio = () => {
		if (audioRef.current) {
			audioRef.current.play();
			setIsPlaying(true);
		}
	};

	/**
	 ending audio play
	 */
	const handleAudioEnded = () => {
		setIsPlaying(false);
	};

	/**handle pauding audio play */
	const handleAudioPause = () => {
		setIsPlaying(false);
	};

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
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
			<main className={`${styles.OmPage}`}>
				<section className={`${styles.banner}`}>
					<div className={`${styles.banner_section}`}>
						{/* <Slider {...settings}> */}
						<div className={`${styles.item} pb_40`}>
							<img src={videoTham.src} className="img-responsive" alt="BannerSlider" />
							<div className={`${styles.banner_text}`}>
								<p className="text_18_r">
									Om&apos;s YouTube channel features a selection of videos that make
									ancient Hindu scriptures accessible and easy to apply in daily life.
								</p>
							</div>
						</div>
						{/* </Slider> */}
					</div>
				</section>
				<section className="container">
					<div className={`${styles.weddings_info} ptb_80`}>
						<div className={`${styles.title_section}`}>
							<h3 className="text_uppercase">bhagavad gita</h3>
						</div>
						<div className={`${styles.para_section}`}>
							<p>
								The Bhagavad Gita is the cornerstone of Hindu thought. It is a text kept
								in every Hindu home. And yet, many Hindus are disconnected from its
								profound meaning. 
							</p>
							<p>
								Om&apos;s talks on the Bhagavad Gita bring out the life-changing meaning
								of Bhagawan&apos;s words, couched in modern examples. 
							</p>
							<p>
								These concept-by-concept explanations have been appreciated by people of
								all ages, Hindus across the globe, and many newcomers to Sanatan Vedic
								Dharma.
							</p>
							<div className={`${styles.btn_section} pt_10`}>
								<a
									href="https://www.youtube.com/playlist?list=PLSyEwewdBy3JnJueSLhT3WH6AWQ3FFQPQ"
									className="text_uppercase"
								>
									+ check out the full playlist
								</a>
							</div>
						</div>
					</div>
					<div className={`${styles.video_section}`}>
						<a data-fancybox href="https://www.youtube.com/playlist?list=PLSyEwewdBy3JnJueSLhT3WH6AWQ3FFQPQ">
							<img src={videoTham.src} className="img-responsive" alt="videoTham" />
							<img
								src={playBtn.src}
								className={`${styles.play_btn} img-responsive`}
								alt="videoTham"
							/>
						</a>
					</div>
				</section>
				<section className="container">
					<div className={`${styles.weddings_info} ptb_80`}>
						<div className={`${styles.title_section}`}>
							<h3 className="text_36_b text_uppercase pb_30">hanuman chalisa</h3>
						</div>
						<div className={`${styles.para_section}`}>
							<p className="text_18_m pb_20">
								Om&apos;s talks on the Hanuman Chalisa have been viewed by millions
								across the globe. 
							</p>
							<p className="text_18_m pb_20">
								His detailed word-by-word explanation of this profound hymn conveys its
								mystical and devotional aspects. 
							</p>
							<p className="text_18_m pb_20">
								Over 24 bite-sized videos, Om has covered the meaning and philosophy of
								the Hanuman Chalisa, illustrating its meaning with deep and moving
								stories from our Hindu heritage.
							</p>
							<div className={`${styles.btn_section} pt_10`}>
								<a
									href="https://youtube.com/playlist?list=PLSyEwewdBy3LDIPdW67GmXCSErx1kPcJh&si=mzLOGNzkOnJnwU0N"
									className="text_16_b text_uppercase"
								>
									+ check out the full playlist
								</a>
							</div>
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
				<section className={`${styles.podcast} ptb_80`}>
					{/* <div className="container"> */}
					<div className={`${styles.podcast_info}`}>
						<h4>podcasts</h4>
						<p>
							Om is a renowned speaker on Vedic spirituality, regularly invited to top
							podcasts in India and abroad. 
						</p>
						<p>
							His straightforward and accessible approach to spirituality enables
							listeners to draw practical insights for their own spiritual lives -
							whether as beginners or advanced spiritualists.
						</p>
					</div>
					<div className={`${styles.podcast_section}`}>
						<div className={`${styles.podcast_item}`}>
							<iframe width="534" height="301" src="https://www.youtube.com/embed/8KoL3XieyQM?si=U_JvzUFGbX_Z7hpx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
							<p className="text_16_m pt_10">BeerBiceps</p>
						</div>
						<div className={`${styles.podcast_item}`}>
							<iframe width="534" height="301" src="https://www.youtube.com/embed/eZpEgIT4ssw?si=UpgixTsm94oLbWcp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
							<p className="text_16_m pt_10">Humans of Bombay</p>
						</div>
						<div className={`${styles.podcast_item}`}>
							<iframe width="534" height="301" src="https://www.youtube.com/embed/SjlJyWZQ5vA?si=eGSYRTPwLOKq8ZTk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
							<p className="text_16_m pt_10">Radhika Das</p>
						</div>
						<div className={`${styles.podcast_item}`}>
							<iframe width="534" height="301" src="https://www.youtube.com/embed/cQOiLy6B4Wo?si=bMw0n37AadDH1Ad7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
							<p className="text_18_m pt_10">Times of India (Hindi)</p>
						</div>
						<div className={`${styles.podcast_item}`}>
							<div
								style={{ position: "relative", cursor: "pointer" }}
								onClick={() => {
									if (!isPlaying && audioRef.current) {
										audioRef.current.play();
										setIsPlaying(true);
									}
								}}
								aria-label="Play BBC Podcast audio"
								role="button"
								tabIndex={0}
								onKeyPress={e => {
									if ((e.key === "Enter" || e.key === " ") && !isPlaying && audioRef.current) {
										audioRef.current.play();
										setIsPlaying(true);
									}
								}}
							>
								<img src={videoTham.src} className="img-responsive" alt="BBC Podcast" />
								{!isPlaying && (
									<img
										src={playBtn.src}
										className={`${styles.play_btn} img-responsive`}
										alt="Play audio"
										style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
									/>
								)}
								<audio
									ref={audioRef}
									onEnded={handleAudioEnded}
									onPause={handleAudioPause}
									controls={isPlaying}
									style={{
										position: "absolute",
										bottom: isPlaying ? "10px" : "-100px",
										left: "50%",
										transform: "translateX(-50%)",
										width: isPlaying ? "90%" : "0",
										opacity: isPlaying ? 1 : 0,
										transition: "all 0.3s ease",
										zIndex: 2
									}}
								>
									<source src="https://awsvideostorage.s3.us-east-1.amazonaws.com/BbcPodcast.mp3" type="audio/mpeg" />
									Your browser does not support the audio element.
								</audio>
							</div>
							<p className="text_18_m pt_10">
								BBC: BBC Audio | The Documentary Podcast | Heart and Soul: Religion in the 21st Century - Hindus (episode 2 of 3)
							</p>
						</div>
						<div className={`${styles.podcast_item}`}>
							<iframe width="534" height="301" src="https://www.youtube.com/embed/TtkOHF2qdhs?si=lrIV2QswT4VDnZlm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
							<p className="text_18_m pt_10">The Rao Podcast</p>
						</div>
						<div className={`${styles.podcast_item}`}>
							<iframe width="534" height="301" src="https://www.youtube.com/embed/B1rET61hkqE?si=MnHETS5eToX2L8Vh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
							<p className="text_18_m pt_10"> The Rich Show (Hindi)</p>
						</div>
						<div className={`${styles.podcast_item}`}>
							<iframe width="534" height="301" src="https://www.youtube.com/embed/Up09pBny9RU?si=-RXdTWT0TFqWqL40" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
							<p className="text_18_m pt_10"> Arun Pundit (Hindi)</p>
						</div>
					</div>
					{/* </div> */}
				</section>

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