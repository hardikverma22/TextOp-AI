import {motion} from "framer-motion";
import {container} from "@/constants/motion";
import {ReactNode} from "react";

const itemA = {
  hidden: {opacity: 0, y: -3},
  show: {
    opacity: 1,
    y: 0,
    transition: {duration: 1, type: "spring", bounce: 0.5},
  },
};

const PresentationText = ({
  icon,
  heading,
  text,
  subheading,
}: {
  icon: ReactNode;
  heading: string;
  text: string;
  subheading: string;
}) => {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.div variants={itemA} className="flex gap-4 items-center justify-center text-gray-900">
        {icon}
        <h1
          className="text-3xl text-gray-900 text-center
                       font-thin text tracking-wide font-Lilita"
        >
          {heading}
        </h1>
      </motion.div>

      <motion.p
        variants={itemA}
        className="text-lg text-center font-medium text-gray-900 tracking-wide pt-5"
      >
        {text}
      </motion.p>
      <motion.p
        variants={itemA}
        className="text-md text-center font-medium text-gray-500 tracking-wide pt-5"
      >
        {subheading}
      </motion.p>
    </motion.div>
  );
};

export default PresentationText;
