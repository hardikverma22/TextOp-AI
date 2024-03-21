import React from "react";

const ResetButton = ({onClick, btnText}: {onClick: () => void; btnText: string}) => {
  return (
    <button
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
              disabled:bg-gray-600
              mt-5"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default ResetButton;
