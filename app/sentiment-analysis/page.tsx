"use client";
import {BiCategoryAlt} from "@/constants/icon";
import {
  apiErrorMessage,
  emptyWarningMessageForSentimentAnalysis,
  wrongInputForSentimentAnalysis,
} from "@/constants";

import {motion} from "framer-motion";

import {container} from "@/constants/motion";
import {useState} from "react";
import Section from "@/components/shared/Section";
import PresentationText from "@/components/shared/PresentationText";
import Textarea from "@/components/shared/Textarea";
import Button from "@/components/shared/Button";
import Summary from "@/components/shared/Summary";
import {dangerToast, warningToast} from "@/lib/customToast";
import callAI from "@/lib/actions";

const SentimentAnalysis = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalysis = async () => {
    if (text == "") {
      warningToast(emptyWarningMessageForSentimentAnalysis);
      return;
    }

    setIsLoading(true);

    const data = await callAI(text, "sentimentAnalysis");

    setIsLoading(false);

    if (data) setSentiment(data.outputText as string);
    else dangerToast(apiErrorMessage);
  };

  return (
    <Section>
      <PresentationText
        heading="AI Sentiment Analyzer"
        icon={<BiCategoryAlt className="text-2xl" />}
        text="Understand the Sentiment of Your text with OpenAI-Powered Sentiment Analysis"
        subheading="Paste in the text below and we will analyze the sentiment for you"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full pt-5
              lg:w-[50%]
              flex flex-col gap-5"
      >
        {sentiment === "" && (
          <>
            <Textarea isLoading={isLoading} text={text} setText={setText} />
            <Button
              onBtnClick={handleAnalysis}
              isLoading={isLoading}
              btnText="Analyze"
              loadingBtntext="Analyzing..."
            />
          </>
        )}
        {sentiment !== "" && (
          <Summary
            summary={sentiment}
            setSummary={setSentiment}
            btnText="Back to Sentiment Analyzer"
          />
        )}
      </motion.div>
    </Section>
  );
};

export default SentimentAnalysis;
