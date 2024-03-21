"use client";
import {useState} from "react";
import {motion} from "framer-motion";

import {Button, PresentationText, Section, Summary, Textarea} from "@/components/shared";
import {apiErrorMessage, emptyWarningMessageForClassification} from "@/constants";
import {BiCategoryAlt} from "@/constants/icon";
import {container} from "@/constants/motion";

import callAI from "@/lib/actions";
import {dangerToast, warningToast} from "@/lib/customToast";

const ClassifyText = () => {
  const [text, setText] = useState("");
  const [classification, setClassification] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClassify = async () => {
    if (text == "") {
      warningToast(emptyWarningMessageForClassification);
      return;
    }

    setIsLoading(true);

    const data = await callAI(text, "classifyText");

    setIsLoading(false);

    if (data) setClassification(data.outputText as string);
    else dangerToast(apiErrorMessage);
  };

  return (
    <Section>
      <PresentationText
        heading="AI Text Classifier"
        icon={<BiCategoryAlt className="text-2xl" />}
        text="Revolutionize Your Text Classification with OpenAI"
        subheading="Paste in the text below and we will classify it for you"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full pt-5
                  lg:w-[50%]
                  flex flex-col gap-5"
      >
        {classification === "" && (
          <>
            <Textarea isLoading={isLoading} text={text} setText={setText} />
            <Button
              onBtnClick={handleClassify}
              isLoading={isLoading}
              btnText="Classify"
              loadingBtntext="Classifying..."
            />
          </>
        )}
        {classification !== "" && (
          <Summary
            summary={classification}
            setSummary={setClassification}
            btnText="Back to Classifier"
          />
        )}
      </motion.div>
    </Section>
  );
};

export default ClassifyText;
