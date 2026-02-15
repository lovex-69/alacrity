import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Valid email is required" },
                { status: 400 }
            );
        }

        // If Supabase is configured, store subscriber
        if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
            const { error } = await supabase.from("newsletter_subscribers").insert([
                {
                    email,
                    subscribed_at: new Date().toISOString(),
                },
            ]);

            if (error) {
                // Duplicate check
                if (error.code === "23505") {
                    return NextResponse.json(
                        { success: true, message: "Already subscribed" },
                        { status: 200 }
                    );
                }
                console.error("Supabase insert error:", error);
            }
        }

        return NextResponse.json(
            { success: true, message: "Subscribed successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Newsletter API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
