import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const getResponse = async () => {
    try {
        const completionPromise = openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt: `Leave a busy message for the user.`,
            max_tokens: 2000,
        });

        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Timeout reached");
            }, 10000); // 10 seconds timeout
        });

        const response = await Promise.race([completionPromise, timeoutPromise]);

        if (typeof response === 'string' && response === "Timeout reached") {
            return "I am busy right now.";
        } else {
            return response.choices[0].text;
        }
    } catch (error) {
        console.error("Error:", error);
        return "error";
    }
};

export default getResponse;
