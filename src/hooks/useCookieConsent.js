// hooks/useCookieConsent.js
import { useEffect } from "react";
import { toast } from "sonner";
import styles from "@/styles/components/cookieConsent.module.scss"; // Adjust the path as necessary

export const useCookieConsent = () => {
	useEffect(() => {
		// Check if user has already made a choice
		const existingConsent = localStorage.getItem("cookieConsent");

		// Only show if no consent has been given
		if (!existingConsent) {
			// Show toast after a short delay to ensure page is loaded
			const timer = setTimeout(() => {
				toast.custom(
					(t) => (
						<div className={styles.cookieConsent}>
							<div className={styles.content}>
								<p className={`text_15_r pb_20 ${styles.text}`}>
									We use cookies to improve your user experience. Please read our{" "}
									<a
										href="/policies"
										className={styles.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										Privacy Policy
									</a>{" "}
									for more information.
								</p>
								<div className={styles.buttons}>
									<button
										onClick={() => {
											localStorage.setItem("cookieConsent", "declined");
											toast.dismiss(t);
										}}
										className={styles.declineBtn}
									>
										I Decline
									</button>
									<button
										onClick={() => {
											localStorage.setItem("cookieConsent", "accepted");
											toast.dismiss(t);
										}}
										className={styles.acceptBtn}
									>
										I Accept
									</button>
								</div>
							</div>
						</div>
					),
					{
						duration: Infinity, // Keep it open until user interacts
						position: "bottom-right",
					}
				);
			}, 1000); // 1 second delay

			return () => clearTimeout(timer);
		}
	}, []);
};
