"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

        // Staggered reveals for grids
        const staggerContainers = document.querySelectorAll(
            ".services-grid, .process-grid, .results-grid, .why-grid, .testimonials-grid, .pricing-grid, .portfolio-grid"
        );
        staggerContainers.forEach((container) => {
            const children = container.querySelectorAll(".reveal");
            children.forEach((child, i) => {
                child.style.transitionDelay = `${i * 0.1}s`;
            });
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
