import useCopyToClipBoard from "@/hooks/useCopyToClipBoard";
import {Dispatch, SetStateAction} from "react";
import ResetButton from "@/components/shared/ResetButton";
import CopyClipboard from "@/components/shared/CopyToClipboard";

type Summaryprops = {
  summary: string;
  setSummary: Dispatch<SetStateAction<string>>;
  btnText: string;
};

const Summary = ({summary, setSummary, btnText}: Summaryprops) => {
  const {copyToClipboard} = useCopyToClipBoard();

  return (
    <>
      <div className="relative">
        <CopyClipboard onCopy={() => copyToClipboard(summary)} />
        <p
          className="text-gray-900 border-2 border-gray-300
                        p-10 rounded-lg bg-teal-100 font-medium text-lg shadow-lg"
        >
          {summary}
        </p>
        <ResetButton btnText={btnText} onClick={() => setSummary("")} />
      </div>
    </>
  );
};

export default Summary;
