const pricing = [
    {
        tier: "Starter",
        price: "$2,500",
        period: "/project",
        description:
            "Perfect for startups and small businesses needing a powerful launch.",
        features: [
            "High-converting landing page",
            "Mobile-responsive design",
            "Basic SEO optimization",
            "Contact form integration",
            "2 rounds of revisions",
            "14-day delivery",
        ],
        cta: "Get Started",
        popular: false,
        buttonStyle: "btn-white",
    },
    {
        tier: "Growth",
        price: "$7,500",
        period: "/project",
        description:
            "For businesses ready to automate, scale, and dominate their market.",
        features: [
            "Full website (up to 10 pages)",
            "AI chatbot integration",
            "CRM & email automation",
            "Advanced SEO & analytics",
            "Conversion optimization",
            "Unlimited revisions",
            "30-day delivery",
            "60-day post-launch support",
        ],
        cta: "Book Strategy Call",
        popular: true,
        buttonStyle: "btn-dark",
    },
    {
        tier: "Enterprise",
        price: "Custom",
        period: "",
        description:
            "Full-scale digital transformation for ambitious companies.",
        features: [
            "Custom web application / SaaS",
            "Full AI automation suite",
            "Custom dashboards & analytics",
            "Mobile app development",
            "Dedicated growth strategist",
            "Priority support & SLA",
            "Ongoing optimization",
        ],
        cta: "Get Proposal",
        popular: false,
        buttonStyle: "btn-white",
    },
];

export default pricing;
