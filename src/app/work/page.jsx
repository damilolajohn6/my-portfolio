'use client'

import { easeInOut, motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'
import { BsArrowUpRight, BsGithub, BsX } from 'react-icons/bs'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import WorkSliderBtns from '@/components/WorkSliderBtns'
import Image from 'next/image'
import Link from 'next/link'

/* ================= PROJECTS ================= */

const projects = [
  // FULLSTACK
  {
    num: '01',
    category: 'fullstack',
    title: 'Private Jet Booking Platform',
    description:
      'End-to-end private jet booking system with real-time availability and secure payments.',
    metrics: ' Reduced API latency by 35% • Production ready',
    stack: [
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
      { name: 'Stripe' },
    ],
    image:
      'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Designed a scalable booking architecture with optimized API performance, role-based access control, and real-time availability handling.',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'Real Estate Listing Platform',
    description:
      'Property listing platform with advanced filtering and media uploads.',
    metrics: 'Production deployment',
    stack: [
      { name: 'Next.js' },
      { name: 'Prisma' },
      { name: 'MongoDB' },
    ],
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Developed scalable listing engine with optimized queries and Cloudinary media pipeline.',
  },
  {
    num: '03',
    category: 'fullstack',
    title: 'E-Learning Management System',
    description:
      'A comprehensive LMS with video course streaming, quizzes, and student progress tracking.',
    metrics: 'Supporting 10k+ active students',
    stack: [
      { name: 'Next.js' },
      { name: 'PostgreSQL' },
      { name: 'Prisma' },
      { name: 'AWS S3' },
    ],
    image:
      'https://images.unsplash.com/photo-1504384308090-c54be3852f33?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Built a robust video streaming service using AWS S3 and CloudFront, integrated a secure quiz engine, and implemented real-time progress tracking.',
  },
  {
    num: '04',
    category: 'fullstack',
    title: 'Social Media Dashboard',
    description:
      'Analytics and management tool for social media accounts with post scheduling.',
    metrics: 'Increased user engagement by 40%',
    stack: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Redis' },
    ],
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Architected a microservices backend to handle high-throughput data ingestion from social media APIs, caching real-time metrics with Redis.',
  },
  {
    num: '05',
    category: 'fullstack',
    title: 'Telemedicine Consultation App',
    description:
      'Secure video consultation platform connecting patients with doctors effectively.',
    metrics: 'HIPAA Compliant • <100ms Latency',
    stack: [
      { name: 'Next.js' },
      { name: 'WebRTC' },
      { name: 'Socket.io' },
      { name: 'Postgres' },
    ],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Implemented secure, encrypted video calls using WebRTC and managed real-time appointment scheduling with complex calendar logic.',
  },

  // MOBILE
  {
    num: '06',
    category: 'mobile',
    title: 'On-Demand Services Mobile App',
    description:
      'Cross-platform marketplace mobile app with authentication and live updates.',
    metrics: 'Cross-platform • Secure auth',
    stack: [
      { name: 'React Native' },
      { name: 'Expo' },
      { name: 'Node.js' },
    ],
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Built scalable mobile architecture with optimized navigation performance and secure JWT authentication.',
  },
  {
    num: '07',
    category: 'mobile',
    title: 'Fitness & Workout Tracker',
    description:
      'Personalized workout plans and progress tracking with wearable integration.',
    metrics: '4.8 App Store Rating',
    stack: [
      { name: 'React Native' },
      { name: 'TypeScript' },
      { name: 'Firebase' },
    ],
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Developed real-time fitness data synchronization with wearables and implemented offline-first capability using local databases.',
  },
  {
    num: '08',
    category: 'mobile',
    title: 'Crypto Wallet & Exchange',
    description:
      'Secure mobile wallet for managing cryptocurrency assets and real-time trading.',
    metrics: 'Bank-grade Security',
    stack: [
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'WebSockets' },
    ],
    image:
      'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Focus on security implementation, biometric authentication, and high-frequency real-time price updates via WebSockets.',
  },
  {
    num: '09',
    category: 'mobile',
    title: 'Travel Companion App',
    description:
      'Itinerary planner with offline maps and local recommendations.',
    metrics: '10k+ Downloads',
    stack: [
      { name: 'React Native' },
      { name: 'Google Maps' },
      { name: 'Redux' },
    ],
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Optimized map rendering for performance on low-end devices and created a robust offline storage synchronization system.',
  },
  {
    num: '10',
    category: 'mobile',
    title: 'Food Delivery Platform',
    description:
      'Hyper-local food delivery app with live driver tracking and restaurant management.',
    metrics: 'Real-time GPS Tracking',
    stack: [
      { name: 'React Native' },
      { name: 'Socket.io' },
      { name: 'Node.js' },
    ],
    image:
      'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Engineered the driver dispatch algorithm and implemented smooth live-tracking animations on the map interface.',
  },

  // BACKEND
  {
    num: '11',
    category: 'backend',
    title: 'Scalable Authentication Service',
    description:
      'Robust auth microservice supporting OTP, JWT, and role-based access.',
    metrics: 'Enterprise-grade auth',
    stack: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'PostgreSQL' },
    ],
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Implemented secure authentication flows, refresh tokens, and audit logging for production systems.',
  },
  {
    num: '12',
    category: 'backend',
    title: 'Financial Transaction API',
    description:
      'High-performance API for processing financial transactions with ACID compliance.',
    metrics: '99.99% Uptime SLA',
    stack: [
      { name: 'Go' },
      { name: 'gRPC' },
      { name: 'PostgreSQL' },
    ],
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Designed a distributed transaction system ensuring data integrity and handling concurrent requests with minimal locking contention.',
  },
  {
    num: '13',
    category: 'backend',
    title: 'Content Delivery Network (CDN)',
    description:
      'Custom edge network infrastructure for delivering static assets globally.',
    metrics: 'Global Edge Caching',
    stack: [
      { name: 'Rust' },
      { name: 'Redis' },
      { name: 'Nginx' },
    ],
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Built a custom caching layer to minimize origin server load and reduce latency for end-users across different geographical regions.',
  },
  {
    num: '14',
    category: 'backend',
    title: 'IoT Data Ingestion Pipeline',
    description:
      'Scalable pipeline to process and analyze telemetry data from millions of devices.',
    metrics: 'Process 1M events/sec',
    stack: [
      { name: 'Python' },
      { name: 'Kafka' },
      { name: 'Cassandra' },
    ],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Implemented a streaming architecture using Kafka and Apache Spark to process real-time sensor data and detect anomalies.',
  },
  {
    num: '15',
    category: 'backend',
    title: 'Chat Infrastructure Service',
    description:
      'Real-time messaging backend supporting group chats, history, and status.',
    metrics: 'Million concurrent connections',
    stack: [
      { name: 'Elixir' },
      { name: 'Phoenix' },
      { name: 'Redis' },
    ],
    image:
      'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Leveraged the concurrency model of Erlang VM to handle massive numbers of simultaneous socket connections efficiently.',
  },

  // FRONTEND
  {
    num: '16',
    category: 'frontend',
    title: 'Next.js Analytics Dashboard',
    description:
      'High-performance admin dashboard with dynamic charts and RBAC.',
    metrics: 'Improved load speed by 40%',
    stack: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind' },
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Built modular dashboard architecture with optimized rendering and role-based access.',
  },
  {
    num: '17',
    category: 'frontend',
    title: '3D Product Configurator',
    description:
      'Interactive 3D web experience for customizing products in real-time.',
    metrics: 'Three.js Implementation',
    stack: [
      { name: 'React' },
      { name: 'Three.js' },
      { name: 'WebGL' },
    ],
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Implemented complex 3D rendering optimizations and texture mapping to ensure smooth performance on mobile browsers.',
  },
  {
    num: '18',
    category: 'frontend',
    title: 'Modern Portfolio Website',
    description:
      'A sleek, accessible, and performant personal portfolio with animations.',
    metrics: '100/100 Lighthouse Score',
    stack: [
      { name: 'Next.js' },
      { name: 'Framer Motion' },
      { name: 'Tailwind' },
    ],
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Utilized advanced animation libraries to create immersive transitions while maintaining top-tier accessibility and performance metrics.',
  },
  {
    num: '19',
    category: 'frontend',
    title: 'Movie Database Explorer',
    description:
      'A visual discovery interface for movies and TV shows using TMDB API.',
    metrics: 'Infinite Scroll & Virtualization',
    stack: [
      { name: 'React' },
      { name: 'TanStack Query' },
      { name: 'CSS Modules' },
    ],
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Implemented efficient data fetching strategies and virtualized lists to handle browsing thousands of movie records smoothly.',
  },
  {
    num: '20',
    category: 'frontend',
    title: 'SaaS Landing Page System',
    description:
      'Highly converting landing page tailored for SaaS products with A/B testing.',
    metrics: 'Conversion Rate +25%',
    stack: [
      { name: 'Astro' },
      { name: 'React' },
      { name: 'Tailwind' },
    ],
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    caseStudy:
      'Focused on Core Web Vitals and component reusability to allow marketing teams to rapidly deploy and test new landing page variations.',
  },
]

/* ================= COMPONENT ================= */

const WorkPage = () => {
  const [activeCategory, setActiveCategory] =
  useState('all')
  const [projectIndex, setProjectIndex] = useState(0)
  const [openCase, setOpenCase] = useState(null)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const project = filteredProjects[projectIndex] ?? filteredProjects[0]

  const handleSlideChange = (swiper) => {
    setProjectIndex(swiper.activeIndex)
  }

  const hasLive = Boolean(project?.live)
  const hasGithub = Boolean(project?.github)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="min-h-[80vh] flex flex-col justify-center py-12"
    >
      <div className="container mx-auto">

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center xl:justify-start">
          {(['all', 'fullstack', 'frontend', 'mobile', 'backend']).map(
            (cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat)
                  setProjectIndex(0)
                }}
                className={`px-4 py-2 rounded-full capitalize text-sm transition ${
                  activeCategory === cat
                    ? 'bg-accent text-white'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        <div className="flex flex-col xl:flex-row gap-10">

          {/* LEFT */}
          <div className="xl:w-1/2 flex flex-col gap-6">

            <div className="text-7xl font-extrabold text-transparent text-outline">
              {project?.num}
            </div>

            <h2 className="text-3xl xl:text-[40px] font-bold">
              {project?.title}
            </h2>

            <p className="text-white/60">{project?.description}</p>

            {project?.metrics && (
              <div className="text-accent text-sm font-medium">
                {project.metrics}
              </div>
            )}

            {/* STACK */}
            <ul className="flex flex-wrap gap-2">
              {project?.stack.map((item, i) => (
                <li
                  key={i}
                  className="text-xs px-3 py-1 rounded-md bg-white/5 text-accent"
                >
                  {item.name}
                </li>
              ))}
            </ul>

            {/* BUTTONS */}
            <div className="flex gap-4">

              <button
                onClick={() => setOpenCase(project)}
                className="px-5 py-2 bg-accent rounded-lg text-white text-sm"
              >
                View Case Study
              </button>

              <Link
                href={hasGithub ? project.github : '#'}
                className="w-[48px] h-[48px] rounded-full bg-white/5 flex justify-center items-center"
              >
                <BsGithub />
              </Link>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="xl:w-1/2">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3200 }}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
            >
              {filteredProjects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      fill
                      alt={item.title}
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-0 z-20"
                btnStyles="bg-accent text-white w-[44px] h-[44px] flex justify-center items-center"
                IconStyles="text-white"
              />
            </Swiper>
          </div>
        </div>

        {/* ================= CASE STUDY MODAL ================= */}

        <AnimatePresence>
          {openCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-[#1a1a1a] max-w-2xl w-full rounded-2xl p-8 relative"
              >
                <button
                  onClick={() => setOpenCase(null)}
                  className="absolute right-4 top-4"
                >
                  <BsX size={24} />
                </button>

                <h3 className="text-2xl font-bold mb-4">
                  {openCase.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {openCase.caseStudy}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default WorkPage
