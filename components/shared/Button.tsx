import {AiOutlineLoading3Quarters} from "@/constants/icon";
import {motion} from "framer-motion";
import {fadeIn} from "@/constants/motion";

type ButtonProps = {
  onBtnClick: () => void;
  isLoading: boolean;
  btnText: string;
  loadingBtntext: string;
};

const Button = ({onBtnClick, isLoading, btnText, loadingBtntext}: ButtonProps) => {
  return (
    <motion.button
      variants={fadeIn()}
      className="w-full
                bg-teal-500
                text-lg
                h-12
                rounded-lg
                font-medium
                tracking-wider
                hover:border-2
                border border-white
                flex justify-center items-center gap-5
                disabled:bg-gray-600"
      onClick={onBtnClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <AiOutlineLoading3Quarters className="animate-spin" />
          <span>{loadingBtntext}...</span>
        </>
      ) : (
        <span>{btnText}</span>
      )}
    </motion.button>
  );
};

export default Button;
