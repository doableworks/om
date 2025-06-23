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
import styles from "@/styles/pages/BlogPage.module.scss";

// IMAGES //
import videoTham from "../public/img/weddings/video_tham.jpg";
import playBtn from "../public/img/weddings/play_btn.svg";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";
import BlogBanner from "../public/img/blog/blog_banner_img.jpg";

// DATA //

/** BlogPage Page */
export default function BlogPage() {
	useEffect(() => {
		Fancybox.bind("[data-fancybox]", {});
	}, []);
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Om"} Desc={"Om"} OgImg={""} Url={"/"} />

			<Header />
			{/* Page Content starts here */}
			<main className={`${styles.BlogPage}`}>
				<section className={`${styles.podcast} ptb_80`}>
					<div className="container">
						<div className={`${styles.podcast_info}`}>
							<h4>Blog</h4>
						</div>
						<div className={`${styles.podcast_section}`}>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a href="/blog/1">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<div className={`${styles.podcast_text}`}>
									<h5>What is the symbolism of the mangalsutra</h5>
									<p>
										In Hindu culture, the mangalsutra is commonly regarded as a sacred
										ornament worn by married women—something auspicious and revered.
									</p>
									{/* <h6 className="text_16_m ptb_10 f_w_s_b">Author</h6> */}
								</div>
							</div>

							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a href="/blog/2">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<div className={`${styles.podcast_text}`}>
									<h5>What is the significance of saptapadi</h5>
									<p>
										A widely prevalent misconception about Hindu weddings is that the
										bride and groom take seven pheras (circles around the sacred fire).
										Well, Bollywood and popular TV seem to have promulgated this myth.
									</p>
								</div>
								{/* <h6 className="text_16_m ptb_10 f_w_s_b">Author</h6> */}
							</div>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a href="/blog/3">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<div className={`${styles.podcast_text}`}>
									<h5>The importance of agni during Hindu weddings</h5>
									<p>
										Agni (sacred fire) is not only symbolic but also necessary for Hindu
										weddings. It is the centrepiece of the ceremony, and in this blog,
										let's decode the importance of Agni in Hindu weddings.
									</p>
								</div>
								{/* <h6 className="text_16_m ptb_10 f_w_s_b">Author</h6> */}
							</div>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a href="/blog/4">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<div className={`${styles.podcast_text}`}>
									<h5>The Truth About Kanyadaan: It's Not What You Think</h5>
									<p>
										What is the first thought that pops into your head upon hearing the
										word "Kanyadaan?" It probably conjures the meaning, "giving away the
										daughter."
									</p>
								</div>
								{/* <h6 className="text_16_m ptb_10 f_w_s_b">Author</h6> */}
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.blog_img_section}`}>
					<a href="blog/5">
						<img
							src={BlogBanner.src}
							className={`${styles.blog_img} img-responsive`}
							alt="image"
						/>
					</a>
					{/* <div className="container"> */}
					<div className={`${styles.blog_img_info}`}>
						<h5>Is Kanyadaan regressive? </h5>
						<p>
							Hindu weddings are synonymous with rituals, customs, and traditions. One
							ritual that's widely criticised and misunderstood is kanyadaan. It
							roughly translates to, "Giving yoru daughter away." However, there's more
							to it than meets the eye.
						</p>
						{/* <h6 className="text_16_m ptb_10 f_w_s_b">Author</h6> */}
						{/* </div> */}
					</div>
				</section>
				<section className={`${styles.podcast} ptb_80`}>
					<div className="container">
						{/* <div className={`${styles.podcast_info}`}>
							<h4 className="text_36_b text_uppercase">Blog</h4>
						</div> */}
						<div className={`${styles.podcast_section}`}>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a href="/blog/6">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<div className={`${styles.podcast_text}`}>
									<h5>Why do you need an English-speaking Pundit? </h5>
									<p>
										Spiritual curiosity is on the rise these days. More and more are
										seeking to understand Hinduism on a deeper level. However,
										unfortunately, most are met with misinformation, vague answers, or
										confusion.
									</p>
								</div>
								{/* <h6 className="text_16_m ptb_10 f_w_s_b">Author</h6> */}
							</div>

							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a href="/blog/7">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<div className={`${styles.podcast_text}`}>
									<h5>Does the Hindu wedding ceremony fit in the modern world? </h5>
									<p>
										It's simple to forget that a Hindu wedding is a sacred rite of passage
										rather than merely a celebration in an era when extravagant sangeets,
										staged baraats, and designer décor frequently characterise Indian
										weddings.
									</p>
								</div>
								{/* <h6 className="text_16_m ptb_10 f_w_s_b">Author</h6> */}
							</div>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a href="/blog/8">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<div className={`${styles.podcast_text}`}>
									<h5>Whom do we pray to during the wedding? </h5>
									<p>
										Lorem ipsum dolor sit amet consectetur. Urna nam massa sed mauris
										pulvinar sit facilisis dictum elit. Sagittis odio vestibulum non et.
										Non nullam morbi quam convallis nunc pretium tellus. Et amet imperdiet
										vulputate tempor arcu nunc habitasse morbi. Nunc faucibus in in ac.
										Sagittis habitant ut facilisi in feugiat elit elementum. Nunc leo
										libero...
									</p>
								</div>
								{/* <h6 className="text_16_m ptb_10 f_w_s_b">Author</h6> */}
							</div>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a href="/blog/9">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<div className={`${styles.podcast_text}`}>
									<h5>Why do we need a baraat in a wedding? </h5>
									<p>
										Lorem ipsum dolor sit amet consectetur. Urna nam massa sed mauris
										pulvinar sit facilisis dictum elit. Sagittis odio vestibulum non et.
										Non nullam morbi quam convallis nunc pretium tellus. Et amet imperdiet
										vulputate tempor arcu nunc habitasse morbi. Nunc faucibus in in ac.
										Sagittis habitant ut facilisi in feugiat elit elementum. Nunc leo
										libero...
									</p>
								</div>
								{/* <h6 className="text_16_m ptb_10 f_w_s_b">Author</h6> */}
							</div>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a href="/blog/10">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<div className={`${styles.podcast_text}`}>
									<h5>Can you drink before the wedding ceremony?</h5>
									<p>
										Lorem ipsum dolor sit amet consectetur. Urna nam massa sed mauris
										pulvinar sit facilisis dictum elit. Sagittis odio vestibulum non et.
										Non nullam morbi quam convallis nunc pretium tellus. Et amet imperdiet
										vulputate tempor arcu nunc habitasse morbi. Nunc faucibus in in ac.
										Sagittis habitant ut facilisi in feugiat elit elementum. Nunc leo
										libero...
									</p>
								</div>
								{/* <h6 className="text_16_m ptb_10 f_w_s_b">Author</h6> */}
							</div>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a href="/blog/11">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<div className={`${styles.podcast_text}`}>
									<h5>Demystifying Hindu Weddings: Are There 7 Pheras?</h5>
									<p>
										When you think of a Hindu wedding, what's the first thing that pops
										up? Chances are, it's an image of the bride and groom walking around
										the Agni or holy fire. This is known as a phera and it signifies
										aspects of life and commitment. It is one of the most iconic rituals
										of the ceremony.
									</p>
								</div>
								{/* <h6 className="text_16_m ptb_10 f_w_s_b">Author</h6> */}
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
