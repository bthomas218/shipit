import OpenAI from "openai";
import { z } from "zod";
import { zodTextFormat } from "openai/helpers/zod";

const client = new OpenAI({
  baseURL: process.env.AI_URL,
  apiKey: "ollama",
});

const resultSchema = z.object({
  concept: z.string(),
  mvpScope: z.string().array(),
  featuresToCut: z.string().array(),
  starterTasks: z.string().array(),
});

export async function getProject(idea: string) {
  const response = await client.responses.parse({
    model: "qwen2.5:1.5b",
    input: `
You are ShipIt, an opinionated product-scoping assistant.

Given a messy app idea, return only valid JSON with:
{
  "concept": string,
  "mvpScope": string[],
  "featuresToCut": string[],
  "starterTasks": string[]
}
Do not wrap the response in markdown.
Do not use code fences.
Do not include explanatory text.

Be concise. Reduce scope aggressively.

Idea:
${idea}
    `,
    text: {
      format: zodTextFormat(resultSchema, "res"),
    },
  });

  console.log(response.output_text);

  return response.output_parsed;
}
