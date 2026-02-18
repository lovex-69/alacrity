const projects = [
    {
        title: "E-Commerce Growth Engine",
        category: "Web Development",
        description:
            "Built a high-converting Shopify-to-custom migration with AI-powered product recommendations, automated email flows, and a 3x improvement in checkout completion rates.",
        tags: ["Next.js", "Stripe", "AI", "Node.js"],
        color: "card-sage",
    },
    {
        title: "SaaS Analytics Dashboard",
        category: "Product Development",
        description:
            "Designed and developed a real-time analytics platform for a B2B SaaS startup. Interactive charts, role-based access, and automated PDF reporting — shipped in under 6 weeks.",
        tags: ["React", "Python", "PostgreSQL", "AWS"],
        color: "card-yellow",
    },
    {
        title: "AI Lead Qualification Bot",
        category: "AI Automation",
        description:
            "Deployed a WhatsApp + website chatbot that qualifies leads, books calls, and syncs with the client's CRM. Handles 200+ conversations daily without human intervention.",
        tags: ["OpenAI", "LangChain", "Node.js", "WhatsApp API"],
        color: "card-dark",
    },
    {
        title: "Healthcare Appointment Platform",
        category: "App Development",
        description:
            "Built a full-stack appointment booking system for a clinic chain. Patient portal, doctor scheduling, SMS reminders, and payment integration — all in one platform.",
        tags: ["Flutter", "Firebase", "Razorpay", "Node.js"],
        color: "card-sage",
    },
];

export default function Portfolio() {
    return (
        <section className="section portfolio" id="portfolio">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Our Work</span>
                    <h2 className="section-title">
                        Projects That{" "}
                        <span className="text-outline">Speak</span> for Themselves
                    </h2>
                    <p className="section-desc">
                        A selection of projects we have built. Each one solves a real
                        business problem.
                    </p>
                </div>
                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div
                            className={`portfolio-card ${project.color} reveal`}
                            key={project.title}
                        >
                            <span className="portfolio-category">{project.category}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="portfolio-tags">
                                {project.tags.map((tag) => (
                                    <span className="portfolio-tag" key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="portfolio-cta reveal">
                    <a href="#contact" className="btn btn-dark btn-lg">
                        Discuss Your Project
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
