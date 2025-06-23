/* eslint-disable no-irregular-whitespace */
// MODULES //

// COMPONENTS //
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //
import BannerText from "../public/img/home/banner_text.png";
import Weddings from "../public/img/home/weddings.jpg";
import business from "../public/img/home/BUSINESS.jpg";
import testAnimation from "../public/img/home/test_animation.png";

// DATA //

/** Home Page */
export default function HomePage() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Om"} Desc={"Om"} OgImg={""} Url={"/"} />

			<Header />
			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<section className={styles.banner_section}>
					<video
						src="https://websitetestcontent.s3.us-east-1.amazonaws.com/topBanner.mp4"
						className={`${styles.banner_img} img-responsive`}
						muted
						autoPlay
						loop
					/>
					<img
						src={BannerText.src}
						className={`${styles.banner_text} img-responsive`}
						alt="banner"
					/>
				</section>
				<section className={`${styles.about} ptb_80`}>
					<div className="container">
						<div className={`${styles.about_section}`}>
							<div className={`${styles.image}`}>
								<img src={"/img/omD.jpg"} className="img-responsive" alt="Om" />
								{/* <video src="/topBanner.mp4" className="img-responsive" /> */}
							</div>
							<div className={`${styles.info}`}>
								<p className="text_16_m pb_20">
									Om Dhumatkar is a strategist & coach to India&apos;s leading Founders,
									Investors, and Execs.
								</p>
								<p className="text_16_m pb_20">
									He splits his time between London and India.
								</p>
								<p className="text_16_m pb_20">
									With 18+ years of Vedic learning, Om is a renowned speaker on the
									Bhagavad Gita.
								</p>
								<p className="text_16_m pb_20">
									He is a sought-after pundit, bringing alive ancient ceremonies for
									modern times.
								</p>
								<div className={`${styles.btn}`}>
									<a href="#">+ learn more</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.work}`}>
					<h3 className="text_center text_24_b pb_30 text_uppercase">
						Work with Om
					</h3>
					<div className={`${styles.work_section} pt_40`}>
						<div className={`${styles.work_item}`}>
							<img src={Weddings.src} className="img-responsove" alt="Weddings" />
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">Weddings</h3>
								<a href="weddings" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img
								src={"img/home/Ceremonies2025.jpg"}
								className="img-responsove"
								alt="Weddings"
							/>
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">
									ceremonies
								</h3>
								<a href="ceremonies" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img
								src={"/img/home/Speaking2025.jpg"}
								className="img-responsove"
								alt="Weddings"
							/>
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">speaking</h3>
								<a href="speaking" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img src={business.src} className="img-responsove" alt="Weddings" />
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">
									one-on-one
								</h3>
								<a href="one-in-one" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img
								src={"/img/creativeImage.jpg"}
								className="img-responsove"
								alt="Weddings"
							/>
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">
									creative Consulting
								</h3>
								<a href="creative" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
						<div className={`${styles.work_item}`}>
							<img
								src={"/img/home/placeholder.jpg"}
								className="img-responsove"
								alt="Weddings"
							/>
							<div className={`${styles.work_info} text_center`}>
								<h3 className="text_center text_24_b text_uppercase pb_10">
									BUSINESS CONSULTING
								</h3>
								<a href="business" className="text_16_m text_center text_uppercase">
									+ Know More
								</a>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.testimonials} pb_80`}>
					<img
						src={testAnimation.src}
						className="img-responsive"
						alt="testAnimation"
					/>
					<div className="container">
						<div className={`${styles.testimonials_section} pt_40`}>
							<Slider {...settings}>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r">
										Om held space for our love with such devotion that every mantra felt
										like a blessing etched into our minds and hearts forever
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r">
										As the bride&apos;s father, I was deeply moved by how Om wove grace,
										warmth, and meaning into every sacred moment
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r">
										Being coached Om means feeling seen, heard, and understood
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r">
										Om, your guidance has reshaped my world in ways I never imagined
										possible. Thank you for the profound impact you&apos;ve had on my
										journey
									</p>
								</div>
								<div className={`${styles.item} pb_40`}>
									<p className="text_24_r">
										Through our sessions, I discovered a newfound sense of calmness and
										equilibrium, alleviating years of struggle
									</p>
								</div>
							</Slider>
						</div>
					</div>
				</section>
			</main>
			<Footer />
			{/* Page Content ends here */}
		</div>
	);
}
