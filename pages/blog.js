/* eslint-disable no-irregular-whitespace */
// MODULES //
import { useEffect } from "react";
import Link from "next/link";

// COMPONENTS //
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";

// SECTIONS //

// PLUGINS //
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// UTILS //

// STYLES //
import styles from "@/styles/pages/BlogPage.module.scss";

// IMAGES //
// import videoTham from "../public/img/weddings/video_tham.jpg";
import videoTham from "../public/img/blog/blog1Cover.png";
import playBtn from "../public/img/weddings/play_btn.svg";
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";
import BlogBanner from "../public/img/blog/blog_banner_img.jpg";

// DATA //
import blogData from "@/data/blogData.json";

/** 
 * Function to group blogs into sections
*/
const groupBlogsIntoSections = (blogs) => {
	const sections = [];
	let currentSection = [];
	
	blogs.forEach((blog, index) => {
		// Every 5th item (index 4, 9, 14, etc.) should be a banner
		if ((index + 1) % 5 === 0) {
			// Add current section if it has items
			if (currentSection.length > 0) {
				sections.push({ type: "grid", blogs: currentSection });
				currentSection = [];
			}
			// Add banner section
			sections.push({ type: "banner", blog: blog });
		} else {
			currentSection.push(blog);
		}
	});
	
	// Add remaining blogs if any
	if (currentSection.length > 0) {
		sections.push({ type: "grid", blogs: currentSection });
	}
	
	return sections;
};

/**
* Component for regular blog item
*/
const BlogItem = ({ blog }) => (
	<div className={`${styles.podcast_item}`} data-scroll>
		<div className={`${styles.video_wrapper}`}>
			<Link href={`/blog/${blog.id}`} legacyBehavior>
				<a>
					<img
						src={blog.coverImageUrl}
						className="img-responsive"
						alt={blog.title}
					/>
					{/* <img
						src={playBtn.src}
						className={`${styles.play_btn} img-responsive`}
						alt="play button"
					/> */}
				</a>
			</Link>
		</div>
		<div className={`${styles.podcast_text}`}>
			<h5>{blog.title}</h5>
			<p>{blog.description}</p>
		</div>
	</div>
);

/** 
* Component for banner blog item
*/         
const BannerBlogItem = ({ blog }) => (
	<section className={`${styles.blog_img_section}`} data-scroll>
		<a href={`/blog/${blog.id}`}>
			<img
				src={blog.coverImageUrl}
				className={`${styles.blog_img} img-responsive`}
				style={{objectFit:"cover", maxHeight:"800px"}}
				alt={blog.title}
			/>
		</a>
		<div className={`${styles.blog_img_info}`}>
			<h5>{blog.title}</h5>
			<p>{blog.description}</p>
		</div>
	</section>
);

/** 
 * Component for grid section
*/
const GridSection = ({ blogs }) => (
	<section className={`${styles.podcast} ptb_80`}>
		<div className="container">
			<div className={`${styles.podcast_section}`}>
				{blogs.map((blog) => (
					<BlogItem key={blog.id} blog={blog} />
				))}
			</div>
		</div>
	</section>
);

/**
 * BlogPage Page
 */
export default function BlogPage() {
	useEffect(() => {
		Fancybox.bind("[data-fancybox]", {});
	}, []);

	const blogSections = groupBlogsIntoSections(blogData.blogs);

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Om"} Desc={"Om"} OgImg={""} Url={"/"} />

			<Header />
			{/* Page Content starts here */}
			<main className={`${styles.BlogPage}`}>
				{/* Blog Title */}
				<section className={`${styles.podcast} ptb_80`}>
					<div className="container">
						<div className={`${styles.podcast_info}`} data-scroll>
							<h4>Blog</h4>
						</div>
					</div>
				</section>

				{/* Dynamic Blog Sections */}
				{blogSections.map((section, index) => {
					if (section.type === "banner") {
						return <BannerBlogItem key={`banner-${index}`} blog={section.blog} />;
					} else {
						return <GridSection key={`grid-${index}`} blogs={section.blogs} />;
					}
				})}

				{/* Connect Section */}
				<section className="container">
					<div className={`${styles.connect_section} pt_80 ptb_80`} data-scroll>
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