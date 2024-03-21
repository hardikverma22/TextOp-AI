const apiErrorMessage = "I am having trouble connecting to my AI sister, please try again in sometime!";
const emptyWarningMessage = "I would need text to extract Keywords!";
const copyMessage = "Copied to clipboard!";


// summary
const wrongInputForSummary = "OpenAi was not able to summarize your text this time, Pelase try again in sometime";
const emptyWarningMessageForSummary = "I would need text to Summarize for you.";
const emptyWarningMessageForClassification = "I would need text to Classify for you.";
const emptyWarningMessageForSentimentAnalysis = "I would need text to analyze sentiment for you.";
const wrongInputForClassification = "OpenAi was not able to classify your text this time, Pelase try again in sometime";
const wrongInputForSentimentAnalysis = "OpenAi was not able to analyze the sentiment for your text, Pelase try again in sometime";

const tabs = [
    {
        title: "Sentiment Analysis",
        link: "/sentiment-analysis",
    },
    {
        title: "Classify Text",
        link: "/classify-text",
    },
    {
        title: "Extract Keywords",
        link: "/extract-keywords",
    },
    {
        title: "Summarize Text",
        link: "/summarize-text",
    },
];

const prompts = {
    sentimentAnalysis: "Analyze the sentiment of the following text: ",
    classifyText: "Classify this text and Please provide the predicted classification label for this text: ",
    extractKeywords: "Extract keywords from the following text. Make the first letter of every word uppercase and separate with commas: ",
    summarizeText: "Summarize the following text into few words.To ensure accuracy, please make sure to include the most important information and ideas from the original text. Also Format the text: "
}

export {
    apiErrorMessage,
    emptyWarningMessage,
    copyMessage,
    wrongInputForSummary,
    emptyWarningMessageForSummary,
    emptyWarningMessageForClassification,
    wrongInputForClassification,
    emptyWarningMessageForSentimentAnalysis,
    wrongInputForSentimentAnalysis,
    tabs,
    prompts
}