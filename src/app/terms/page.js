export const metadata = {
    title: "Terms of Service — NexusForge",
    description: "NexusForge terms of service for our digital agency services.",
};

export default function TermsPage() {
    return (
        <main style={{ padding: "120px 0 4rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
            <div className="container">
                <h1 className="section-title">Terms of Service</h1>
                <p style={{ color: "#666", marginBottom: "2rem" }}>
                    Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>

                <h2 style={{ fontFamily: "var(--ff-heading)", fontSize: "1.4rem", margin: "2rem 0 1rem" }}>
                    1. Services
                </h2>
                <p>
                    NexusForge provides AI-powered digital solutions including website
                    development, automation systems, and growth strategy consulting. All
                    deliverables are outlined in individual project proposals.
                </p>

                <h2 style={{ fontFamily: "var(--ff-heading)", fontSize: "1.4rem", margin: "2rem 0 1rem" }}>
                    2. Payment Terms
                </h2>
                <p>
                    Payment terms, schedules, and refund policies are defined in
                    individual project agreements. Standard projects require a 50% deposit
                    to begin work.
                </p>

                <h2 style={{ fontFamily: "var(--ff-heading)", fontSize: "1.4rem", margin: "2rem 0 1rem" }}>
                    3. Intellectual Property
                </h2>
                <p>
                    Upon full payment, clients receive full ownership of all custom
                    deliverables. Third-party licenses remain governed by their respective
                    terms.
                </p>

                <h2 style={{ fontFamily: "var(--ff-heading)", fontSize: "1.4rem", margin: "2rem 0 1rem" }}>
                    4. Limitation of Liability
                </h2>
                <p>
                    NexusForge&apos;s total liability for any claim shall not exceed the
                    total fees paid for the specific project giving rise to the claim.
                </p>

                <h2 style={{ fontFamily: "var(--ff-heading)", fontSize: "1.4rem", margin: "2rem 0 1rem" }}>
                    5. Contact
                </h2>
                <p>
                    For questions about these terms, contact us at
                    hello@nexusforge.agency.
                </p>

                <div style={{ marginTop: "3rem" }}>
                    <a href="/" className="btn btn-dark">← Back to Home</a>
                </div>
            </div>
        </main>
    );
}
