const problemItems = [
    "Manual lead follow-up — prospects go cold",
    "Generic websites that don't convert",
    "Disconnected tools and wasted ad spend",
    "Scaling means hiring more people",
    "No data-driven decisions",
];

const solutionItems = [
    "AI chatbots qualifying & booking leads 24/7",
    "Revenue-engineered funnels that print money",
    "Unified automation stack — zero waste",
    "Scale with systems, not headcount",
    "Real-time analytics driving every decision",
];

export default function ProblemSolution() {
    return (
        <section className="section pvs">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Why Most Businesses Struggle</span>
                    <h2 className="section-title">
                        The Old Way vs.{" "}
                        <span className="text-outline">The NexusForge</span> Way
                    </h2>
                </div>
                <div className="pvs-grid">
                    <div className="pvs-card problem reveal">
                        <h3>❌ Without NexusForge</h3>
                        <ul>
                            {problemItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="pvs-card solution reveal">
                        <h3>✅ With NexusForge</h3>
                        <ul>
                            {solutionItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
