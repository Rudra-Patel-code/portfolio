"use client";

import { skills } from "../constants";
import { buttons, headings } from "../styles";
import { motion } from "framer-motion";
import { containerVariants, childVariants, fadeVariants } from "../animations";
import { Skill } from "../interfaces";

const Skills = () => {
    return (
        <motion.section
            id="skills"
            className="max-w-[768px] mx-auto my-20 flex flex-col justify-center items-center gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.h2
                className={headings.h2}
                variants={childVariants}
                viewport={{ once: true, amount: 0.1 }}
            >
                Skills
            </motion.h2>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {skills.map((skill: Skill) => (
                    <motion.div
                        key={skill.id}
                        className={
                            skill.highlight
                                ? buttons.primary
                                : buttons.secondary
                        }
                        variants={fadeVariants}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {skill.name}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;
