"use client";

import { styles } from "@/app/styles";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionWrapper from "../Container";
import TextAnimation from "../TextAnim/TextAnimation";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const { name, email, subject, message } = formData;
  const formRef = useRef<HTMLFormElement>(null);

  const formValidation = () => {
    if (name === "" || email === "" || subject === "" || message === "") {
      toast.error("All input fields are required", {
        position: "bottom-right",
        autoClose: 4000,
        theme: "dark",
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formValidation();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7n9u8yx",
        "template_awrtm5f",
        formRef.current!,
        "9V34m0Jj5Yom1MVFG"
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent successfully & wait for response", {
          position: "bottom-right",
          autoClose: 5000,
          theme: "dark",
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch(() => {
        toast.error("Failed to send the Email, please try again", {
          position: "bottom-right",
          autoClose: 4000,
          theme: "dark",
          pauseOnHover: true,
          draggable: true,
        });
      });

    clearForm();
  };

  return (
    <div className={`${styles.paddingY}`}>
      <SectionWrapper>
        <div className=" text-center">
          <p className={`${styles.sectionSubText}`}>
            We would love to learn about your project.
          </p>
          <TextAnimation
            text="LET'S CHAT!"
            classes={`${styles.sectionHeadText}`}
          />
        </div>

        <main className="contact-main">
          <div className="text-center flex flex-col items-center mt-5">
            <form onSubmit={sendEmail} ref={formRef}>
              <div className="md:flex md:items-center md:space-x-4 md:space-y-0 space-y-4 my-2">
                <input
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium lg:w-[300px] w-full"
                  id="outlined-basic"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium lg:w-[300px] w-full"
                  id="outlined-basic"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <input
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium my-2"
                  id="outlined-basic"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium my-2"
                  id="outlined-basic"
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-4"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </main>
      </SectionWrapper>
      <ToastContainer />
    </div>
  );
};

export default Contact;
