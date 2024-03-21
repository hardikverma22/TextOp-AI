"use client";
import {motion} from "framer-motion";
import Link from "next/link";
const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      type: "spring",
    },
  },
};

const itemA = {
  hidden: {opacity: 0, y: -50},
  show: {opacity: 1, y: 0, transition: {duration: 0.5}},
};

const itemB = {
  hidden: {opacity: 0},
  show: {opacity: 1, transition: {duration: 0.5}},
};

const itemC = (isNegative: boolean) => ({
  hidden: {opacity: 0, x: 100 * (isNegative ? -1 : 1)},
  show: {opacity: 1, x: 0, transition: {duration: 0.5}},
});

const LandingPage = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center
                    px-10 py-10 max-w-lg md:h-[calc(100vh-3rem)] md:max-w-5xl mx-auto"
    >
      <motion.h1
        variants={itemA}
        className="md:text-6xl text-4xl leading-[4rem] font-extrabold
                    text-primary text-center"
      >
        Unleash the Power of Words with{" "}
        <span
          className="md:text-7xl text-5xl font-extrabold
                    bg-gradient-to-r from-teal-600 via-cyan-400 to-teal-400
                    text-transparent bg-clip-text"
        >
          Textop.AI
        </span>
      </motion.h1>

      <motion.h2 variants={itemB} className="mt-5 text-xl font-bold text-gray-500 text-center">
        Extract, Analyze, Summarize, and Classify for Better Content Creation!
      </motion.h2>
      <motion.p
        variants={itemB}
        className="mt-10 max-w-lg md:max-w-3xl text-lg font-normal tracking-wider leading-7 text-gray-600 text-center"
      >
        Textop.AI is the ultimate language tool for content creators. With advanced features like
        keyword extraction, sentiment analysis, text summarization, and text classification, our
        platform helps you craft more effective and impactful messaging. Say goodbye to
        time-consuming manual analysis and hello to smarter, more efficient content creation with
        Chat GPT.
      </motion.p>

      <motion.div
        variants={itemB}
        className="flex gap-5 justify-center items-center mt-10 flex-col md:flex-row"
      >
        <motion.div
          variants={itemC(true)}
          className="flex flex-col justify-center items-center gap-5"
        >
          <span
            className="uppercase
                      text-xl text-teal-800
                      font-Lilita tracking-wider"
          >
            Categorization
          </span>
          <div className="flex gap-3 flex-col md:flex-row">
            <Link
              href="/sentiment-analysis"
              className="cursor-pointer
             bg-teal-400 text-lg font-Josefin tracking-wider text-white text-center
             rounded-md p-2
            hover:bg-teal-700/80 duration-500 hover:shadow-sm"
            >
              Sentiment Analysis
            </Link>
            <Link
              href="/classify-text"
              className="cursor-pointer
                     bg-teal-400 text-lg font-Josefin tracking-wider text-white text-center
                      rounded-md p-2
                      hover:bg-teal-700/80 duration-500 hover:shadow-sm"
            >
              Classify Text
            </Link>
          </div>
        </motion.div>
        <div className="md:h-32 md:w-1 h-1 w-36 rounded-lg bg-gray-400" />
        <motion.div
          variants={itemC(false)}
          className="flex flex-col justify-center items-center gap-5"
        >
          <span
            className="uppercase
                      text-xl text-teal-800
                      font-Lilita tracking-wider"
          >
            Distillation
          </span>
          <div className="flex gap-3 flex-col md:flex-row">
            <Link
              href="/extract-keywords"
              className="cursor-pointer
                     bg-teal-400 text-lg font-Josefin tracking-wider text-white text-center
                      rounded-md p-2
                      hover:bg-teal-700/80 duration-500 hover:shadow-sm"
            >
              Extract Keywords
            </Link>
            <Link
              href="/summarize-text"
              className="cursor-pointer
                     bg-teal-400 text-lg font-Josefin tracking-wider text-white text-center
                      rounded-md p-2
                      hover:bg-teal-700/80 duration-500 hover:shadow-sm"
            >
              Summarize Text
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
