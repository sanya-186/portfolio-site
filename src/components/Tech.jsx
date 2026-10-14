import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

// Icons mapping
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiShopify,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiGoogleanalytics,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaLock,
  FaPaintBrush,
  FaShoppingBag,
  FaStore,
  FaCreditCard,
  FaChartBar,
  FaFileExcel,
  FaCogs,
  FaChartLine,
  FaMobileAlt,
  FaCode,
} from "react-icons/fa";

const getIcon = (skillName) => {
  const map = {
    HTML5: <FaHtml5 className="text-[#E34F26]" />,
    CSS3: <FaCss3Alt className="text-[#1572B6]" />,
    JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
    "React.js": <SiReact className="text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#38BDF8]" />,
    "Responsive Design": <FaMobileAlt className="text-[#00CEA8]" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    "Express.js": <SiExpress className="text-white" />,
    "REST APIs": <FaServer className="text-[#61DAFB]" />,
    "Authentication and API Integration": <FaLock className="text-[#FF9900]" />,
    PostgreSQL: <SiPostgresql className="text-[#4169E1]" />,
    MongoDB: <SiMongodb className="text-[#47A248]" />,
    MySQL: <SiMysql className="text-[#4479A1]" />,
    Firebase: <SiFirebase className="text-[#FFCA28]" />,
    Shopify: <SiShopify className="text-[#95BF47]" />,
    "Theme customization": <FaPaintBrush className="text-[#EC4899]" />,
    "Product pages": <FaShoppingBag className="text-[#8B5CF6]" />,
    "Storefront UI": <FaStore className="text-[#38BDF8]" />,
    "Checkout UX": <FaCreditCard className="text-[#10B981]" />,
    Git: <SiGit className="text-[#F05032]" />,
    GitHub: <SiGithub className="text-white" />,
    Figma: <SiFigma className="text-[#F24E1E]" />,
    Vercel: <SiVercel className="text-white" />,
    "Google Analytics": <SiGoogleanalytics className="text-[#E37400]" />,
    "Power BI": <FaChartBar className="text-[#F2C811]" />,
    Excel: <FaFileExcel className="text-[#217346]" />,
    "Dashboard automation": <FaCogs className="text-[#A855F7]" />,
    "Data reporting": <FaChartLine className="text-[#3B82F6]" />,
  };

  return map[skillName] || <FaCode className="text-white" />;
};

const TechCategory = ({ title, items, index }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.75)} className="w-full">
    <h3 className="text-white text-[28px] font-semibold mb-6 border-b border-[#211e35] pb-2 flex items-center gap-3">
      <span className="w-3.5 h-3.5 rounded-full bg-[#915eff]" />
      {title}
    </h3>
    <div className="flex flex-wrap gap-[18px]">
      {items.map((item, idx) => (
        <motion.div
          key={item}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: idx * 0.08,
          }}
          className="flex items-center gap-3.5 bg-tertiary px-6 py-3 rounded-full border border-[#211e35] hover:border-[#915eff] transition-colors shadow-sm"
        >
          <div className="text-[26px]">{getIcon(item)}</div>
          <span className="text-secondary text-[19px] font-medium">{item}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-heading">My Skills</p>
        <h2 className="section-heading">Technologies.</h2>
      </motion.div>

      <div className="mt-14 flex flex-col gap-10">
        {skillCategories.map((category, index) => (
          <TechCategory key={category.title} index={index} {...category} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
