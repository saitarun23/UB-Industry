import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => res.send("Server running ✅"));

app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, company, phone, country, message } = req.body;

    if (!firstName || !lastName || !email || !company || !phone || !country || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!process.env.ADMIN_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
      return res.status(500).json({
        message: "Missing ENV variables",
        error: "ADMIN_EMAIL or GMAIL_APP_PASSWORD not found in .env",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // ✅ Check auth quickly
    await transporter.verify();

    const COMPANY_NAME = process.env.COMPANY_NAME || "Our Company";
    const SUPPORT_PHONE = process.env.SUPPORT_PHONE || "";
    const WEBSITE = process.env.WEBSITE || "";

    const adminMail = {
      from: `"${COMPANY_NAME} Contact Form" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Submission - ${firstName} ${lastName}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Message:</b></p>
        <div style="padding:12px;border-left:3px solid #333;background:#f7f7f7;">
          ${String(message).replace(/\n/g, "<br/>")}
        </div>
      `,
    };

    const userMail = {
      from: `"${COMPANY_NAME}" <${process.env.ADMIN_EMAIL}>`,
      to: email,
      subject: `Thanks for contacting ${COMPANY_NAME}!`,
      html: `
        <p>Hi ${firstName} ${lastName},</p>
        <p>Thank you for contacting <b>${COMPANY_NAME}</b>.</p>
        <p>We received your message and our team will get back to you shortly.</p>

        <br/>
        <p>Regards,<br/>
        <b>${COMPANY_NAME}</b><br/>

        ${SUPPORT_PHONE ? `📞 ${SUPPORT_PHONE}<br/>` : ""}
        
        ${WEBSITE ? `🌐 ${WEBSITE}<br/>` : ""}
        </p>
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return res.status(200).json({ message: "Emails sent successfully." });
  } catch (err) {
    console.error("CONTACT API ERROR FULL:", err);

    return res.status(500).json({
      message: "Server error while sending email.",
      error: err?.message || String(err),
    });
  }
});


// ✅ Newsletter Subscribe API
app.post("/api/newsletter", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    // simple email format check
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      return res.status(400).json({ message: "Please enter a valid email." });
    }

    if (!process.env.ADMIN_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
      return res.status(500).json({
        message: "Missing ENV variables",
        error: "ADMIN_EMAIL or GMAIL_APP_PASSWORD missing in .env",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.verify();

    const COMPANY_NAME = process.env.COMPANY_NAME || "Our Company";
    const SUPPORT_PHONE = process.env.SUPPORT_PHONE || "";
    const WEBSITE = process.env.WEBSITE || "";

    // 1) Admin email: new subscriber
    const adminMail = {
      from: `"${COMPANY_NAME} Newsletter" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Newsletter Subscriber`,
      replyTo: email,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><b>Email:</b> ${email}</p>
      `,
    };

    // 2) User email: confirmation
    const userMail = {
      from: `"${COMPANY_NAME}" <${process.env.ADMIN_EMAIL}>`,
      to: email,
      subject: `You’re subscribed to ${COMPANY_NAME}!`,
      html: `
        <p>Hi,</p>
        <p>Thank you for subscribing to <b>${COMPANY_NAME}</b>.</p>
        <p>You’ll now receive our latest updates, industry news, and offers.</p>

        <br/>
        <p>Regards,<br/>
        <b>${COMPANY_NAME}</b><br/>
        ${SUPPORT_PHONE ? `📞 ${SUPPORT_PHONE}<br/>` : ""}
        ${WEBSITE ? `🌐 ${WEBSITE}<br/>` : ""}
        </p>
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return res.status(200).json({ message: "Subscribed successfully." });
  } catch (err) {
    console.error("NEWSLETTER API ERROR:", err);
    return res.status(500).json({
      message: "Server error while subscribing.",
      error: err?.message || String(err),
      code: err?.code || null,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
