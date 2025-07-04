/* eslint-disable react/jsx-no-target-blank */
// MODULES //
import Script from "next/script";
import { useRef, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { useForm } from "react-hook-form";

// UTILS //

// STYLES //
import styles from "@/styles/components/Form.module.scss";

// IMAGES //

// DATA //

/**
 * Form component renders a contact form for connecting with OM.
 * Handles validation, submission, and UI feedback.
 * @returns {JSX.Element}
 */
export default function Form() {
	const formRef = useRef();
	const [showSuccess, setShowSuccess] = useState(false);
	const [wordCount, setWordCount] = useState(0);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors, touchedFields },
		watch,
		trigger,
		reset,
		setValue,
	} = useForm({ mode: "onBlur" });

	// Function to count words
	/**
	 * Counts the number of words in a string.
	 * @param {string} text - The input text to count words from.
	 * @returns {number} The number of words in the text.
	 */
	const countWords = (text) => {
		if (!text) return 0;
		return text
			.trim()
			.split(/\s+/)
			.filter((word) => word.length > 0).length;
	};

	// Function to validate and clean input (only removes special characters, not URLs)
	/**
	 * Removes special characters except basic punctuation and URL characters.
	 * @param {string} text - The input text to clean.
	 * @returns {string} The cleaned text.
	 */
	const validateAndCleanInput = (text) => {
		if (!text) return text;
		let cleanedText = text.replace(/[^a-zA-Z0-9\s.,!?'-:/_]/g, "");
		return cleanedText;
	};

	// Handle textarea input change
	/**
	 * Handles changes in the textarea, cleans input, updates word count, and triggers validation.
	 * @param {object} e - The event object from the textarea change.
	 */
	const handleTextareaChange = (e) => {
		const rawValue = e.target.value;
		const cleanedValue = validateAndCleanInput(rawValue);
		const currentWordCount = countWords(cleanedValue);
		setWordCount(currentWordCount);
		if (cleanedValue !== rawValue) {
			setValue("additionalInfo", cleanedValue);
			e.target.value = cleanedValue;
		}
		register("additionalInfo").onChange(e);
		trigger("additionalInfo");
	};

	/**
	 * Handles form submission, sends data, and manages UI state.
	 * @param {object} data - The form data to submit.
	 */
	const onSubmit = async (data) => {
		setIsSubmitting(true);
		const formData = new FormData();
		formData.append("name", data.name || "");
		formData.append("email", data.email || "");
		formData.append("additionalInfo", data.additionalInfo || "");
		console.log(formData);
		const formUrl =
			"https://script.google.com/macros/s/AKfycbwnQZcSGBdVWmjeXE4Vid9C8mtruuRm3AfCHE0TmO9GvBDA-byr3mYIAfQu7AejI7zc/exec";
		fetch(formUrl, {
			method: "POST",
			body: formData,
		})
			.then((response) => {
				console.log("Response object:", response);
				if (response.ok) {
					console.log("Form submitted successfully");
					setShowSuccess(true);
					reset();
					setWordCount(0);
					setTimeout(() => {
						setShowSuccess(false);
					}, 5000);
				} else {
					setShowSuccess("error");
					console.error("Form submission failed:", response);
					setTimeout(() => {
						setShowSuccess(false);
					}, 5000);
				}
			})
			.catch((error) => {
				setShowSuccess("error");
				console.error("Fetch error:", error);
				setTimeout(() => {
					setShowSuccess(false);
				}, 5000);
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	return (
		<div className={styles.form_section}>
			<Script id="google-ads-conversion" strategy="afterInteractive">
				{`
					function fireConversionEvent() {
						gtag('event', 'conversion', {
							'send_to': 'AW-16911185916/luk7CKij5a0aEPzv8P8-',
							'value': 1.0,
							'currency': 'INR'
						});
					}
				`}
			</Script>
			<div
				className="gradient_text pb_30 text_uppercase"
				style={{
					fontSize: "1.2rem",
					fontWeight: "bolder",
					letterSpacing: "0.4rem",
				}}
			>
				<h2>CONNECT WITH US</h2>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className={styles.form}
				ref={formRef}
				noValidate
			>
				<div className={styles.formGroupSection}>
					<div className={styles.formGroup}>
						<label className={styles.lable_text} htmlFor="name">
							Name<span>*</span>
						</label>
						<input
							type="text"
							id="name"
							placeholder="Full Name*"
							className={styles.input}
							{...register("name", { required: "Name is required" })}
						/>
						{errors.name && touchedFields.name && (
							<div className={styles.error}>{errors.name.message}</div>
						)}
					</div>
				</div>
				<div className={styles.formGroupSection}>
					<div className={styles.formGroup}>
						<label className={styles.lable_text} htmlFor="email">
							Email ID<span>*</span>
						</label>
						<input
							type="email"
							id="email"
							placeholder="Email ID*"
							className={styles.input}
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: "Enter a valid email address",
								},
							})}
						/>
						{errors.email && touchedFields.email && (
							<div className={styles.error}>{errors.email.message}</div>
						)}
					</div>
				</div>
				<div className={styles.formGroupSection}>
					<div className={styles.formGroup}>
						<label className={styles.lable_text} htmlFor="confirmEmail">
							Confirm Email ID<span>*</span>
						</label>
						<input
							type="email"
							id="confirmEmail"
							placeholder="Confirm Email ID*"
							className={styles.input}
							{...register("confirmEmail", {
								required: "Please confirm your email",
								validate: (value) => value === watch("email") || "Emails do not match",
							})}
						/>
						{errors.confirmEmail && touchedFields.confirmEmail && (
							<div className={styles.error}>{errors.confirmEmail.message}</div>
						)}
					</div>
				</div>
				<div className={styles.formGroupSection}>
					<div className={styles.formGroup}>
						<label className={styles.lable_text} htmlFor="additionalInfo">
							Please let us know how we can help you.
						</label>
						<textarea
							id="additionalInfo"
							placeholder="Please include as many details as possible. (Text and numbers only)"
							className={styles.input}
							rows={4}
							{...register("additionalInfo", {
								validate: {
									wordCount: (value) => {
										if (!value) return true;
										const words = countWords(value);
										return (
											words <= 200 ||
											`Message must be 200 words or less (currently ${words} words)`
										);
									},
									noLinks: (value) => {
										if (!value) return true;
										const urlPattern =
											/(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9-]+\.[a-zA-Z]{2,}[^\s]*)/gi;
										return !urlPattern.test(value) || "Links are not allowed";
									},
									allowedCharacters: (value) => {
										if (!value) return true;
										const allowedPattern = /^[a-zA-Z0-9\s.,!?'-:/_]*$/;
										return (
											allowedPattern.test(value) ||
											"Only letters, numbers, and basic punctuation are allowed"
										);
									},
								},
							})}
							onChange={handleTextareaChange}
						/>
						<div
							style={{
								fontSize: "0.85rem",
								color: wordCount > 200 ? "#e74c3c" : "#666",
								marginTop: "4px",
								textAlign: "right",
							}}
						>
							{wordCount}/200 words
						</div>
						{errors.additionalInfo && touchedFields.additionalInfo && (
							<div className={styles.error}>{errors.additionalInfo.message}</div>
						)}
					</div>
				</div>
				<div className={styles.btn_section}>
					<button
						className={styles.btn_secondary}
						type="submit"
						disabled={isSubmitting}
					>
						{isSubmitting ? (
							<span
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<span
									className="spinner"
									style={{
										display: "inline-block",
										width: "18px",
										height: "18px",
										border: "2px solid #fff",
										borderTop: "2px solid #888",
										borderRadius: "50%",
										animation: "spin 1s linear infinite",
										marginRight: "8px",
									}}
								/>
								Loading...
							</span>
						) : (
							"Submit"
						)}
					</button>
				</div>
			</form>
			{showSuccess && (
				<div
					style={{
						backgroundColor: showSuccess === "error" ? "#f8d7da" : "#d4edda",
						color: showSuccess === "error" ? "#721c24" : "#155724",
						padding: "12px 16px",
						borderRadius: "4px",
						marginBottom: "20px",
						marginTop: "20px",
						border:
							showSuccess === "error" ? "1px solid #f5c6cb" : "1px solid #c3e6cb",
						fontWeight: "500",
					}}
				>
					{showSuccess === "error"
						? "Form submission failed. Please try again."
						: "✓ Form submitted successfully!"}
				</div>
			)}
		</div>
	);
}
