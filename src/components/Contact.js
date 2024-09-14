import React, { useState, useRef } from "react";
import "font-awesome/css/font-awesome.min.css";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import NavBar from "./NavBar";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_td0bb5j",
        "template_vi15bsl",
        form.current,
        "1uSGp7zwYM4uH21Yk"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitting(false);
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
          // Optionally, set an error state here
        }
      );
  };

  return (
    <motion.div className="flex flex-col items-center min-h-screen relative bg-backgroundBlue p-4">
      {/* Logo */}
      <motion.div className="w-full max-w-md mb-8">
        <Logo />
      </motion.div>
      {/* Form */}
      <motion.div
        className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl p-4 sm:p-8 relative sm:top-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-textBlue text-center">
          Get in Touch
        </h2>
        {isSubmitted ? (
          <p className="text-green-400 text-center">
            Thank you for your message. I'll be in touch soon!
          </p>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your Name"
                name="from_name"
                className="w-full px-3 py-2 bg-white bg-opacity-20 border border-textBlue rounded-md focus:outline-none focus:ring-2 focus:ring-textBlue text-textBlue placeholder-textBlue placeholder-opacity-70"
                required
              />
            </div>
            <div className="mb-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your Email"
                name="user_email"
                className="w-full px-3 py-2 bg-white bg-opacity-20 border border-textBlue rounded-md focus:outline-none focus:ring-2 focus:ring-textBlue text-textBlue placeholder-textBlue placeholder-opacity-70"
                required
              />
            </div>
            <div className="mb-4">
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Your Message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 bg-white bg-opacity-20 border border-textBlue rounded-md focus:outline-none focus:ring-2 focus:ring-textBlue text-textBlue placeholder-textBlue placeholder-opacity-70"
                required
              ></motion.textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-textBlue text-backgroundBlue py-2 px-4 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-textBlue focus:ring-opacity-50 flex items-center justify-center"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2" size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        )}
      </motion.div>
      {/* NavBar */}
      <motion.div className="absolute bottom-6 sm:bottom-24">
        <NavBar />
      </motion.div>
    </motion.div>
  );
}
