"use client";
import React, { useState } from "react";
import { buttons, headings, inputs, links, text } from "../styles";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { IoCloudDoneOutline } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";
import emailjs from "emailjs-com"

const Contact = () => {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {
            name: formData.name.trim() === "" ? "Name is required." : "",
            email: !validateEmail(formData.email)
                ? "Invalid email address."
                : "",
            message:
                formData.message.trim() === "" ? "Message is required." : "",
        };

        setErrors(newErrors);
        return !newErrors.name && !newErrors.email && !newErrors.message;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID!
    const USER_ID = process.env.NEXT_PUBLIC_USER_ID!

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        if (validateForm()) {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("message", formData.message);
            
          emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, USER_ID).then((res) => {
                console.log("Email sent successfully!");
                console.log(res)
                setSent(true);
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            }).catch((err) => {
                console.error("Failed to send email.", err);
            })
         
        } else {
            console.log("Validation failed.");
        }
        setSending(false);
    };

    return (
        <section
            id="contact"
            className="w-full flex justify-center items-center gap-10 flex-wrap my-20"
        >
            <div className="min-w-[200px] w-full max-w-[400px] flex flex-col justify-center items-start gap-5">
                <h2 className={headings.h2}>Contact</h2>
                <p className={text.normal}>
                    Let&apos;s Work together,
                    <br />
                    There&apos;re multiple ways to connect with me.
                </p>
               
                <a
                    href="mailto:rudracode2004@gmail.com"
                    className={`${links.primary} flex items-center gap-2`}
                >
                    <MdAlternateEmail />
                    <span>Email</span>
                </a>
                <a
                    href="https://github.com/Rudra-Patel-code"
                    className={`${links.primary} flex items-center gap-2`}
                >
                    <FaGithub />
                    <span>GitHub</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/rudra-patel-code/"
                    className={`${links.primary} flex items-center gap-2`}
                >
                    <FiLinkedin />
                    <span>LinkedIn</span>
                </a>
            </div>
            {sending ? (
                <div className="min-w-[200px] max-w-[400px] w-full flex flex-col justify-center items-center">
                    <FaSpinner className="animate-spin" size={72} />
                </div>
            ) : sent ? (
                <div className="min-w-[200px] max-w-[400px] w-full flex flex-col justify-center items-center gap-5">
                    <IoCloudDoneOutline className="text-green-500" size={72} />
                    <h3 className={`${headings.h3} text-center`}>
                        Thank you for reaching out.
                        <br />
                        I&apos;ll get back to you soon.
                    </h3>
                </div>
            ) : (
                <form
                    method="post"
                    className="min-w-[200px] max-w-[400px] w-full flex flex-col justify-center gap-5"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className={inputs.normal}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className={inputs.normal}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                    )}

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={3}
                        required
                        className={inputs.textarea}
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && (
                        <p className="text-red-500">{errors.message}</p>
                    )}

                    <button type="submit" className={buttons.primary}>
                        Send
                    </button>
                </form>
            )}
        </section>
    );
};

export default Contact;
