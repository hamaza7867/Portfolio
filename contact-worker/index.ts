export interface Env {
  CYPHEX_MAIL_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Enable CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    try {
      const data = await request.json() as {
        name: string;
        email: string;
        projectType: string;
        budget: string;
        message: string;
        website?: string; // Honeypot field (hidden field for spam protection)
      };

      const { name, email, projectType, budget, message, website } = data;

      // 1. Honeypot Spam Protection
      if (website) {
        // Return 200 so spambots believe they succeeded, but silently discard the mail
        return new Response(JSON.stringify({ success: true, note: 'Spam filtered' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }

      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }

      const apiKey = env.CYPHEX_MAIL_API_KEY || 'cm_live_81771d1f0bba2698d1b06025e79a27b0bae59846c8c91a2f';

      // 2. Send Notification Email to you (hamaza7867@gmail.com)
      const mailResponse = await fetch('https://mail.cyphex.agency/api/emails/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'portfolio-contact@cyphex.agency',
          to: 'hamaza7867@gmail.com',
          subject: `⚡ New Inquiry: ${projectType} from ${name}`,
          html: `
            <div style="background-color: #F8FAFC; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B;">
              <div style="max-width: 580px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E2E8F0; border-top: 4px solid #2196F3; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); overflow: hidden;">
                <!-- Header -->
                <div style="padding: 24px 30px; border-bottom: 1px solid #F1F5F9; background-color: #FCFDFE;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="vertical-align: middle;">
                        <div style="display: inline-block; width: 36px; height: 36px; line-height: 36px; background-color: #2196F3; color: #FFFFFF; font-weight: bold; text-align: center; border-radius: 6px; font-size: 16px; margin-right: 12px; font-family: monospace;">AH</div>
                        <span style="font-size: 16px; font-weight: 700; color: #0F172A; letter-spacing: -0.5px;">Ali Hamza</span>
                      </td>
                      <td align="right" style="vertical-align: middle;">
                        <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #2196F3; background-color: #E3F2FD; padding: 6px 12px; border-radius: 20px; font-family: monospace;">New Lead</span>
                      </td>
                    </tr>
                  </table>
                </div>
                <!-- Body -->
                <div style="padding: 30px;">
                  <h2 style="font-size: 20px; font-weight: 700; color: #0F172A; margin-top: 0; margin-bottom: 20px; letter-spacing: -0.3px;">New Contact Form Submission</h2>
                  
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #F8FAFC; width: 130px; font-size: 13px; font-weight: 600; color: #64748B;">Client Name:</td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #F8FAFC; font-size: 14px; font-weight: 600; color: #0F172A;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #F8FAFC; font-size: 13px; font-weight: 600; color: #64748B;">Client Email:</td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #F8FAFC; font-size: 14px; color: #2196F3; font-weight: 500;"><a href="mailto:${email}" style="color: #2196F3; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #F8FAFC; font-size: 13px; font-weight: 600; color: #64748B;">Project Type:</td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #F8FAFC; font-size: 13px; font-weight: 700; color: #475569;"><span style="background-color: #F1F5F9; padding: 4px 8px; border-radius: 4px;">${projectType}</span></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #F8FAFC; font-size: 13px; font-weight: 600; color: #64748B;">Budget Range:</td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #F8FAFC; font-size: 14px; font-weight: 600; color: #0F172A;">${budget}</td>
                    </tr>
                  </table>

                  <p style="font-size: 13px; font-weight: 700; color: #64748B; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px;">Message Details:</p>
                  <div style="background-color: #F8FAFC; border-left: 4px solid #2196F3; padding: 16px 20px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #334155; font-style: italic; font-weight: 500;">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
                <!-- Footer -->
                <div style="padding: 20px 30px; background-color: #F8FAFC; border-top: 1px solid #F1F5F9; text-align: center; font-size: 11px; color: #94A3B8; font-family: monospace;">
                  Sent via Portfolio Contact API · Powered by Cyphex Mail
                </div>
              </div>
            </div>
          `,
          text: `New Contact Form Submission\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget Range: ${budget}\nMessage: ${message}`
        }),
      });

      if (!mailResponse.ok) {
        const errText = await mailResponse.text();
        return new Response(JSON.stringify({ error: `Failed to send email via Cyphex Mail: ${errText}` }), {
          status: 502,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }

      // 3. Send Auto-Responder (Two-Way email confirmation back to the Client)
      try {
        await fetch('https://mail.cyphex.agency/api/emails/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'portfolio-contact@cyphex.agency',
            to: email,
            subject: 'Inquiry Received - Ali Hamza',
            html: `
              <div style="background-color: #F8FAFC; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B;">
                <div style="max-width: 580px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E2E8F0; border-top: 4px solid #2196F3; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); overflow: hidden;">
                  <!-- Header -->
                  <div style="padding: 24px 30px; border-bottom: 1px solid #F1F5F9; background-color: #FCFDFE;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="vertical-align: middle;">
                          <div style="display: inline-block; width: 36px; height: 36px; line-height: 36px; background-color: #2196F3; color: #FFFFFF; font-weight: bold; text-align: center; border-radius: 6px; font-size: 16px; margin-right: 12px; font-family: monospace;">AH</div>
                          <span style="font-size: 16px; font-weight: 700; color: #0F172A; letter-spacing: -0.5px;">Ali Hamza</span>
                        </td>
                        <td align="right" style="vertical-align: middle;">
                          <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748B; background-color: #F1F5F9; padding: 6px 12px; border-radius: 20px; font-family: monospace;">Inquiry Received</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!-- Body -->
                  <div style="padding: 30px; line-height: 1.6;">
                    <p style="font-size: 15px; margin-top: 0; color: #0F172A; font-weight: 600;">Hi ${name},</p>
                    <p style="font-size: 14px; color: #334155;">Thank you for reaching out! I have received your message regarding a <strong>${projectType}</strong> project and will get back to you shortly (typically within 24 hours).</p>
                    
                    <p style="font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 24px; margin-bottom: 8px;">A copy of your message details:</p>
                    <div style="background-color: #F8FAFC; border-left: 4px solid #2196F3; padding: 14px 18px; border-radius: 4px; font-size: 13px; color: #475569; font-style: italic; margin-bottom: 24px;">
                      ${message.replace(/\n/g, '<br>')}
                    </div>

                    <p style="font-size: 14px; color: #334155; margin-bottom: 0;">Best regards,</p>
                    <p style="font-size: 14px; margin-top: 5px; color: #0F172A;"><strong>Ali Hamza</strong><br><span style="font-size: 12px; color: #64748B;">Software Engineer</span></p>
                  </div>
                  <!-- Footer -->
                  <div style="padding: 20px 30px; background-color: #F8FAFC; border-top: 1px solid #F1F5F9; text-align: center; font-size: 11px; color: #94A3B8; font-family: monospace;">
                    You are receiving this because you contacted me at ali-hamza.com
                  </div>
                </div>
              </div>
            `,
            text: `Hi ${name},\n\nThank you for reaching out! I have received your message regarding a ${projectType} project and will get back to you shortly.\n\nBest regards,\nAli Hamza`
          }),
        });
      } catch (autoResponderErr) {
        // Log auto-responder error, but do not crash the request (client notification sent to you succeeded)
        console.error('Auto-responder error:', autoResponderErr);
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    } catch (err: any) {
      return new Response(JSON.stringify({ error: err.message || 'Internal server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
  },
};
