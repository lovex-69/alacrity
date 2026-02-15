"use client";

import { useState, useEffect } from "react";
import siteConfig from "@/data/siteConfig";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
            <div className="container nav-container">
                <a href="#" className="logo" aria-label="NexusForge home">
                    <span className="logo-icon">⚡</span>
                    <span className="logo-text">
                        Nexus<span className="logo-highlight">Forge</span>
                    </span>
                </a>
                <ul className={`nav-links${menuOpen ? " active" : ""}`} id="navLinks">
                    {siteConfig.nav.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} onClick={handleLinkClick}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a href="#contact" className="btn btn-dark nav-cta">
                    Start Free Strategy Call
                </a>
                <button
                    className={`hamburger${menuOpen ? " active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
