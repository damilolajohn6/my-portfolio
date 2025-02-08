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
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDjango, SiFlask } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I am a highly motivated and results-driven Software Engineer with over 5 years of experience in designing, developing, and maintaining high-performance web applications. My expertise spans across Web Development, UI/UX Design, Logo Design, and Graphics Design, where I create visually appealing and scalable solutions using modern technologies like Next.js, React, Node.js, TypeScript, Python (Django & Flask), and PostgreSQL/MongoDB. With a deep understanding of REST API development, Agile methodologies, software testing, and database management, I ensure seamless, efficient, and user-centric applications. Passionate about innovation and problem-solving, I thrive in fast-paced environments, collaborating with cross-functional teams to deliver cutting-edge digital solutions.",
  info: [
    { fieldName: "Name", fieldValue: "Esan Damilola John" },
    { fieldName: "Phone", fieldValue: "+2348138701686" },
    { fieldName: "Experience", fieldValue: "5+ Years" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Email", fieldValue: "damilolajohn622@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Professional Experience",
  description:
    "With a track record of working in diverse technical environments, I have gained hands-on experience in full-stack development, and graphics/web design. I have successfully built and deployed scalable applications, optimized performance, and collaborated with teams to deliver user-friendly digital solutions.",
  items: [
    {
      company: "Qwik Technologies",
      position: "Full Stack Developer",
      duration: "2025 - Present",
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
        "Designed and developed responsive web applications with React and Next.js.",
        "Optimized UI performance and improved user experience.",
        "Implemented best practices for SEO and accessibility.",
      ],
    },
    {
      company: "LuTa Tech",
      position: "Software Engineer",
      duration: "2023",
      responsibilities: [
        "Built and maintained robust web applications using React and Node.js.",
        "Integrated REST APIs and improved backend functionality.",
        "Worked closely with designers and product teams to enhance UX/UI.",
      ],
    },
    {
      company: "ApexKonnect Resources",
      position: "Graphics Web Designer",
      duration: "2020 - 2023",
      responsibilities: [
        "Designed visually compelling web interfaces and branding materials.",
        "Created custom logos, UI elements, and interactive graphics.",
        "Enhanced website aesthetics and user engagement.",
      ],
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education & Certifications",
  description:
    "I have acquired knowledge through various academic and professional training programs, equipping me with in-depth expertise in software engineering, UI/UX design, and modern web development practices.",
  items: [
    {
      institution: "ALX Software Engineering Program",
      degree: "Back-end Track",
      duration: "2023",
      highlights: [
        "Gained expertise in backend development using Django and Flask.",
        "Built scalable APIs and optimized database performance.",
      ],
    },
    {
      institution: "Qwassar Silicon Valley",
      degree: "Front-end Track",
      duration: "2022",
      highlights: [
        "Mastered front-end development with React and modern JavaScript frameworks.",
        "Created responsive and high-performing user interfaces.",
      ],
    },
    {
      institution: "LuTaVerse",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2022",
      highlights: [
        "Developed full-stack applications integrating frontend and backend technologies.",
        "Worked on real-world projects with agile methodologies.",
      ],
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Udacity",
      degree: "UI/UX Masterclass",
      duration: "2019",
    },
    {
      institution: "New Horizon Computer Institute",
      degree: "Diploma in Web Design",
      duration: "2018",
    },
    {
      institution: "New Horizon Computer Institute",
      degree: "Diploma in Graphic Design",
      duration: "2017",
    },
  ],
};

const skills = {
  title: "Technical Skills",
  description:
    "I have a strong foundation in both frontend and backend technologies, allowing me to build seamless, high-performing, and scalable web applications. My expertise includes modern programming languages, frameworks, and design tools.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5 - Semantic and SEO-friendly markup." },
    {
      icon: <FaCss3 />,
      name: "CSS3 - Modern styling with animations & transitions.",
    },
    {
      icon: <FaJs />,
      name: "JavaScript - ES6+ features and asynchronous programming.",
    },
    {
      icon: <FaPython />,
      name: "Python - Backend scripting, automation, and AI integration.",
    },
    {
      icon: <SiDjango />,
      name: "Django - Scalable and secure backend development.",
    },
    {
      icon: <SiFlask />,
      name: "Flask - Lightweight and flexible API creation.",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js - Server-side JavaScript with efficient performance.",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js - Optimized React framework for SEO and SSR.",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS - Utility-first approach to modern styling.",
    },
    {
      icon: <FaReact />,
      name: "React.js - Component-based architecture and state management.",
    },
    {
      icon: <FaFigma />,
      name: "Figma - UI/UX design, prototyping, and wireframing.",
    },
  ],
};

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-12"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="w-full min-h-[90vh]">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-auto p-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.company}
                          </h3>
                          <span className="text-accent">{item.duration}</span>

                          <div className=" items-center gap-3">
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center text-white/80 lg:text-left">
                              {item.position}
                            </h3>
                            <p className="text-white/60 mx-auto xl:mx-0">
                              {item.responsibilities}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <p>Your education details here...</p>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <p>Your skills details here...</p>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <p>Your about me details here...</p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
