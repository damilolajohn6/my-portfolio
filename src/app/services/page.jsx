"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BsArrowUpRight,
  BsCodeSlash,
  BsPalette,
  BsVectorPen,
  BsBrush,
  BsPhone,
  BsServer,
  BsDatabase,
  BsLightbulb,
} from "react-icons/bs";

/* =========================
   DATA (SCALABLE)
========================= */
const services = [
  {
    id: "web-dev",
    number: "01",
    title: "Web Development",
    description:
      "Production-grade web applications engineered for performance, scalability, and reliability. Built with modern architectures and cloud-native best practices.",
    href: "/contact",
    icon: <BsCodeSlash />,
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "mobile-dev",
    number: "02",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications that deliver native-level performance and polished user experience across iOS and Android.",
    href: "/contact",
    icon: <BsPhone />,
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    id: "api-backend",
    number: "03",
    title: "API & Backend Engineering",
    description:
      "Scalable REST APIs, authentication systems with JWT & RBAC, and microservice architectures designed for high-throughput production environments.",
    href: "/contact",
    icon: <BsServer />,
    gradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
    tags: ["Node.js", "Express", "REST API", "JWT"],
  },
  {
    id: "database",
    number: "04",
    title: "Database Architecture",
    description:
      "Data modeling, query optimization, and scalable database design across relational and document-based systems for production workloads.",
    href: "/contact",
    icon: <BsDatabase />,
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    tags: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"],
  },
  {
    id: "ui-ux",
    number: "05",
    title: "UI/UX Engineering",
    description:
      "Human-centered interfaces that balance aesthetics with usability. Conversion-focused experiences backed by interaction design and accessibility standards.",
    href: "/contact",
    icon: <BsPalette />,
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    tags: ["Figma", "Prototyping", "Design Systems", "A11y"],
  },
  {
    id: "branding",
    number: "06",
    title: "Brand Identity",
    description:
      "Strategic brand systems including logos, typography, and visual language that create memorable and scalable brand presence across digital and print.",
    href: "/contact",
    icon: <BsVectorPen />,
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    tags: ["Logo Design", "Typography", "Brand Strategy"],
  },
  {
    id: "graphics",
    number: "07",
    title: "Visual Design",
    description:
      "High-impact marketing and product visuals crafted to elevate brand perception and drive engagement across web, mobile, and social platforms.",
    href: "/contact",
    icon: <BsBrush />,
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    tags: ["Photoshop", "Illustrator", "Social Media"],
  },
  {
    id: "consulting",
    number: "08",
    title: "Technical Consulting",
    description:
      "Architecture reviews, code audits, and strategic technical guidance for startups and teams looking to scale their engineering practices.",
    href: "/contact",
    icon: <BsLightbulb />,
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
    tags: ["Code Audits", "Architecture", "CI/CD", "Git"],
  },
];

/* =========================
   ANIMATION SYSTEM
========================= */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   COMPONENT
========================= */
const Services = () => {
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
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            High-impact solutions for modern digital products
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-accent/40 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient hover layer */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${service.gradient}`}
              />

              {/* Top row */}
              <div className="relative flex items-center justify-between mb-8">
                <div className="text-5xl font-extrabold text-white/10 group-hover:text-white/20 transition">
                  {service.number}
                </div>

                <Link
                  href={service.href}
                  aria-label={`View ${service.title}`}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white text-2xl group-hover:bg-accent group-hover:text-primary group-hover:rotate-45 transition-all duration-500"
                >
                  <BsArrowUpRight />
                </Link>
              </div>

              {/* Icon */}
              <div className="relative mb-6 text-4xl text-accent group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative text-white/60 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tech tags */}
              <div className="relative flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 group-hover:border-accent/30 group-hover:text-white/70 transition-all duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
