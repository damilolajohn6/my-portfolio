import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, path: "https://github.com/damilolajohn6" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/esandamilola" },
  { icon: <FaTwitter />, path: "https://x.com/DailysFlash1" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
