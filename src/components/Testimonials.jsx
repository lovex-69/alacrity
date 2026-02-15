import testimonialsData from "@/data/testimonials";

export default function Testimonials() {
    return (
        <section className="section testimonials sage-section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Client Love</span>
                    <h2 className="section-title">
                        Don&apos;t Take Our Word.{" "}
                        <span className="text-outline">Take Theirs.</span>
                    </h2>
                </div>
                <div className="testimonials-grid">
                    {testimonialsData.map((t) => (
                        <div className="testimonial-card reveal" key={t.author}>
                            <div className="testimonial-stars">★★★★★</div>
                            <p>&ldquo;{t.quote}&rdquo;</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{t.initials}</div>
                                <div>
                                    <strong>{t.author}</strong>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
