import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { FaGithub, FaExternalLinkAlt, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ index, name, tagline, stack, points, links, featured }) => {
  const isFeatured = !!featured;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)} className="w-full">
      <Tilt
        options={{ max: 25, scale: 1.01, speed: 450 }}
        className={`bg-tertiary p-6 rounded-2xl w-full border ${
          isFeatured ? "border-[#915eff]/50 shadow-lg shadow-[#915eff]/10" : "border-[#211e35]"
        } flex flex-col justify-between`}
      >
        <div>
          <div className="flex justify-between items-start gap-4 mb-2 flex-wrap">
            <h3 className="text-white font-bold text-[26px] tracking-wide">{name}</h3>
            {isFeatured && (
              <span className="bg-[#915eff] text-white text-[14px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                Featured Store
              </span>
            )}
          </div>
          <p className="text-[#00cea8] text-[17px] font-medium mb-4">{tagline}</p>

          <ul className="list-disc ml-5 space-y-2 mb-6">
            {points.map((point, idx) => (
              <li key={idx} className="text-white-100 text-[17px] leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {stack.map((tag, idx) => (
              <span
                key={idx}
                className="text-[14px] bg-black-200 px-3 py-1.5 rounded-md text-secondary border border-[#211e35] font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-3 border-t border-[#211e35]">
            {links.isCurrent || name.toLowerCase().includes("portfolio") ? (
              <span className="inline-flex items-center gap-2 text-[16px] bg-[#915eff] px-5 py-2.5 rounded-lg font-medium text-white shadow-sm select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                You are currently here
              </span>
            ) : links.live ? (
              <a
                href={links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[16px] bg-[#915eff] hover:bg-[#804dee] px-5 py-2.5 rounded-lg font-medium text-white transition-colors shadow-sm"
              >
                <FaGlobe className="text-sm" /> Visit Live Site
              </a>
            ) : null}
            {links.source && (
              <a
                href={links.source}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[16px] bg-black-100 hover:bg-black-200 px-5 py-2.5 rounded-lg font-medium text-white transition-colors border border-[#3e366d]"
              >
                <FaGithub /> Source Code
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-heading">My Work</p>
        <h2 className="section-heading">Projects & Storefronts.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[20px] max-w-3xl leading-[34px]"
        >
          A selection of live e-commerce storefronts, client platforms, and web applications I have
          engineered. Each project illustrates my commitment to clean code, responsive design,
          conversion-focused UI/UX, and robust technology integration.
        </motion.p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
