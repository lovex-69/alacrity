"use client";

import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("sent");
                e.target.reset();
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                throw new Error("Failed to send");
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info reveal">
                        <span className="section-tag">Let&apos;s Talk</span>
                        <h2 className="section-title">
                            Start Your Growth{" "}
                            <span className="text-outline">Today</span>
                        </h2>
                        <p>
                            Fill out the form and our strategy team will get back to you within
                            24 hours with a custom growth roadmap.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <span>hello@nexusforge.agency</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span>Global — Remote First</span>
                            </div>
                        </div>
                        <div className="calendly-placeholder">
                            <div className="calendly-inner">
                                <span style={{ fontSize: "2rem" }}>📅</span>
                                <p>
                                    Or schedule directly on
                                    <br />
                                    <strong>Calendly</strong>
                                </p>
                                <a href="#" className="btn btn-white">
                                    Open Calendar
                                </a>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form reveal" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Smith"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@company.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="business">Business Type</label>
                            <select id="business" name="business" required defaultValue="">
                                <option value="" disabled>
                                    Select your business type
                                </option>
                                <option value="startup">Startup</option>
                                <option value="ecommerce">E-Commerce</option>
                                <option value="saas">SaaS / Tech</option>
                                <option value="service">Service Business</option>
                                <option value="coaching">Coaching / Consulting</option>
                                <option value="local">Local Business</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">
                                What&apos;s your biggest growth challenge?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Tell us about your business goals..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-dark btn-block btn-lg"
                            disabled={status === "sending"}
                        >
                            {status === "sending" && "Sending..."}
                            {status === "sent" && (
                                <>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                    Message Sent!
                                </>
                            )}
                            {status === "error" && "Error — Try Again"}
                            {status === "idle" && (
                                <>
                                    Send Message
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                </>
                            )}
                        </button>
                        <p className="form-note">🔒 Your data is secure. We never spam.</p>
                    </form>
                </div>
            </div>
        </section>
    );
}
