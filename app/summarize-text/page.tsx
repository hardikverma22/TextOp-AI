"use client";
import {useState} from "react";

import {MdSummarize} from "@/constants/icon";
import {apiErrorMessage, emptyWarningMessageForSummary} from "@/constants";
import {dangerToast, warningToast} from "@/lib/customToast";

import {Button, PresentationText, Section, Summary, Textarea} from "@/components/shared";

import {motion} from "framer-motion";
import {container} from "@/constants/motion";
import callAI from "@/lib/actions";

const SummarizeText = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    if (text == "") {
      warningToast(emptyWarningMessageForSummary);
      return;
    }

    setIsLoading(true);

    const data = await callAI(text, "summarizeText");

    setIsLoading(false);

    if (data) setSummary(data.outputText as string);
    else dangerToast(apiErrorMessage);
  };

  return (
    <Section>
      <PresentationText
        icon={<MdSummarize className="text-4xl font-extrabold" />}
        heading="AI Text Summarizer"
        text="Get to the essence of any text with our AI-powered text summarizer."
        subheading="Paste in the text below and we will summarize it for you"
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full pt-5
                  lg:w-[50%]
                  flex flex-col gap-5"
      >
        {summary === "" && (
          <>
            <Textarea isLoading={isLoading} text={text} setText={setText} />
            <Button
              onBtnClick={handleSummarize}
              isLoading={isLoading}
              btnText="Summarize"
              loadingBtntext="Summarizing..."
            />
          </>
        )}
        {summary !== "" && (
          <Summary summary={summary} setSummary={setSummary} btnText="Back to Summarizer" />
        )}
      </motion.div>
    </Section>
  );
};

export default SummarizeText;
