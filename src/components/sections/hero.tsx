"use client";

import Link from "next/link";
import { buttons, headings } from "../styles";
import { GoArrowDown } from "react-icons/go";
import WavingHand from "../ui/waving-hand";
import { motion } from "framer-motion";
import { containerVariants, childVariants } from "../animations";

const Hero = () => {
    return (
        <motion.section
            id="hero"
            className="min-h-screen w-full flex flex-col justify-center items-center relative"
            initial="hidden"
            whileInView="visible" // Triggers when the component comes into the viewport
            exit="hidden" // Optional: You can define exit animations if needed
            variants={containerVariants}
            viewport={{ once: false }} // Allows repeated triggering
        >
            <motion.h2
                className={`${headings.h2} absolute top-10 mx-auto`}
                variants={childVariants}
            >
                <span className="text-gray-500">
                    Hello <WavingHand />, I&apos;m{" "}
                </span>
                Rudra
            </motion.h2>
            <motion.h1 className={headings.h1} variants={childVariants}>
                Full Stack <span className="text-gray-500">Developer</span>
            </motion.h1>
            <motion.h1 className={headings.h1} variants={childVariants}>
                UI/UX <span className="text-gray-500">Designer</span>
            </motion.h1>
            <motion.div
                className="mt-5 flex justify-between items-center gap-5"
                variants={childVariants}
            >
                <Link href="#about" className={buttons.primary}>
                    About me
                </Link>
                <Link href="#contact" className={buttons.secondary}>
                    Hire me
                </Link>
            </motion.div>
            <Link
                href="#about"
                className="absolute bottom-10 mx-auto border-2 border-gray-500 rounded-full text-3xl px-1 py-2 text-gray-100 hover:border-gray-100 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200"
            >
                <GoArrowDown />
            </Link>
        </motion.section>
    );
};

export default Hero;
