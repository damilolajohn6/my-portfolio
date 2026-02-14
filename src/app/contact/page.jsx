'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

/* =========================
   DATA
========================= */
const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    value: '+2348138701686',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'damilolajohn622@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    value: 'Lagos, Nigeria',
  },
]

const serviceOptions = [
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile App Development' },
  { value: 'api', label: 'API & Backend Engineering' },
  { value: 'database', label: 'Database Architecture' },
  { value: 'uiux', label: 'UI/UX Engineering' },
  { value: 'branding', label: 'Brand Identity' },
  { value: 'graphics', label: 'Visual Design' },
  { value: 'consulting', label: 'Technical Consulting' },
]

/* =========================
   ANIMATION
========================= */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

/* =========================
   COMPONENT
========================= */
const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [responseMsg, setResponseMsg] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResponseMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      setResponseMsg(data.message)
      setIsSuccess(res.ok)

      if (res.ok) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setResponseMsg('Failed to send message. Please try again.')
      setIsSuccess(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 xl:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Let&apos;s build something great together
          </h2>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16">
          {/* ─── Contact Form ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="xl:w-[58%] w-full order-2 xl:order-none"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              <p className="text-white/60">
                Fill out the form below and I&apos;ll get back to you within 24
                hours.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>

              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Textarea
                className="h-[150px] md:h-[200px]"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              />

              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>

              {responseMsg && (
                <p
                  className={`text-sm ${
                    isSuccess ? 'text-accent' : 'text-red-400'
                  }`}
                >
                  {responseMsg}
                </p>
              )}
            </form>
          </motion.div>

          {/* ─── Contact Info ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-6 order-1 xl:order-none"
          >
            {info.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-accent/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                  <span className="text-accent text-xl">{item.icon}</span>
                </div>
                <div>
                  <p className="text-sm text-white/50">{item.title}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
