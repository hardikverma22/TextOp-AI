"use client";
import {useState} from "react";
import {VscSymbolKeyword} from "@/constants/icon";

import {apiErrorMessage, emptyWarningMessage} from "@/constants";
import {dangerToast, warningToast} from "@/lib/customToast";

import {motion} from "framer-motion";
import {Button, PresentationText, Section, Textarea} from "@/components/shared";
import {container} from "@/constants/motion";
import Keywords from "@/components/Keywords";
import callAI from "@/lib/actions";

const ExtarctKeywords = () => {
  const [text, setText] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleExtractKeywords = async () => {
    if (text == "") {
      warningToast(emptyWarningMessage);
      return;
    }

    setIsLoading(true);

    const data = await callAI(text, "extractKeywords");

    setIsLoading(false);

    if (data && Array.isArray(data.outputText)) setKeywords(data.outputText);
    else dangerToast(apiErrorMessage);
  };

  return (
    <>
      <Section>
        <PresentationText
          icon={<VscSymbolKeyword className="text-3xl font-extrabold" />}
          heading="AI Keyword Extractor"
          subheading="Paste in the text below and we will extract the keywords for you"
          text="Catalyze Your Text Analysis: Streamline Keyword Extraction with OpenAI"
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full 
                  lg:w-[50%]
                  flex flex-col gap-5 mt-5"
        >
          {keywords && keywords.length == 0 && (
            <>
              <Textarea isLoading={isLoading} text={text} setText={setText} />
              <Button
                onBtnClick={handleExtractKeywords}
                btnText="Extract Keywords"
                loadingBtntext="Extracting"
                isLoading={isLoading}
              />
            </>
          )}

          {keywords && keywords.length != 0 && (
            <>
              <Keywords keywords={keywords} setKeywords={setKeywords} />
            </>
          )}
        </motion.div>
      </Section>
    </>
  );
};

export default ExtarctKeywords;
