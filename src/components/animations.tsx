export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

export const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const fadeVariants = {
    hidden:  {opacity: 0},
    visible: { opacity: 1,  transition: { duration: 0.8 } },
}
