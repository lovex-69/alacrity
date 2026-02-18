"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="page-loader">
            <div className="page-loader-bar"></div>
        </div>
    );
}
