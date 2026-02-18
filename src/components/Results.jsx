const capabilities = [
    {
        badge: "E-Commerce",
        title: "Revenue-Engineered Stores",
        description:
            "We build e-commerce platforms with AI-powered product recommendations, automated email flows, and checkout optimization designed to maximize average order value and lifetime revenue.",
        metrics: [
            { value: "3x", label: "Avg. Conversion Uplift" },
            { value: "< 6 wks", label: "Delivery Time" },
        ],
        cardClass: "card-sage",
        badgeClass: "",
    },
    {
        badge: "SaaS & Apps",
        title: "Product-Led Growth Platforms",
        description:
            "From MVP to scale — we design and develop SaaS applications with automated onboarding, in-app analytics, and growth loops that drive adoption and reduce churn.",
        metrics: [
            { value: "Full Stack", label: "End-to-End" },
            { value: "Data-Led", label: "Every Decision" },
        ],
        cardClass: "card-yellow",
        badgeClass: "",
    },
    {
        badge: "AI Automation",
        title: "24/7 Lead Machines",
        description:
            "AI chatbots, automated lead qualification, and CRM integrations that book qualified calls on autopilot — so your team focuses on closing, not chasing.",
        metrics: [
            { value: "24/7", label: "Always-On" },
            { value: "Zero", label: "Manual Work" },
        ],
        cardClass: "card-dark",
        badgeClass: "badge-light",
    },
];

export default function Results() {
    return (
        <section className="section results" id="results">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">What We Build</span>
                    <h2 className="section-title">
                        Systems Designed for{" "}
                        <span className="text-outline">Real Growth.</span>
                    </h2>
                    <p className="section-desc">
                        Every project is built to generate measurable business outcomes.
                    </p>
                </div>
                <div className="results-grid">
                    {capabilities.map((r) => (
                        <div
                            className={`result-card ${r.cardClass} reveal`}
                            key={r.title}
                        >
                            <span className={`result-badge ${r.badgeClass}`}>
                                {r.badge}
                            </span>
                            <h3>{r.title}</h3>
                            <p>{r.description}</p>
                            <div className="result-metrics">
                                {r.metrics.map((m) => (
                                    <div className="metric" key={m.label}>
                                        <span className="metric-value">{m.value}</span>
                                        <span className="metric-label">{m.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="results-cta reveal">
                    <a href="#contact" className="btn btn-dark btn-lg">
                        Start Your Project
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
