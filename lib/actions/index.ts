"use server"

import { prompts } from "@/constants";
import { chat, chatArray } from "@/lib/openai";

export default async function callAI(inputText: string, promptKey: keyof typeof prompts) {
    const promptCategory = prompts[promptKey];
    try {
        const generatedContent = promptKey == "extractKeywords" ? await chatArray(promptCategory, inputText) : await chat(promptCategory, inputText);
        return generatedContent;
    }
    catch (e: any) {
        console.log(e);
        return null;
    }
} 