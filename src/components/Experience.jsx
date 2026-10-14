import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiences, education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FaBriefcase, FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";

const TimelineCard = ({ item }) => {
  const isWork = item.category === "work";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        border: isWork ? "1px solid #3e366d" : "1px solid #1e3a5f",
      }}
      contentArrowStyle={{ borderRight: isWork ? "7px solid #3e366d" : "7px solid #1e3a5f" }}
      date={item.date}
      iconStyle={{
        background: isWork ? "#915eff" : "#00cea8",
        color: "#fff",
      }}
      icon={isWork ? <FaBriefcase /> : <FaGraduationCap />}
    >
      <div>
        <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
          <h3 className="text-white text-[26px] font-bold">{item.title}</h3>
          <span
            className={`text-[12px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
              isWork
                ? "bg-[#915eff]/20 text-[#915eff] border border-[#915eff]/40"
                : "bg-[#00cea8]/20 text-[#00cea8] border border-[#00cea8]/40"
            }`}
          >
            {isWork ? "Work Experience" : "Education"}
          </span>
        </div>

        <p
          className={`text-[20px] font-bold ${isWork ? "text-[#915eff]" : "text-[#00cea8]"}`}
          style={{ margin: 0 }}
        >
          {isWork ? item.company_name : item.institution}{" "}
          <span className="text-secondary text-[15px] font-normal">({item.location})</span>
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {item.points.map((point, index) => (
          <li
            key={`timeline-point-${index}`}
            className="text-white-100 text-[16px] pl-1 tracking-wider leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>

      {isWork && item.projectsWorked && item.projectsWorked.length > 0 && (
        <div className="mt-5 pt-4 border-t border-[#2e2854]">
          <p className="text-secondary text-[14px] font-medium uppercase tracking-wider mb-3">
            Live Projects Worked On:
          </p>
          <div className="flex flex-wrap gap-3">
            {item.projectsWorked.map((proj) => (
              <a
                key={proj.name}
                href={proj.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[15px] bg-black-200 hover:bg-[#915eff] text-white px-4 py-2.5 rounded-lg border border-[#3e366d] transition-colors font-medium"
              >
                <span>{proj.name}</span>
                <FaExternalLinkAlt className="text-[12px]" />
              </a>
            ))}
          </div>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [filter, setFilter] = useState("all");

  // Education first, then work experience
  const combinedItems = [
    ...education,
    ...experiences,
  ];

  const filteredItems =
    filter === "all"
      ? combinedItems
      : combinedItems.filter((item) => item.category === filter);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-heading">Career Journey</p>
        <h2 className="section-heading">Experience & Education.</h2>
      </motion.div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
            filter === "all"
              ? "bg-[#915eff] text-white shadow-md shadow-[#915eff]/30"
              : "bg-tertiary text-secondary hover:text-white border border-[#211e35]"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("work")}
          className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-colors flex items-center gap-2 ${
            filter === "work"
              ? "bg-[#915eff] text-white shadow-md shadow-[#915eff]/30"
              : "bg-tertiary text-secondary hover:text-white border border-[#211e35]"
          }`}
        >
          <FaBriefcase className="text-xs" /> Work Experience
        </button>
        <button
          onClick={() => setFilter("education")}
          className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-colors flex items-center gap-2 ${
            filter === "education"
              ? "bg-[#00cea8] text-black font-semibold shadow-md shadow-[#00cea8]/30"
              : "bg-tertiary text-secondary hover:text-white border border-[#211e35]"
          }`}
        >
          <FaGraduationCap className="text-xs" /> Education
        </button>
      </div>

      <div className="mt-12 flex flex-col">
        <VerticalTimeline>
          {filteredItems.map((item, index) => (
            <TimelineCard key={`timeline-${item.category}-${index}`} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
