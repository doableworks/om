/* eslint-disable no-irregular-whitespace */

// MODULES //
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// COMPONENTS //
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";
import {
	Accordion,
	AccordionItem,
	AccordionTitle,
	AccordionContent,
} from "@/components/Accordian";

// SECTIONS //

// PLUGINS //
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// UTILS //

// STYLES //
import styles from "@/styles/pages/BlogPage.module.scss";

// IMAGES //
import leftImg from "../public/img/weddings/left_img.png";
import rightImg from "../public/img/weddings/right_img.png";
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
			sections.push({ type: "banner", blogs: blog });
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
 * Function to extract unique categories from all blogs
 */
const extractCategories = (blogs) => {
	const categorySet = new Set();
	blogs.forEach((blog) => {
		if (blog.categories && Array.isArray(blog.categories)) {
			blog.categories.forEach((category) => categorySet.add(category));
		}
	});
	return Array.from(categorySet).sort();
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
			<Link href={`/blog/${blog.id}`} legacyBehavior>
				<a>
					<h5>{blog.title}</h5>
					<p>{blog.description}</p>
				</a>
			</Link>
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
				style={{ objectFit: "cover", maxHeight: "800px" }}
				alt={blog.title}
			/>
		</a>
		<div className={`${styles.blog_img_info}`}>
			<Link href={`/blog/${blog.id}`} legacyBehavior>
				<a>
					<h5>{blog.title}</h5>
					<p>{blog.description}</p>
				</a>
			</Link>
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
	const router = useRouter();
	const [selectedCategory, setSelectedCategory] = useState("All");

	useEffect(() => {
		Fancybox.bind("[data-fancybox]", {});
	}, []);

	// Trigger scroll animations after filtering
	useEffect(() => {
		/**
		 * Trigger scroll animations for elements
		 */
		const triggerScrollAnimations = () => {
			const scrollElements = document.querySelectorAll("[data-scroll]");
			scrollElements.forEach((element) => {
				// Remove the attribute temporarily
				element.removeAttribute("data-scroll");
				// Force reflow
				element.offsetHeight;
				// Add it back to trigger the animation
				element.setAttribute("data-scroll", "");
				// Trigger the 'in' state after a short delay
				setTimeout(() => {
					element.setAttribute("data-scroll", "in");
				}, 50);
			});
		};

		// Trigger animations after filtering
		if (selectedCategory) {
			setTimeout(triggerScrollAnimations, 100);
		}
	}, [selectedCategory]);

	// Handle query parameters
	useEffect(() => {
		if (router.isReady) {
			const { category } = router.query;
			const allCategories = extractCategories(blogData.blogs);

			// Check if the category from query params is valid
			if (category && allCategories.includes(category)) {
				setSelectedCategory(category);
			} else {
				// Default to "All" if no valid category is found
				setSelectedCategory("All");
			}
		}
	}, [router.isReady, router.query]);

	const allCategories = extractCategories(blogData.blogs);

	// DEBUG: Log all categories
	console.log("All available categories:", allCategories);

	// DEBUG: Log some sample blog data
	console.log("Sample blogs data:", blogData.blogs.slice(0, 3));

	// Filter blogs based on selected category
	const filteredBlogs =
		selectedCategory === "All"
			? blogData.blogs
			: blogData.blogs.filter(
					(blog) => blog.categories && blog.categories.includes(selectedCategory)
			  );

	const blogSections = groupBlogsIntoSections(filteredBlogs);

	/**
	 * Handle category selection and update URL
	 * @param {string} category - The selected category
	 */
	const handleCategorySelect = (category) => {
		console.log("Category selected:", category);
		setSelectedCategory(category);

		// Update URL with query parameter
		const query = category === "All" ? {} : { category };
		router.push(
			{
				pathname: router.pathname,
				query: query,
			},
			undefined,
			{ shallow: true }
		);
	};

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

						{/* Category Filter Pills */}
						<div className={`${styles.category_filter}`} data-scroll>
							{/* Desktop Pills */}
							<div className={`${styles.category_pills_desktop}`}>
								{allCategories.map((category, index) => (
									<button
										key={index}
										className={`${styles.category_filter_pill} ${
											selectedCategory === category ? styles.active : ""
										}`}
										onClick={() => handleCategorySelect(category)}
									>
										{category}
									</button>
								))}
							</div>

							{/* Mobile Accordion Dropdown */}
							<div className={`${styles.category_accordion_mobile}`}>
								<Accordion>
									<AccordionItem uniqueKey="0">
										<AccordionTitle>
											<span className={styles.accordion_title_text}>
												Category: {selectedCategory}
											</span>
										</AccordionTitle>
										<AccordionContent>
											<div className={`${styles.accordion_content}`}>
												{allCategories.map((category) => (
													<button
														key={category}
														className={`${styles.accordion_item} ${
															selectedCategory === category ? styles.active : ""
														}`}
														onClick={() => handleCategorySelect(category)}
													>
														{category}
													</button>
												))}
											</div>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
						</div>
					</div>
				</section>

				{/* Dynamic Blog Sections */}
				{blogSections.map((section, index) => {
					if (section.type === "banner") {
						return <BannerBlogItem key={`banner-${index}`} blog={section.blogs} />;
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
									CONNECT WITH OM
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
