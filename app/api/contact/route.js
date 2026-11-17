
export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, subject, message, website } = body;

    // Basic bot protection
    if (website) {
      return Response.json({
        success: true,
        message: "Message received.",
      });
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanSubject = String(subject).trim();
    const cleanMessage = String(message).trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanSubject.length > 150 ||
      cleanMessage.length > 5000 ||
      cleanMessage.length < 10 ||
      !emailPattern.test(cleanEmail)
    ) {
      return Response.json(
        { error: "Please provide valid information and try again." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL;

    if (!apiKey || !recipient) {
      console.error("Missing Resend environment variables.");

      return Response.json(
        { error: "The contact service is not configured yet." },
        { status: 500 }
      );
    }

    const emailResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Johnpaul Portfolio <onboarding@resend.dev>",
          to: [recipient],
          reply_to: cleanEmail,
          subject: `Portfolio Enquiry: ${cleanSubject}`,
          text: `
New message from your portfolio website.

Name: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject}

Message:
${cleanMessage}
          `,
        }),
      }
    );

    const result = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error("Resend email error:", result);

      return Response.json(
        {
          error: "Unable to send your message right now. Please try again.",
        },
        { status: 502 }
      );
    }

    return Response.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
