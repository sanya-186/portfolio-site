import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { profile, socialLinks } from "../constants";
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");
    setStatusType("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || serviceId === "your_service_id_here" || !templateId || templateId === "your_template_id_here") {
      setLoading(false);
      setStatusType("error");
      setStatusMsg(`EmailJS is not configured yet. Please reach out directly to ${profile.email} or via LinkedIn below!`);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          setStatusType("success");
          setStatusMsg("Thank you! I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          const errorDetail = error?.text || error?.message || "";
          setStatusType("error");
          setStatusMsg(errorDetail ? `Failed (${errorDetail}). Please check EmailJS settings or reach out to ${profile.email}.` : `Something went wrong. Please reach out directly to ${profile.email} or LinkedIn.`);
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative z-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl border border-[#211e35]"
      >
        <p className="section-sub-heading">Get in touch</p>
        <h3 className="section-heading">Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-[#211e35] focus:border-[#915eff] transition-colors font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-[#211e35] focus:border-[#915eff] transition-colors font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Message</span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project, questions, or opportunity..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-[#211e35] focus:border-[#915eff] transition-colors font-medium resize-none"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-[#915eff] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#915eff]/20 hover:bg-[#804dee] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </button>

          {statusMsg && (
            <div className={`flex items-center gap-2 mt-2 p-3 rounded-lg bg-black-200 border border-[#211e35] ${statusType === "success" ? "text-green-400" : "text-amber-400"}`}>
              {statusType === "success" ? <FaCheckCircle /> : <FaExclamationTriangle />}
              <p className="text-[14px]">{statusMsg}</p>
            </div>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex items-center justify-center bg-black-100/50 rounded-2xl border border-[#211e35] p-8"
      >
        <div className="w-full flex flex-col items-center justify-center text-center gap-6">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#915eff] to-[#00cea8] flex items-center justify-center shadow-xl shadow-[#915eff]/20">
            <FaPaperPlane className="text-white text-4xl" />
          </div>
          <div>
            <h4 className="text-white text-[26px] font-bold">Let's Connect</h4>
            <p className="text-secondary mt-2 max-w-sm text-[15px] leading-relaxed">
              Have an e-commerce storefront in mind, need a frontend developer, or just want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/sanya1911"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 bg-tertiary hover:bg-[#915eff] text-white px-6 py-3 rounded-xl border border-[#3e366d] transition-colors text-[16px] font-medium"
            >
              <FaGithub size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sanya-sachdeva-476496316?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-3 rounded-xl transition-colors text-[16px] font-medium shadow-md"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-3 text-[#dfd9ff] text-[20px] mt-4 select-text">
            <FaEnvelope className="text-[#915eff] text-2xl" />
            <span className="font-medium">{profile.email}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
