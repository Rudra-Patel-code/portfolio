"use client";

import { headings } from "../styles";
// import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, childVariants } from "../animations";
import { TracingBeam } from "../ui/Tracing-Beam";
import { experience } from "../constants";
import clsx from "clsx";
import { ExpCard } from "../ui/ExpCard";

const Experience = () => {
    return (
        <motion.section
            id="experience"
            className="w-full flex justify-center flex-col items-center gap-10 flex-wrap my-20 pt-36"
            initial="hidden"
            whileInView="visible"
            exit={"hidden"}
            viewport={{ once: false, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.div
                className="max-w-[480px] flex flex-col justify-center items-center gap-5"
                variants={childVariants}
                viewport={{ once: true, amount: 0.1 }}
            >
                <h2 className={clsx(headings.h2, "mb-16")}>Experience</h2>
            </motion.div>

            <div className="">
                <TracingBeam className="px-10">
                    <motion.div className="flex gap-8 justify-center flex-col w-full">
                        {experience.map((exp, i) => (
                            <ExpCard exp={exp} key={i} />
                        ))}
                    </motion.div>
                </TracingBeam>
            </div>
        </motion.section>
    );
};

export default Experience;
