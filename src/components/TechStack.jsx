import siteConfig from "@/data/siteConfig";

export default function TechStack() {
    return (
        <section className="section tech-stack dark-section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag tag-dark">Our Stack</span>
                    <h2 className="section-title light">
                        Built With <span className="text-yellow">Best-in-Class</span>{" "}
                        Technology
                    </h2>
                    <p className="section-desc light">
                        We use the tools that power the world&apos;s fastest-growing
                        companies.
                    </p>
                </div>
                <div className="tech-grid reveal">
                    {siteConfig.techStack.map((tech) => (
                        <div className="tech-item" key={tech}>
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
