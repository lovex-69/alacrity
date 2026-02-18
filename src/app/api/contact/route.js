import { NextResponse } from "next/server";
import { writeToSheet, isGoogleSheetsConfigured } from "@/lib/googleSheets";

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

        // Write to Google Sheets if configured
        if (isGoogleSheetsConfigured()) {
            const result = await writeToSheet("contact", {
                name,
                email,
                business,
                message,
            });

            if (!result.success) {
                console.error("Google Sheets write error:", result.message);
            }
        }

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
