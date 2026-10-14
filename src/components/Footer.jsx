import React from "react";
import { socialLinks, profile } from "../constants";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const iconMap = {
  FaGithub: <FaGithub size={22} />,
  FaLinkedin: <FaLinkedin size={22} />,
  FaEnvelope: <FaEnvelope size={22} />,
};

const Footer = () => {
  return (
    <footer className="w-full bg-primary py-8 sm:px-16 px-6 relative z-10 border-t border-t-[#211e35]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-secondary text-[14px] text-center md:text-left leading-relaxed">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved. <br />
          Built with React, Three.js & Tailwind CSS.
        </p>

        <div className="flex gap-6 items-center">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-[#915eff] transition-colors p-2 rounded-full hover:bg-tertiary"
              aria-label={social.name}
            >
              {iconMap[social.icon] || social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
