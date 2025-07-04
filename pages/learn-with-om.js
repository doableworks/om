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
import AudioCover from "../public/img/AudioCover.jpg";
import Bhagavad_gita from "../public/img/learn-with-om/Bhagavad Gita.jpg";
import hanuman_chalisa from "../public/img/learn-with-om/Hanuman Chalisa.jpg";
import BBC_Audio from "../public/img/learn-with-om/BBC Audio.webp";
import Ranveer_Allahbadia from "../public/img/learn-with-om/Ranveer Allahbadia.jpg";
import Humans_of_Bombay from "../public/img/learn-with-om/Humans of Bombay.jpg";
import Radhika_Das from "../public/img/learn-with-om/Radhika Das.jpg";
import Times_of_India from "../public/img/learn-with-om/Times of India (Hindi).jpg";
import The_Rao_Podcast from "../public/img/learn-with-om/The Rao Podcast.jpg";
import The_Rich_Show from "../public/img/learn-with-om/The Rich Show (Hindi).jpg";
import Arun_Pandit from "../public/img/learn-with-om/Arun Pundit (Hindi).jpg";
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
				<section className={`${styles.banner}`} data-scroll>
					<div className={`${styles.banner_section}`}>
						{/* <Slider {...settings}> */}
						<div className={`${styles.item} pb_40`}>
							<video
								src={
									"https://websitetestcontent.s3.us-east-1.amazonaws.com/Learn+With+Om+Banner.mp4"
								}
								className="img-responsive"
								alt="BannerSlider"
								muted
								autoPlay
								loop
							/>
						</div>
						{/* </Slider> */}
					</div>
				</section>
				<section className="container">
					<div className={`${styles.weddings_info} pt_60 pb_60 text_center`}>
						<h3 className="text_36_b gradient_text">LEARN WITH OM</h3>
						<div
							className={`${styles.para_section}`}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<p className="text_18_m pb_20" style={{ width: "90%" }}>
								Om&apos;s YouTube channel features a selection of videos that make
								ancient Hindu scriptures accessible and easy to apply in daily life.
							</p>
							<p className="text_18_m pb_20" style={{ width: "90%" }}>
								He breaks things down into simple and practical concepts. Instead of
								jargon and gate keeping, there are thoughtful conversations on dharma,
								life, purpose and more.
							</p>
							<p
								className="text_18_m pb_20"
								style={{ width: "90%", lineHeight: "1.5" }}
							>
								From the Vedas to the Gita, you will find timeless wisdom that is
								surprisingly relatable.
							</p>
						</div>
					</div>
				</section>
				<section className="container">
					<div className={`${styles.weddings_info} pb_80`}>
						<div className={`${styles.title_section}`} data-scroll>
							<h3 className="text_uppercase">bhagavad gita</h3>
						</div>
						<div className={`${styles.para_section}`} data-scroll>
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
					<div className={`${styles.video_section}`} data-scroll>
						<a href="https://www.youtube.com/playlist?list=PLSyEwewdBy3JnJueSLhT3WH6AWQ3FFQPQ">
							<img
								src={Bhagavad_gita.src}
								className="img-responsive"
								alt="videoTham"
							/>
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
						<div className={`${styles.title_section}`} data-scroll>
							<h3 className="text_36_b text_uppercase pb_30">hanuman chalisa</h3>
						</div>
						<div className={`${styles.para_section}`} data-scroll>
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
					<div className={`${styles.video_section}`} data-scroll>
						<a href="https://youtu.be/EngW7tLk6R8">
							<img
								src={hanuman_chalisa.src}
								className="img-responsive"
								alt="videoTham"
							/>
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
					<div className={`${styles.podcast_info}`} data-scroll>
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
						{/* BeerBiceps */}
						<div className={`${styles.podcast_item}`} data-scroll>
							<a
								href="https://www.youtube.com/watch?v=8KoL3XieyQM"
								target="_blank"
								rel="noopener noreferrer"
								style={{ position: "relative", display: "block" }}
							>
								<img
									src={Ranveer_Allahbadia.src}
									className="img-responsive"
									alt="BeerBiceps"
									style={{ width: "100%" }}
								/>
								<img
									src={playBtn.src}
									className={`${styles.play_btn} img-responsive`}
									alt="Play"
								/>
							</a>
							<p className="text_16_m pt_10">BeerBiceps</p>
						</div>
						{/* Humans of Bombay */}
						<div className={`${styles.podcast_item}`} data-scroll>
							<a
								href="https://www.youtube.com/watch?v=eZpEgIT4ssw"
								target="_blank"
								rel="noopener noreferrer"
								style={{ position: "relative", display: "block" }}
							>
								<img
									src={Humans_of_Bombay.src}
									className="img-responsive"
									alt="Humans of Bombay"
									style={{ width: "100%" }}
								/>
								<img
									src={playBtn.src}
									className={`${styles.play_btn} img-responsive`}
									alt="Play"
								/>
							</a>
							<p className="text_16_m pt_10">Humans of Bombay</p>
						</div>
						{/* Radhika Das */}
						<div className={`${styles.podcast_item}`} data-scroll>
							<a
								href="https://www.youtube.com/watch?v=SjlJyWZQ5vA"
								target="_blank"
								rel="noopener noreferrer"
								style={{ position: "relative", display: "block" }}
							>
								<img
									src={Radhika_Das.src}
									className="img-responsive"
									alt="Radhika Das"
									style={{ width: "100%" }}
								/>
								<img
									src={playBtn.src}
									className={`${styles.play_btn} img-responsive`}
									alt="Play"
								/>
							</a>
							<p className="text_16_m pt_10">Radhika Das</p>
						</div>
						{/* Times of India (Hindi) */}
						<div className={`${styles.podcast_item}`} data-scroll>
							<a
								href="https://www.youtube.com/watch?v=cQOiLy6B4Wo"
								target="_blank"
								rel="noopener noreferrer"
								style={{ position: "relative", display: "block" }}
							>
								<img
									src={Times_of_India.src}
									className="img-responsive"
									alt="Times of India (Hindi)"
									style={{ width: "100%" }}
								/>
								<img
									src={playBtn.src}
									className={`${styles.play_btn} img-responsive`}
									alt="Play"
								/>
							</a>
							<p className="text_18_m pt_10">Times of India (Hindi)</p>
						</div>
						{/* The Rao Podcast */}
						<div className={`${styles.podcast_item}`} data-scroll>
							<a
								href="https://www.youtube.com/watch?v=TtkOHF2qdhs"
								target="_blank"
								rel="noopener noreferrer"
								style={{ position: "relative", display: "block" }}
							>
								<img
									src={The_Rao_Podcast.src}
									className="img-responsive"
									alt="The Rao Podcast"
									style={{ width: "100%" }}
								/>
								<img
									src={playBtn.src}
									className={`${styles.play_btn} img-responsive`}
									alt="Play"
								/>
							</a>
							<p className="text_18_m pt_10">The Rao Podcast</p>
						</div>
						{/* The Rich Show (Hindi) */}
						<div className={`${styles.podcast_item}`} data-scroll>
							<a
								href="https://www.youtube.com/watch?v=B1rET61hkqE"
								target="_blank"
								rel="noopener noreferrer"
								style={{ position: "relative", display: "block" }}
							>
								<img
									src={The_Rich_Show.src}
									className="img-responsive"
									alt="The Rich Show (Hindi)"
									style={{ width: "100%" }}
								/>
								<img
									src={playBtn.src}
									className={`${styles.play_btn} img-responsive`}
									alt="Play"
								/>
							</a>
							<p className="text_18_m pt_10"> The Rich Show (Hindi)</p>
						</div>
						{/* Arun Pundit (Hindi) */}
						<div className={`${styles.podcast_item}`} data-scroll>
							<a
								href="https://www.youtube.com/watch?v=Up09pBny9RU"
								target="_blank"
								rel="noopener noreferrer"
								style={{ position: "relative", display: "block" }}
							>
								<img
									src={Arun_Pandit.src}
									className="img-responsive"
									alt="Arun Pundit (Hindi)"
									style={{ width: "100%" }}
								/>
								<img
									src={playBtn.src}
									className={`${styles.play_btn} img-responsive`}
									alt="Play"
								/>
							</a>
							<p className="text_18_m pt_10"> Arun Pundit (Hindi)</p>
						</div>
						{/* BBC Podcast (use cover image instead of SVG) */}
						<div className={`${styles.podcast_item}`} data-scroll>
							<a
								href="https://www.bbc.com/audio/play/p0h8dz7z"
								target="_blank"
								rel="noopener noreferrer"
								style={{ position: "relative", display: "block" }}
							>
								<img
									src={BBC_Audio.src}
									className="img-responsive"
									alt="BBC Audio"
									style={{ width: "100%" }}
								/>
								<div
									className={`${styles.play_btn} img-responsive`}
									style={{ pointerEvents: "none" }}
								>
									<img
										src={playBtn.src}
										className={`${styles.play_btn} img-responsive`}
										alt="Play"
									/>
								</div>
							</a>
							<p className="text_18_m pt_10">
								BBC: BBC Audio | The Documentary Podcast | Heart and Soul: Religion in
								the 21st Century - Hindus (episode 2 of 3)
							</p>
						</div>
					</div>
					{/* </div> */}
				</section>

				<section className="container">
					<div className={`${styles.connect_section} pt_80 pb_80`}>
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
			</main>
			<Footer />
			{/* Page Content ends here */}
		</div>
	);
}
