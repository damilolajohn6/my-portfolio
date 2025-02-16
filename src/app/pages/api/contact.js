import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { firstName, lastName, email, phone, service, message } = req.body

  if (!firstName || !lastName || !email || !message) {
    return res
      .status(400)
      .json({ message: 'All required fields must be filled' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, // Use STARTTLS for better security
      secure: false, // false for STARTTLS, true for SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Service:</strong> ${service}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    })

    return res.status(200).json({ message: 'Email sent successfully!' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ message: `Error: ${error.message}` })
  }
}
