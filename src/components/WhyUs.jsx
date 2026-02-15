const reasons = [
    { icon: "🧠", title: "AI-First Approach", desc: "Every solution is powered by intelligent automation — not manual band-aids." },
    { icon: "📈", title: "Revenue-Obsessed", desc: "Every decision is filtered through one question: does this increase revenue?" },
    { icon: "⚡", title: "Launch in Weeks", desc: "Battle-tested frameworks let us ship production-grade solutions fast." },
    { icon: "🔒", title: "Enterprise Security", desc: "Bank-level encryption, GDPR compliance, and bulletproof architecture." },
    { icon: "🤝", title: "Dedicated Partner", desc: "You get a senior strategist, not a junior account manager." },
    { icon: "🔄", title: "Continuous Optimization", desc: "Our systems monitor, learn, and improve — compounding returns." },
];

export default function WhyUs() {
    return (
        <section className="section why-us yellow-section" id="why-us">
            <div className="dot-pattern"></div>
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Why NexusForge</span>
                    <h2 className="section-title">
                        Not Another Agency.{" "}
                        <span className="text-outline">A Growth</span> Machine.
                    </h2>
                    <p className="section-desc">
                        Most agencies build pretty pages. We engineer systems that print
                        revenue.
                    </p>
                </div>
                <div className="why-grid">
                    {reasons.map((r) => (
                        <div className="why-card reveal" key={r.title}>
                            <div className="why-icon-box">{r.icon}</div>
                            <h3>{r.title}</h3>
                            <p>{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
