'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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
          <div className="xl:w-2/3 w-full order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl md:text-4xl text-accent">
                Let's work together
              </h3>
              <p className="text-white/60">
                Whether you're looking to build a website, enhance your brand
                identity, or create stunning designs, I'm here to help. Let's
                collaborate and bring your vision to life!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="uiux">UI/UX Design</SelectItem>
                      <SelectItem value="logo">Logo Design</SelectItem>
                      <SelectItem value="graphics">Graphics Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Textarea
                className="h-[150px] md:h-[200px]"
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
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
                  <h3 className="text-white/60 text-sm md:text-base">
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
