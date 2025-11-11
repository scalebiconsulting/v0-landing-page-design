import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json()

    // Email template for Samuel (admin)
    const adminEmailContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif; background-color: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
          .header { background-color: #1a2e3e; padding: 30px; color: white; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .header p { margin: 8px 0 0 0; color: #e8d4b0; }
          .content { padding: 30px; }
          .section { margin-bottom: 25px; }
          .section-title { font-size: 16px; font-weight: bold; color: #1a2e3e; margin-bottom: 12px; border-bottom: 2px solid #e8d4b0; padding-bottom: 8px; display: flex; align-items: center; gap: 8px; }
          .info-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f0f0f0; }
          .info-label { font-weight: 600; color: #1a2e3e; }
          .info-value { color: #666; }
          .problems-list { background-color: #f9f9f9; padding: 12px; border-radius: 6px; }
          .problem-item { padding: 6px 0; color: #666; }
          .next-steps { background-color: #e8d4b0; padding: 20px; border-radius: 6px; margin-top: 20px; }
          .next-steps h3 { color: #1a2e3e; margin: 0 0 10px 0; }
          .next-steps p { color: #1a2e3e; margin: 0; }
          .footer { background-color: #1a2e3e; padding: 20px; color: #fff; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Nuevo Cliente Potencial</h1>
            <p>Scale BI Consulting - Sistema Contable</p>
          </div>
          
          <div class="content">
            <div class="section">
              <div class="section-title">📋 Información del Cliente</div>
              <div class="info-row">
                <span class="info-label">👤 Nombre:</span>
                <span class="info-value">${formData.nombre}</span>
              </div>
              <div class="info-row">
                <span class="info-label">🆔 RUT:</span>
                <span class="info-value">${formData.rut || "No proporcionado"}</span>
              </div>
              <div class="info-row">
                <span class="info-label">📧 Email:</span>
                <span class="info-value"><a href="mailto:${formData.email}">${formData.email}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">📱 Teléfono:</span>
                <span class="info-value">${formData.telefono || "No proporcionado"}</span>
              </div>
              <div class="info-row">
                <span class="info-label">🏢 Empresa:</span>
                <span class="info-value">${formData.empresa || "No proporcionado"}</span>
              </div>
              <div class="info-row">
                <span class="info-label">👥 Colaboradores:</span>
                <span class="info-value">${formData.colaboradores} empleados</span>
              </div>
            </div>

            <div class="section">
              <div class="section-title">🎯 Problemas Identificados</div>
              <div class="problems-list">
                ${formData.problemas.map((p: string) => `<div class="problem-item">✓ ${p}</div>`).join("")}
                ${formData.otroProblema ? `<div class="problem-item"><strong>Otro:</strong> ${formData.otroProblema}</div>` : ""}
              </div>
            </div>

            <div class="next-steps">
              <h3>🚀 Próximos Pasos</h3>
              <p>Contactar al cliente dentro de las próximas 2 horas para maximizar la conversión</p>
            </div>
          </div>

          <div class="footer">
            <p>Scale BI Consulting | Sistema Contable Profesional para PYMEs</p>
          </div>
        </div>
      </body>
    </html>
    `

    // Email template for customer confirmation
    const customerEmailContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif; background-color: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
          .header { background-color: #1a2e3e; padding: 30px; color: white; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .header p { margin: 8px 0 0 0; color: #e8d4b0; }
          .content { padding: 30px; }
          .section { margin-bottom: 25px; }
          .section-title { font-size: 16px; font-weight: bold; color: #1a2e3e; margin-bottom: 12px; }
          .message { color: #666; line-height: 1.6; }
          .highlight { background-color: #e8d4b0; padding: 15px; border-radius: 6px; margin: 15px 0; }
          .highlight p { margin: 0; color: #1a2e3e; font-weight: 600; }
          .next-steps { background-color: #f9f9f9; padding: 20px; border-radius: 6px; margin-top: 20px; }
          .next-steps ol { color: #666; margin: 10px 0; padding-left: 20px; }
          .next-steps li { margin: 8px 0; }
          .footer { background-color: #1a2e3e; padding: 20px; color: #fff; text-align: center; font-size: 12px; }
          .contact-info { margin-top: 15px; padding-top: 15px; border-top: 1px solid #e0e0e0; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Solicitud Recibida</h1>
            <p>Scale BI Consulting</p>
          </div>
          
          <div class="content">
            <p class="message">Hola ${formData.nombre},</p>
            
            <p class="message">¡Gracias por tu interés en Scale BI Consulting! Hemos recibido correctamente tu solicitud de consultoría.</p>

            <div class="highlight">
              <p>📋 Tu solicitud ha sido registrada y será revisada en breve</p>
            </div>

            <div class="section">
              <div class="section-title">🎯 Próximos Pasos</div>
              <div class="next-steps">
                <ol>
                  <li><strong>Pronto contacto:</strong> Nuestro equipo se pondrá en contacto contigo dentro de las próximas 2 horas</li>
                  <li><strong>Agendar consultoría:</strong> Podrás elegir la fecha y hora que mejor te convenga</li>
                  <li><strong>Análisis personalizado:</strong> Exploraremos juntos las mejores soluciones para tu empresa</li>
                </ol>
              </div>
            </div>

            <div class="section">
              <div class="section-title">📊 Resumen de tu solicitud</div>
              <div class="message">
                <strong>Empresa:</strong> ${formData.empresa || "No proporcionado"}<br>
                <strong>Colaboradores:</strong> ${formData.colaboradores}<br>
                <strong>Áreas de interés:</strong> ${formData.problemas.slice(0, 2).join(", ")}${formData.problemas.length > 2 ? "..." : ""}
              </div>
            </div>

            <div class="contact-info">
              <p><strong>¿Preguntas?</strong> Puedes responder directamente a este correo o contactarnos:</p>
              <p>📧 Email: <a href="mailto:samuel@scalebi.ai">samuel@scalebi.ai</a></p>
            </div>
          </div>

          <div class="footer">
            <p>Scale BI Consulting | Sistema Contable Profesional para PYMEs</p>
          </div>
        </div>
      </body>
    </html>
    `

    // Send email to Samuel (admin)
    const adminResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "noreply@scalebi.ai",
        to: "samuel@scalebi.ai",
        subject: `Nuevo Cliente Potencial: ${formData.nombre} - ${formData.empresa}`,
        html: adminEmailContent,
      }),
    })

    if (!adminResponse.ok) {
      throw new Error("Error sending admin email")
    }

    const customerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "noreply@scalebi.ai",
        to: formData.email,
        subject: "✅ Tu solicitud de consultoría ha sido recibida - Scale BI Consulting",
        html: customerEmailContent,
      }),
    })

    if (!customerResponse.ok) {
      throw new Error("Error sending customer confirmation email")
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error in send-consultation:", error)
    return NextResponse.json({ error: "Failed to send consultation" }, { status: 500 })
  }
}
