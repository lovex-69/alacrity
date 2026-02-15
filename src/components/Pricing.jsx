import pricingData from "@/data/pricing";

export default function Pricing() {
    return (
        <section className="section pricing" id="pricing">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Pricing</span>
                    <h2 className="section-title">
                        Investment Plans That{" "}
                        <span className="text-outline">Scale</span> With You
                    </h2>
                    <p className="section-desc">
                        Transparent pricing. No hidden fees. Choose the plan that aligns
                        with your growth stage.
                    </p>
                </div>
                <div className="pricing-grid">
                    {pricingData.map((plan) => (
                        <div
                            className={`pricing-card${plan.popular ? " popular" : ""} reveal`}
                            key={plan.tier}
                        >
                            {plan.popular && (
                                <div className="pricing-badge">Most Popular</div>
                            )}
                            <div className="pricing-tier">{plan.tier}</div>
                            <div className="pricing-price">
                                {plan.price}
                                {plan.period && <span>{plan.period}</span>}
                            </div>
                            <p className="pricing-desc">{plan.description}</p>
                            <ul className="pricing-features">
                                {plan.features.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className={`btn ${plan.buttonStyle} btn-block`}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
