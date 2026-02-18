import siteConfig from "@/data/siteConfig";

export default function Marquee() {
    const tech = siteConfig.trustedTech;
    const doubled = [...tech, ...tech];

    return (
        <section className="marquee-bar">
            <div className="marquee-label">Technologies We Use</div>
            <div className="marquee-track">
                <div className="marquee-content">
                    {doubled.map((item, i) => (
                        <span key={`${item}-${i}`}>
                            {item}
                            {i < doubled.length - 1 && <span className="marquee-dot">·</span>}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
