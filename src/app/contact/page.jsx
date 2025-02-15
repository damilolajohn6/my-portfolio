'use client'

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
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      exit={{ opacity: 0 }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent "> Let's work together</h3>
              <p className="text-white/60">
                I'm always open to discussing software development work or
                partnership opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phonenumber" placeholder="Phone Number" />
              </div>
              <div classname="">
                <Select>
                  <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">UI/UX Design</SelectItem>
                      <SelectItem value="pst">Logo Design</SelectItem>
                      <SelectItem value="mst">Graphics Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Textarea
                clasName="h-[200px]"
                placeholder="Type your message here"
              />
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end xl:order-none order-1 mb-8 xl:mb-0 ">
            info
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactPage
