
import Instructor from "@instructor-ai/instructor";
import OpenAI from "openai"
import { z } from "zod"

const Schema = z.object({
    outputText: z.string()
})

const ArraySchema = z.object({
    outputText: z.array(z.string())
})

const oai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY ?? undefined,
})

const client = Instructor({
    client: oai,
    mode: "TOOLS"
});

export const chat = async (prompt: string, inputText: string) => {
    const output = await client.chat.completions.create({
        messages: [{ role: "system", content: prompt }, {
            role: 'user',
            content: inputText
        }],
        model: "gpt-3.5-turbo",
        response_model: {
            schema: Schema,
            name: "User"
        }
    })

    return output;
}

export const chatArray = async (prompt: string, inputText: string) => {
    const output = await client.chat.completions.create({
        messages: [{ role: "system", content: prompt }, {
            role: 'user',
            content: inputText
        }],
        model: "gpt-3.5-turbo",
        response_model: {
            schema: ArraySchema,
            name: "User"
        }
    })

    return output;
}