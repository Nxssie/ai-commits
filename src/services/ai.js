// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true
});

export async function getCommitMsg(diff) {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "Following this template:\n\n{\n  \"type\": type of change in Angular standard,\n  \"scope\": scope of change,\n  \"decription\": Short description,\n  \"changes\": [\n    {\n      \"key\": numeric id of change\n      \"detail\": first change detail\n    },\n    {\n\"key\": unique key of change\n      \"detail\": second change detail\n    }\n    // Add more details if necessary\n  ]\n}\n\nAdapt it to every git diff from now avoiding adding file extensions and extra information."
            },
            {
                "role": "user",
                "content": diff
            }
        ],
        temperature: 1,
        max_tokens: 512,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    return JSON.parse(response.choices[0].message.content);
}