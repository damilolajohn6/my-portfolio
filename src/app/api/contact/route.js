import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, service, message } =
      await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "All required fields must be filled" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Inquiry: ${service || "General"}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #00ff99;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Service:</strong> ${service || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f5f5f5; padding: 12px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: `Error: ${error.message}` },
      { status: 500 },
    );
  }
}
