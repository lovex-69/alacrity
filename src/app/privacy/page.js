export const metadata = {
    title: "Privacy Policy — NexusForge",
    description: "NexusForge privacy policy. How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
    return (
        <main style={{ padding: "120px 0 4rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
            <div className="container">
                <h1 className="section-title">Privacy Policy</h1>
                <p style={{ color: "#666", marginBottom: "2rem" }}>
                    Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>

                <h2 style={{ fontFamily: "var(--ff-heading)", fontSize: "1.4rem", margin: "2rem 0 1rem" }}>
                    1. Information We Collect
                </h2>
                <p>
                    When you submit our contact form, we collect your name, email address,
                    business type, and message. When you subscribe to our newsletter, we
                    collect your email address.
                </p>

                <h2 style={{ fontFamily: "var(--ff-heading)", fontSize: "1.4rem", margin: "2rem 0 1rem" }}>
                    2. How We Use Your Information
                </h2>
                <p>
                    We use your information to respond to inquiries, send our newsletter
                    (if subscribed), and improve our services. We do not sell your personal
                    data.
                </p>

                <h2 style={{ fontFamily: "var(--ff-heading)", fontSize: "1.4rem", margin: "2rem 0 1rem" }}>
                    3. Data Storage
                </h2>
                <p>
                    Your data is stored securely using industry-standard encryption via
                    Supabase (hosted on AWS). We retain your data only as long as
                    necessary.
                </p>

                <h2 style={{ fontFamily: "var(--ff-heading)", fontSize: "1.4rem", margin: "2rem 0 1rem" }}>
                    4. Your Rights
                </h2>
                <p>
                    You may request access to, correction of, or deletion of your personal
                    data by contacting us at hello@nexusforge.agency.
                </p>

                <h2 style={{ fontFamily: "var(--ff-heading)", fontSize: "1.4rem", margin: "2rem 0 1rem" }}>
                    5. Contact
                </h2>
                <p>
                    For privacy-related inquiries, email us at hello@nexusforge.agency.
                </p>

                <div style={{ marginTop: "3rem" }}>
                    <a href="/" className="btn btn-dark">← Back to Home</a>
                </div>
            </div>
        </main>
    );
}
