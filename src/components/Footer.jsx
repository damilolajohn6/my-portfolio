import Link from "next/link";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-primary">
      <div className="container mx-auto px-6 xl:px-0 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/">
            <h2 className="text-2xl font-semibold text-white">
              Damilola <span className="text-accent">.</span>
            </h2>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              href="/resume"
              className="hover:text-accent transition-colors"
            >
              Resume
            </Link>
            <Link href="/work" className="hover:text-accent transition-colors">
              Work
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Socials */}
          <Socials
            containerStyles="flex gap-4"
            iconStyles="w-9 h-9 border border-white/10 rounded-full flex justify-center items-center text-white/50 text-sm hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
          />
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Damilola John. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
