import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

type FormPayload = {
  nombre: string
  rut?: string
  email: string
  telefono?: string
  empresa?: string
  colaboradores: string
  problemas: string[]
  otroProblema?: string
}

// Initialize Resend SDK (server-side). It will read the API key from env.
function getResendClient() {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

export async function POST(req: NextRequest) {
  try {
    const formData: FormPayload = await req.json()

    // Basic validation
    if (!formData || !formData.nombre || !formData.email || !formData.colaboradores) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }
  // Read configuration from environment variables
    const resendKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM || "samuel@scalebi.ai"
    const adminEmail = process.env.ADMIN_EMAIL || "samuel@scalebi.ai"

    if (!resendKey) {
      console.error("[v0] RESEND_API_KEY is not configured")
      return NextResponse.json({ success: false, error: "Email service not configured" }, { status: 500 })
    }

    const problemasText = Array.isArray(formData.problemas) ? formData.problemas.join(", ") : String(formData.problemas || "No proporcionado")

    // Build HTML for admin notification
    const adminHtml = `
      <h2>Nuevo cliente</h2>
      <p><strong>Nombre:</strong> ${formData.nombre}</p>
      <p><strong>RUT:</strong> ${formData.rut || "No proporcionado"}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Teléfono:</strong> ${formData.telefono || "No proporcionado"}</p>
      <p><strong>Empresa:</strong> ${formData.empresa || "No proporcionado"}</p>
      <p><strong>Colaboradores:</strong> ${formData.colaboradores}</p>
      <p><strong>Problemas:</strong> ${problemasText}</p>
      <p><strong>Otro problema:</strong> ${formData.otroProblema || "No proporcionado"}</p>
    `

    // Build HTML for customer confirmation
    const customerHtml = `
      <h2>Solicitud recibida</h2>
      <p>Hola ${formData.nombre},</p>
      <p>Hemos recibido tu solicitud de consultoría. Nuestro equipo se pondrá en contacto contigo en las próximas 48 horas.</p>
      <p><strong>Empresa:</strong> ${formData.empresa || "No proporcionado"}</p>
      <p>Si necesitas contactarnos antes, responde a este correo.</p>
    `

    // Create SDK client
    const resendClient = getResendClient()
    if (!resendClient) {
      console.error("[v0] RESEND_API_KEY is not configured")
      return NextResponse.json({ success: false, error: "Email service not configured" }, { status: 500 })
    }

    // Send admin notification using SDK
    try {
      const adminResp = await resendClient.emails.send({
        from: fromEmail,
        to: adminEmail,
        subject: `Nuevo Cliente: ${formData.nombre} - ${formData.empresa || "Sin empresa"}`,
        html: adminHtml,
      })
      
      // Check if response contains an error
      if ((adminResp as any).error) {
        console.error("[v0] Resend admin error:", (adminResp as any).error)
        return NextResponse.json({ 
          success: false, 
          error: "Failed to send admin email",
          details: (adminResp as any).error 
        }, { status: 502 })
      }
      
      console.log("[v0] Admin email sent successfully:", (adminResp as any).data?.id || adminResp.id)
    } catch (err) {
      console.error("[v0] Error sending admin email via Resend:", err)
      return NextResponse.json({ success: false, error: "Failed to send admin email" }, { status: 502 })
    }

    // Send confirmation to customer using SDK
    try {
      const customerResp = await resendClient.emails.send({
        from: fromEmail,
        to: formData.email,
        subject: "Tu solicitud de consultoría ha sido recibida - Scale BI Consulting",
        html: customerHtml,
      })
      
      // Check if response contains an error
      if ((customerResp as any).error) {
        console.error("[v0] Resend customer error:", (customerResp as any).error)
        return NextResponse.json({ 
          success: false, 
          error: "Failed to send customer confirmation",
          details: (customerResp as any).error 
        }, { status: 502 })
      }
      
      console.log("[v0] Customer email sent successfully:", (customerResp as any).data?.id || customerResp.id)
    } catch (err) {
      console.error("[v0] Error sending customer email via Resend:", err)
      return NextResponse.json({ success: false, error: "Failed to send customer confirmation" }, { status: 502 })
    }

    return NextResponse.json({ success: true, message: "Emails sent" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error in send-consultation:", error)
    return NextResponse.json({ error: "Failed to process consultation", success: false }, { status: 500 })
  }
}
