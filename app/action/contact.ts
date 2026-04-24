"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const organization = formData.get("organization") as string;
    const designation = formData.get("designation") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !organization || !designation || !message) {
      return { success: false, message: "All fields are required." };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Yugaya Health" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Request</title>
</head>
<body style="margin:0;padding:0;background-color:#E0F3F9;font-family:'Segoe UI',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#E0F3F9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td align="center" style="background:#0298C7;border-radius:20px 20px 0 0;padding:40px 40px 32px;">
              <h1 style="color:#ffffff;font-size:22px;font-weight:700;margin:0 0 8px;letter-spacing:-0.3px;">
                New Contact Request
              </h1>
              <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:0;">
                Someone wants to connect with your team
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;">

              <!-- Greeting -->
              <p style="font-size:15px;color:#1d1d1d;margin:0 0 24px;line-height:1.6;">
                Hi there 👋, you've received a new message through the <strong style="color:#0298C7;">Yugaya Health</strong> contact form. Here are the details:
              </p>

              <!-- Detail Cards -->
              <table width="100%" cellpadding="0" cellspacing="0">

                <!-- Name -->
                <tr>
                  <td style="padding-bottom:12px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFF;border:1px solid rgba(0,54,143,0.1);border-left:4px solid #0298C7;border-radius:10px;padding:14px 18px;">
                      <tr>
                        <td width="32" valign="middle" style="padding-right:12px;">
                          <div style="width:32px;height:32px;background:rgba(2,152,199,0.1);border-radius:8px;text-align:center;line-height:32px;font-size:16px;">👤</div>
                        </td>
                        <td valign="middle">
                          <p style="margin:0;font-size:11px;color:#0298C7;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">Full Name</p>
                          <p style="margin:4px 0 0;font-size:15px;color:#1d1d1d;font-weight:600;">${name}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding-bottom:12px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFF;border:1px solid rgba(0,54,143,0.1);border-left:4px solid #0298C7;border-radius:10px;padding:14px 18px;">
                      <tr>
                        <td width="32" valign="middle" style="padding-right:12px;">
                          <div style="width:32px;height:32px;background:rgba(2,152,199,0.1);border-radius:8px;text-align:center;line-height:32px;font-size:16px;">✉️</div>
                        </td>
                        <td valign="middle">
                          <p style="margin:0;font-size:11px;color:#0298C7;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">Email Address</p>
                          <p style="margin:4px 0 0;font-size:15px;color:#1d1d1d;font-weight:600;">
                            <a href="mailto:${email}" style="color:#0298C7;text-decoration:none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Organization + Designation side by side (via stacked for email safety) -->
                <tr>
                  <td style="padding-bottom:12px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="48%" style="padding-right:6px;">
                          <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFF;border:1px solid rgba(0,54,143,0.1);border-left:4px solid #1A596D;border-radius:10px;padding:14px 18px;">
                            <tr>
                              <td>
                                <p style="margin:0;font-size:11px;color:#1A596D;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">🏢 Organization</p>
                                <p style="margin:4px 0 0;font-size:15px;color:#1d1d1d;font-weight:600;">${organization}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td width="48%" style="padding-left:6px;">
                          <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFF;border:1px solid rgba(0,54,143,0.1);border-left:4px solid #1A596D;border-radius:10px;padding:14px 18px;">
                            <tr>
                              <td>
                                <p style="margin:0;font-size:11px;color:#1A596D;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">💼 Designation</p>
                                <p style="margin:4px 0 0;font-size:15px;color:#1d1d1d;font-weight:600;">${designation}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding-bottom:4px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,rgba(2,152,199,0.05) 0%,rgba(26,89,109,0.05) 100%);border:1px solid rgba(2,152,199,0.2);border-radius:10px;padding:18px 20px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 10px;font-size:11px;color:#0298C7;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">💬 Message</p>
                          <p style="margin:0;font-size:15px;color:#1d1d1d;line-height:1.7;white-space:pre-wrap;">${message}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your inquiry to Yugaya Health"
                      style="display:inline-block;background:#0298C7;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 36px;border-radius:50px;letter-spacing:0.3px;">
                      ↩ Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0298C7;border-radius:0 0 20px 20px;padding:24px 40px;text-align:center;">
              <h1 style="font-size:28px; font-weight:700; margin:0;">
                    <span style="color:#3ec6ff;">Yugaya</span>
                    <span style="color:#4caf50;"> Health</span>
                </h1>
              <p style="margin:0;color:rgba(255,255,255,0.55);font-size:12px;line-height:1.6;">
                This email was sent automatically from the contact form on your website.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
      `,
    });

    return { success: true, message: "Thank you! Your message has been sent." };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
