import {FiCopy} from "@/constants/icon";

import useCopyToClipBoard from "@/hooks/useCopyToClipBoard";
import {ResetButton, CopyClipboard} from "@/components/shared";
import {Dispatch, SetStateAction} from "react";

const Keywords = ({
  keywords,
  setKeywords,
}: {
  keywords: string[];
  setKeywords: Dispatch<SetStateAction<string[]>>;
}) => {
  const {copyToClipboard} = useCopyToClipBoard();

  return (
    <div>
      <div
        className="bg-teal-100
                            py-16
                            px-5
                            text-teal-950
                            font-bold
                            flex flex-wrap gap-2
                            rounded-md
                            relative"
      >
        <CopyClipboard onCopy={() => copyToClipboard(keywords.join(" | "))} />
        {keywords?.map((keyword, index) => (
          <div
            key={`${index}-${keyword}`}
            className="bg-teal-600 text-white 
                    p-2 
                    rounded-md
                    hover:scale-105 duration-300
                    flex gap-5 justify-center items-center group
                    cursor-pointer"
            title="Click to copy"
            onClick={() => copyToClipboard(keyword)}
          >
            <span>{keyword}</span>
            <FiCopy className="hidden group-hover:block" />
          </div>
        ))}
      </div>
      <ResetButton btnText="Back to Key Extractor" onClick={() => setKeywords([])} />
    </div>
  );
};

export default Keywords;
