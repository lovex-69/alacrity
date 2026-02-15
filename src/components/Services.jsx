import servicesData from "@/data/services";

export default function Services() {
    return (
        <section className="section services" id="services">
            <div className="dot-pattern"></div>
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">What We Build</span>
                    <h2 className="section-title">
                        Intelligent Solutions That{" "}
                        <span className="text-outline">Drive</span> Growth
                    </h2>
                    <p className="section-desc">
                        We combine AI, automation, and elite engineering to build systems
                        that generate revenue while you sleep.
                    </p>
                </div>
                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div className="service-card reveal" key={service.title}>
                            <div className="service-icon-box">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul className="service-list">
                                {service.features.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>
                            <a href="#contact" className="service-link">
                                Get Started →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
