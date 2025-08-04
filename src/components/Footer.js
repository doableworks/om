/* eslint-disable react/jsx-no-target-blank */
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //
import footerLogo from "../../public/img/footer_logo.svg";
import insta from "../../public/img/home/insta.svg";
import you from "../../public/img/home/you.svg";
import link from "../../public/img/home/link.svg";
import SpotifyIcon from "../../public/img/home/spotify-icon.svg";

// DATA //

/** Footer Component */
export default function Footer() {
	return (
		<footer className={`${styles.main_footer}`} data-scroll>
			<div className="container">
				<div className={`${styles.footer_section_1} ptb_40`}>
					<div className={`${styles.left}`}>
						<img src={footerLogo.src} className="img-responsive" alt="footerLogo" />
					</div>
					<div className={`${styles.right}`}>
						<div className={`${styles.link_box}`}>
							<h4 className="text_16_b pb_10">WORK WITH OM</h4>
							<ul>
								<li>
									<a href="weddings" className="text_15_r">
										Weddings
									</a>
								</li>
								<li>
									<a href="ceremonies" className="text_15_r">
										Ceremonies
									</a>
								</li>
								<li>
									<a href="speaking" className="text_15_r">
										Speaking
									</a>
								</li>
								<li>
									<a href="one-on-one" className="text_15_r">
										One-on-One
									</a>
								</li>
								<li>
									<a href="creative-consulting" className="text_15_r">
										Creative Consulting
									</a>
								</li>
							</ul>
						</div>
						<div className={`${styles.link_box}`}>
							<h4 className="text_16_b pb_10" style={{ paddingBottom: "1.7rem" }}>
								<a href="learn-with-om">LEARN WITH OM</a>
							</h4>
							<h4 className="text_16_b pb_10" style={{ paddingBottom: "1.7rem" }}>
								<a href="about-us">ABOUT</a>
							</h4>
							<h4 className="text_16_b pb_10" style={{ paddingBottom: "1.7rem" }}>
								<a href="business-consulting">GD PARTNERS</a>
							</h4>
							<h4 className="text_16_b pb_10">
								<a href="connect">CONNECT</a>
							</h4>
						</div>
						<div className={`${styles.link_box}`}>
							<ul>
								<li>
									<h4 className="text_16_b pb_10">
										<a href="blog">BLOG</a>
									</h4>
								</li>
								<li style={{ marginBottom: "1rem" }}>
									<a href="policies" className="text_15_r">
										Privacy Policy
									</a>
								</li>
								<li>
									<a href="policies" className="text_15_r">
										Terms of Use
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={`${styles.footer_section_2} pb_40`}>
					<div className={`${styles.left}`}>
						<ul>
							<li>CONNECT :</li>
							<li>
								<a href="https://www.instagram.com/om.dhumatkar/?hl=en">
									<img src={insta.src} className="img-responsive" alt="insta" />
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/@omdhumatkar">
									<img src={you.src} className="img-responsive" alt="youtube" />
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/company/house%E2%80%94of%E2%80%94om/posts/?feedView=all">
									<img src={link.src} className="img-responsive" alt="linkedin" />
								</a>
							</li>
							<li>
								<a href="https://open.spotify.com/artist/5WTG6aL5krHlBzF3CUvdl7?si=6_4f3WTvT1W4Swi32UuWQg">
									<img src={SpotifyIcon.src} className="img-responsive" alt="spotify" />
								</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.right}`}>
						<a href="mailto:team@omdhumatkar.com" className="text_16_r">
							Write to us at team@omdhumatkar.com
						</a>{" "}
					</div>
				</div>
			</div>
		</footer>
	);
}
