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
							<h4 className="text_36_b text_uppercase">Blog</h4>
						</div>
						<div className={`${styles.podcast_section}`}>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a data-fancybox href="https://youtu.be/EngW7tLk6R8">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<h5 className="text_24_m pt_20 pb_10">The Heading of the blog</h5>
								<p className="text_15_r f_w_m">
									Lorem ipsum dolor sit amet consectetur. Urna nam massa sed mauris
									pulvinar sit facilisis dictum elit. Sagittis odio vestibulum non et.
									Non nullam morbi quam convallis nunc pretium tellus. Et amet imperdiet
									vulputate tempor arcu nunc habitasse morbi. Nunc faucibus in in ac.
									Sagittis habitant ut facilisi in feugiat elit elementum. Nunc leo
									libero...
								</p>
								<h6 className="text_16_m ptb_10 f_w_s_b">Author</h6>
							</div>

							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a data-fancybox href="https://youtu.be/EngW7tLk6R8">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<h5 className="text_24_m pt_20 pb_10">The Heading of the blog</h5>
								<p className="text_15_r f_w_m">
									Lorem ipsum dolor sit amet consectetur. Urna nam massa sed mauris
									pulvinar sit facilisis dictum elit. Sagittis odio vestibulum non et.
									Non nullam morbi quam convallis nunc pretium tellus. Et amet imperdiet
									vulputate tempor arcu nunc habitasse morbi. Nunc faucibus in in ac.
									Sagittis habitant ut facilisi in feugiat elit elementum. Nunc leo
									libero...
								</p>
								<h6 className="text_16_m ptb_10 f_w_s_b">Author</h6>
							</div>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a data-fancybox href="https://youtu.be/EngW7tLk6R8">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<h5 className="text_24_m pt_20 pb_10">The Heading of the blog</h5>
								<p className="text_15_r f_w_m">
									Lorem ipsum dolor sit amet consectetur. Urna nam massa sed mauris
									pulvinar sit facilisis dictum elit. Sagittis odio vestibulum non et.
									Non nullam morbi quam convallis nunc pretium tellus. Et amet imperdiet
									vulputate tempor arcu nunc habitasse morbi. Nunc faucibus in in ac.
									Sagittis habitant ut facilisi in feugiat elit elementum. Nunc leo
									libero...
								</p>
								<h6 className="text_16_m ptb_10 f_w_s_b">Author</h6>
							</div>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a data-fancybox href="https://youtu.be/EngW7tLk6R8">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<h5 className="text_24_m pt_20 pb_10">The Heading of the blog</h5>
								<p className="text_15_r f_w_m">
									Lorem ipsum dolor sit amet consectetur. Urna nam massa sed mauris
									pulvinar sit facilisis dictum elit. Sagittis odio vestibulum non et.
									Non nullam morbi quam convallis nunc pretium tellus. Et amet imperdiet
									vulputate tempor arcu nunc habitasse morbi. Nunc faucibus in in ac.
									Sagittis habitant ut facilisi in feugiat elit elementum. Nunc leo
									libero...
								</p>
								<h6 className="text_16_m ptb_10 f_w_s_b">Author</h6>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.blog_img_section}`}>
					<img
						src={BlogBanner.src}
						className={`${styles.blog_img} img-responsive`}
						alt="image"
					/>
					<div className="container">
						<div className={`${styles.blog_img_info} pt_40`}>
							<h5 className="text_24_m pb_10">The Heading of the blog</h5>
							<p className="text_15_r f_w_m">
								Lorem ipsum dolor sit amet consectetur. Urna nam massa sed mauris
								pulvinar sit facilisis dictum elit. Sagittis odio vestibulum non et. Non
								nullam morbi quam convallis nunc pretium tellus. Et amet imperdiet
								vulputate tempor arcu nunc habitasse morbi. Nunc faucibus in in ac.
								Sagittis habitant ut facilisi in feugiat elit elementum. Nunc leo
								libero...
							</p>
							<h6 className="text_16_m ptb_10 f_w_s_b">Author</h6>
						</div>
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
									<a data-fancybox href="https://youtu.be/EngW7tLk6R8">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<h5 className="text_24_m pt_20 pb_10">The Heading of the blog</h5>
								<p className="text_15_r f_w_m">
									Lorem ipsum dolor sit amet consectetur. Urna nam massa sed mauris
									pulvinar sit facilisis dictum elit. Sagittis odio vestibulum non et.
									Non nullam morbi quam convallis nunc pretium tellus. Et amet imperdiet
									vulputate tempor arcu nunc habitasse morbi. Nunc faucibus in in ac.
									Sagittis habitant ut facilisi in feugiat elit elementum. Nunc leo
									libero...
								</p>
								<h6 className="text_16_m ptb_10 f_w_s_b">Author</h6>
							</div>

							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a data-fancybox href="https://youtu.be/EngW7tLk6R8">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<h5 className="text_24_m pt_20 pb_10">The Heading of the blog</h5>
								<p className="text_15_r f_w_m">
									Lorem ipsum dolor sit amet consectetur. Urna nam massa sed mauris
									pulvinar sit facilisis dictum elit. Sagittis odio vestibulum non et.
									Non nullam morbi quam convallis nunc pretium tellus. Et amet imperdiet
									vulputate tempor arcu nunc habitasse morbi. Nunc faucibus in in ac.
									Sagittis habitant ut facilisi in feugiat elit elementum. Nunc leo
									libero...
								</p>
								<h6 className="text_16_m ptb_10 f_w_s_b">Author</h6>
							</div>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a data-fancybox href="https://youtu.be/EngW7tLk6R8">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<h5 className="text_24_m pt_20 pb_10">The Heading of the blog</h5>
								<p className="text_15_r f_w_m">
									Lorem ipsum dolor sit amet consectetur. Urna nam massa sed mauris
									pulvinar sit facilisis dictum elit. Sagittis odio vestibulum non et.
									Non nullam morbi quam convallis nunc pretium tellus. Et amet imperdiet
									vulputate tempor arcu nunc habitasse morbi. Nunc faucibus in in ac.
									Sagittis habitant ut facilisi in feugiat elit elementum. Nunc leo
									libero...
								</p>
								<h6 className="text_16_m ptb_10 f_w_s_b">Author</h6>
							</div>
							<div className={`${styles.podcast_item}`}>
								<div className={`${styles.video_wrapper}`}>
									<a data-fancybox href="https://youtu.be/EngW7tLk6R8">
										<img src={videoTham.src} className="img-responsive" alt="videoTham" />
										<img
											src={playBtn.src}
											className={`${styles.play_btn} img-responsive`}
											alt="videoTham"
										/>
									</a>
								</div>
								<h5 className="text_24_m pt_20 pb_10">The Heading of the blog</h5>
								<p className="text_15_r f_w_m">
									Lorem ipsum dolor sit amet consectetur. Urna nam massa sed mauris
									pulvinar sit facilisis dictum elit. Sagittis odio vestibulum non et.
									Non nullam morbi quam convallis nunc pretium tellus. Et amet imperdiet
									vulputate tempor arcu nunc habitasse morbi. Nunc faucibus in in ac.
									Sagittis habitant ut facilisi in feugiat elit elementum. Nunc leo
									libero...
								</p>
								<h6 className="text_16_m ptb_10 f_w_s_b">Author</h6>
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
