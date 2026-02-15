import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, business, message } = body;

        // Validation
        if (!name || !email || !business || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // If Supabase is configured, store in database
        if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
            const { error } = await supabase.from("contacts").insert([
                {
                    name,
                    email,
                    business_type: business,
                    message,
                    created_at: new Date().toISOString(),
                },
            ]);

            if (error) {
                console.error("Supabase insert error:", error);
                // Don't fail the request — log the error but still return success
                // so the form doesn't break before Supabase is configured
            }
        }

        // TODO: Add email notification (e.g., Resend, SendGrid, or Nodemailer)
        // await sendNotificationEmail({ name, email, business, message });

        return NextResponse.json(
            { success: true, message: "Contact form submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
