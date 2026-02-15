import siteConfig from "@/data/siteConfig";

export default function Marquee() {
    const brands = siteConfig.trustedBrands;
    const doubled = [...brands, ...brands];

    return (
        <section className="marquee-bar">
            <div className="marquee-track">
                <div className="marquee-content">
                    {doubled.map((brand, i) => (
                        <span key={`${brand}-${i}`}>
                            {brand}
                            {i < doubled.length - 1 && <span>•</span>}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
