"use client";

import { useState } from "react";
import siteConfig from "@/data/siteConfig";

export default function Footer() {
    const [subStatus, setSubStatus] = useState("idle");

    const handleNewsletter = async (e) => {
        e.preventDefault();
        setSubStatus("sending");

        const email = new FormData(e.target).get("email");

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setSubStatus("sent");
                e.target.reset();
                setTimeout(() => setSubStatus("idle"), 3000);
            } else {
                throw new Error("Failed");
            }
        } catch {
            setSubStatus("error");
            setTimeout(() => setSubStatus("idle"), 3000);
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <span className="logo-icon">⚡</span>
                            <span className="logo-text">
                                Nexus<span className="logo-highlight">Forge</span>
                            </span>
                        </a>
                        <p>
                            AI-powered digital growth systems that scale your business,
                            automate operations, and multiply revenue.
                        </p>
                        <div className="footer-socials">
                            <a href={siteConfig.social.twitter} aria-label="Twitter / X">
                                𝕏
                            </a>
                            <a href={siteConfig.social.linkedin} aria-label="LinkedIn">
                                in
                            </a>
                            <a href={siteConfig.social.instagram} aria-label="Instagram">
                                IG
                            </a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            {siteConfig.footerLinks.services.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            {siteConfig.footerLinks.company.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Stay Updated</h4>
                        <p className="footer-newsletter-text">
                            Get growth insights and AI trends.
                        </p>
                        <form className="footer-newsletter" onSubmit={handleNewsletter}>
                            <input
                                type="email"
                                name="email"
                                placeholder={
                                    subStatus === "sent" ? "Subscribed! ✓" : "your@email.com"
                                }
                                required
                                disabled={subStatus === "sending" || subStatus === "sent"}
                            />
                            <button
                                type="submit"
                                className="btn btn-yellow"
                                disabled={subStatus === "sending"}
                            >
                                →
                            </button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} NexusForge. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
