import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { FaCertificate, FaAward, FaExternalLinkAlt } from "react-icons/fa";

const CertificationCard = ({ index, title, issuer, grade, description, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.4, 0.75)}
    className="bg-tertiary p-7 rounded-2xl w-full md:w-[400px] flex flex-col justify-between border border-[#211e35] shadow-card hover:border-[#915eff]/50 transition-colors"
  >
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-black-200 flex items-center justify-center border border-[#3e366d] text-[#915eff]">
          <FaCertificate size={26} />
        </div>
        {grade && (
          <span className="flex items-center gap-1.5 bg-[#00cea8]/15 text-[#00cea8] border border-[#00cea8]/30 px-3 py-1 rounded-full text-[14px] font-semibold">
            <FaAward className="text-sm" /> {grade}
          </span>
        )}
      </div>

      <h3 className="text-white font-bold text-[23px] leading-snug mb-2">{title}</h3>
      <p className="text-[#915eff] text-[17px] font-semibold mb-3">{issuer}</p>
      {description && (
        <p className="text-secondary text-[17px] leading-relaxed mb-4">{description}</p>
      )}
    </div>

    {link && (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-[16px] text-white hover:text-[#915eff] transition-colors mt-3 font-medium"
      >
        <FaExternalLinkAlt /> View Credential
      </a>
    )}
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-heading">Continuous Learning</p>
        <h2 className="section-heading">Certificates & Workshops.</h2>
      </motion.div>

      <div className="mt-14 flex flex-wrap gap-7">
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
