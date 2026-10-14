import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { profile } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaServer } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode size={40} className="text-[#915eff]" />,
    description: "Building responsive, modern, and accessible web interfaces using React.js, Next.js, and Tailwind CSS.",
  },
  {
    title: "E-Commerce & Shopify",
    icon: <FaShoppingCart size={40} className="text-[#00cea8]" />,
    description: "Custom Shopify theme development, high-converting product pages, storefront UI, and seamless checkout UX.",
  },
  {
    title: "UI/UX & Performance",
    icon: <FaMobileAlt size={40} className="text-[#ff9900]" />,
    description: "Creating fluid, intuitive digital experiences with fast load times and pixel-perfect design across all devices.",
  },
  {
    title: "Backend & Integrations",
    icon: <FaServer size={40} className="text-[#61dafb]" />,
    description: "Integrating robust REST APIs, authentication, relational/NoSQL databases, and analytical dashboards.",
  },
];

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <div className="w-16 h-16 rounded-full bg-black-200 flex items-center justify-center border border-[#211e35]">
          {icon}
        </div>
        <h3 className="text-white text-[20px] font-bold text-center mt-2">{title}</h3>
        <p className="text-secondary text-[14px] text-center leading-relaxed">{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-heading">About Me</p>
        <h2 className="section-heading">Introduction.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#dfd9ff] text-[24px] max-w-3xl leading-[40px] font-normal"
      >
        {profile.summary}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
