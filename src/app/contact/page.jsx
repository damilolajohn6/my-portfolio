'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useState } from 'react'

import { Textarea } from '@/components/ui/textarea'
import { easeIn, motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResponseMsg('')

    try {
      const res = await fetch('/pages/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      setResponseMsg(data.message)

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
      setResponseMsg('Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: easeIn },
      }}
      exit={{ opacity: 0 }}
      className="py-6 px-4 md:px-8 lg:px-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16">
          {/* Contact Form */}
          <div className="xl:w-[54%] w-full order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-3xl md:text-4xl text-accent">
                Let's work together
              </h3>
              <p className="text-white/60">
                I'm here to help. Let's collaborate and bring your vision to
                life!
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

              <div>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                    <SelectItem value="graphics">Graphics Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                className="h-[150px] md:h-[200px]"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
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

              {responseMsg && <p className="text-white/60">{responseMsg}</p>}
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 flex flex-col gap-8 order-1 xl:order-none">
            {info.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#27272c] rounded-md flex items-center justify-center">
                  <span className="text-accent text-xl md:text-2xl">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium">{item.title}</p>
                  <h3 className="text-white/60 text-xl md:text-base">
                    {item.value}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactPage
