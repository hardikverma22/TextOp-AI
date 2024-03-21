const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            type: "spring",
        },
    },
};

const fadeIn = (y = 20, duration = 1, bounce = 0.4) => ({
    hidden: { opacity: 0, y: y },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", duration: duration, bounce: bounce },
    },
});

const fadeInX = () => ({
    hidden: { opacity: 0, x: -200 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, type: "spring", bounce: 0.3 },
    },
});

export {
    container,
    fadeIn,
    fadeInX
}