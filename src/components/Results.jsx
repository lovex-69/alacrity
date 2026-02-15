const results = [
    {
        badge: "E-Commerce",
        name: "ShoplyPro",
        description:
            "Rebuilt their entire digital funnel with AI-powered upsell automation and a conversion-optimized storefront.",
        metrics: [
            { value: "+312%", label: "Revenue Growth" },
            { value: "4.8x", label: "ROAS" },
        ],
        cardClass: "card-sage",
        badgeClass: "",
    },
    {
        badge: "SaaS",
        name: "FlowMetrics",
        description:
            "Designed and developed their MVP platform with automated onboarding, reducing churn and tripling activation.",
        metrics: [
            { value: "+540%", label: "User Activation" },
            { value: "-67%", label: "Churn Rate" },
        ],
        cardClass: "card-yellow",
        badgeClass: "",
    },
    {
        badge: "Service Business",
        name: "EliteCoach",
        description:
            "Built an AI chatbot and automated lead funnel that books qualified calls on autopilot — zero manual effort.",
        metrics: [
            { value: "+189%", label: "Qualified Leads" },
            { value: "24/7", label: "Automated" },
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
                    <span className="section-tag">Proven Results</span>
                    <h2 className="section-title">
                        Real Businesses.{" "}
                        <span className="text-outline">Real Revenue.</span>
                    </h2>
                    <p className="section-desc">
                        We measure success in one currency: growth.
                    </p>
                </div>
                <div className="results-grid">
                    {results.map((r) => (
                        <div
                            className={`result-card ${r.cardClass} reveal`}
                            key={r.name}
                        >
                            <span className={`result-badge ${r.badgeClass}`}>
                                {r.badge}
                            </span>
                            <h3>{r.name}</h3>
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
                        Get Results Like These →
                    </a>
                </div>
            </div>
        </section>
    );
}
