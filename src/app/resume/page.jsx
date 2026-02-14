"use client";

import { TabsTrigger, Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaMobileAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiFlask,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiPostgresql,
  SiGit,
  SiGithubactions,
  SiAdobexd,
  SiExpress,
  SiMysql,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";

/* ================= ABOUT ================= */

const about = {
  title: "About Me",
  description:
    "Full Stack Software Engineer with 5+ years of experience building scalable backend systems, high-performance web dashboards, and cross-platform mobile applications. I specialize in Node.js, Express, Next.js, and React Native, with strong expertise in REST API architecture, authentication systems, and database design. I focus on writing clean, maintainable code and delivering reliable products in fast-paced startup environments.",
  info: [
    { fieldName: "Name", fieldValue: "Esan Damilola John" },
    { fieldName: "Phone", fieldValue: "+2348138701686" },
    { fieldName: "Experience", fieldValue: "5+ Years" },
    { fieldName: "Email", fieldValue: "damilolajohn622@gmail.com" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English" },
  ],
};

/* ================= EXPERIENCE ================= */

const experience = {
  title: "Professional Experience",
  description:
    "Proven track record of building and scaling full-stack and mobile applications, optimizing backend performance, and delivering production-ready systems in fast-paced environments.",
  items: [
    {
      company: "30century",
      position: "Full Stack Engineer",
      duration: "Mar 2025 - Jan 2026",
      responsibilities: [
        "Architected scalable backend services using Node.js and Express.",
        "Built high-performance Next.js admin dashboard for business operations.",
        "Developed cross-platform React Native mobile application.",
        "Designed secure REST APIs with JWT authentication and RBAC.",
        "Optimized API response time and system reliability.",
      ],
    },
    {
      company: "Qwik Multiservice Technologies",
      position: "Full Stack Developer",
      duration: "Nov 2024 - Present",
      responsibilities: [
        "Developing and maintaining full-stack applications with modern technologies.",
        "Building scalable backend services and optimizing frontend performance.",
        "Collaborating with cross-functional teams to deliver high-quality solutions.",
      ],
    },
    {
      company: "Bluestocks Inc",
      position: "Front-End Developer",
      duration: "2024",
      responsibilities: [
        "Designed and developed responsive web apps with React and Next.js.",
        "Optimized UI performance and improved user experience.",
        "Implemented SEO and accessibility best practices.",
      ],
    },
    {
      company: "LuTa Tech",
      position: "Software Engineer",
      duration: "2023",
      responsibilities: [
        "Built and maintained web applications using React and Node.js.",
        "Integrated REST APIs and improved backend functionality.",
        "Worked closely with product and design teams.",
      ],
    },
    {
      company: "ApexKonnect Resources",
      position: "Graphics Web Designer",
      duration: "2020 - 2023",
      responsibilities: [
        "Designed web interfaces and branding materials.",
        "Created custom logos and UI elements.",
        "Improved website aesthetics and engagement.",
      ],
    },
  ],
};

/* ================= EDUCATION ================= */

const education = {
  title: "Education & Certifications",
  description:
    "Formal training in software engineering, backend systems, and modern frontend development.",
  items: [
    {
      institution: "ALX Software Engineering Program",
      degree: "Back-end Track",
      duration: "2023",
    },
    {
      institution: "Qwassar Silicon Valley",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "LuTaVerse",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2022",
    },
    {
      institution: "Udacity",
      degree: "UI/UX Masterclass",
      duration: "2019",
    },
  ],
};

/* ================= SKILLS ================= */

const skills = {
  title: "Technical Skills",
  description:
    "Modern full-stack and mobile development technologies used in production environments.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaMobileAlt />, name: "React Native" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithubactions />, name: "CI/CD" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

/* ================= COMPONENT ================= */

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-12">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="w-full min-h-[90vh]">

            {/* EXPERIENCE */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60">
                  {experience.description}
                </p>

                <ScrollArea className="h-[420px] pr-4">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] p-6 rounded-xl flex flex-col gap-3"
                      >
                        <h3 className="text-xl font-semibold">{item.company}</h3>
                        <span className="text-accent text-sm">{item.duration}</span>
                        <p className="text-white/80 font-medium">{item.position}</p>

                        <ul className="text-white/60 text-sm space-y-1 list-disc pl-4">
                          {item.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education">
              <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-auto p-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.institution}
                          </h3>
                          <span className="text-accent">{item.duration}</span>

                          <div className=" items-center gap-3">
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center text-white/80 lg:text-left">
                              {item.degree}
                            </h3>
                            <p className="text-white/60 mx-auto xl:mx-0">
                              {item.highlights}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.skillList.map((skill, index) => (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[140px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-5xl group-hover:text-accent transition">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* ABOUT */}
            <TabsContent value="about">
              <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/70">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto  xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
