import { useRouter } from "next/router";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";
import styles from "@/styles/pages/Blog1.module.scss";
import blogData from "@/data/blogData.json";
import BlogBanner from "../../public/img/blog/blog_banner_img.jpg";

/**
 * Blog dynamic page for displaying individual blog posts.
 * @returns {JSX.Element}
 */
export default function BlogDynamicPage() {
	const router = useRouter();
	const { id } = router.query;

	if (!id) return null;

	const blog = blogData.blogs.find((b) => b.id === id);

	if (!blog) {
		return (
			<div>
				<Header />
				<main className={styles.Blog1Page}>
					<div
						className="container"
						style={{ padding: "100px 0", textAlign: "center" }}
					>
						<h1>Blog Not Found</h1>
						<p>The blog you are looking for does not exist.</p>
					</div>
				</main>
				<Footer />
			</div>
		);
	}

	return (
		<div>
			<MetaTags
				Title={blog.title}
				Desc={blog.description}
				OgImg={""}
				Url={`/blog/${id}`}
			/>
			<Header />
			<main className={styles.Blog1Page}>
				{/* Banner Section */}
				<section className={styles.banner_section}>
					<img
						src={blog.bannerImageUrl}
						className={`${styles.banner_img} img-responsive`}
						alt="Blog Banner"
					/>
				</section>
				{/* Content Section */}
				<section className={`${styles.content_section} pt_60 pb_80`}>
					<div className="container">
						{/* Author Section */}
						<div className={`${styles.author_section} pb_40`}>
							<h6 className="text_16_m text_uppercase">By Team Om</h6>
							<p className="text_14_r text_color_gray pt_10">
								Published on {blog.publishedDate}
							</p>
						</div>
						{/* Article Content */}
						<div className={`${styles.article_content}`}>
							<h1 className="text_36_b pb_30">{blog.title}</h1>
							{blog.content.map((para, idx) => {
								if (para.includes("•")) {
									const lines = para
										.split("\\n")
										.filter((line) => line.trim().length > 0);
									return (
										<div key={idx} className="text_18_m pb_20">
											<p>{lines[0]}</p>
											<ul style={{ paddingLeft: "40px", marginTop: "20px" }}>
												{lines.slice(1).map((item, itemIdx) => (
													<li
														key={itemIdx}
														style={{ listStyle: "disc", marginBottom: "10px" }}
													>
														{item.replace(/•\\t?/g, "").trim()}
													</li>
												))}
											</ul>
										</div>
									);
								}
								return (
									<p className="text_18_m pb_20" key={idx}>
										{para}
									</p>
								);
							})}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
