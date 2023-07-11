import * as oai from "openai";
import {
  AutoGenRelations,
  AutoGenRelationsGateway,
} from "../usecases/auto-gen-relations-gateway.ts";

export class OAIAutoGenRelationsGateway implements AutoGenRelationsGateway {
  private readonly api: oai.OpenAIApi;

  constructor(apiKey: string) {
    const config = new oai.Configuration({
      apiKey,
    });

    this.api = new oai.OpenAIApi(config);
  }

  async getAutoGenRelations(
    mainText: string,
    relationText?: string | undefined
  ): Promise<AutoGenRelations> {
    const prompt = `
# Order
Output 8 things that are associated with the following themes, satisfying the constraints.

# Theme
${relationText ? `"${relationText}" of ` : ``}"${mainText}"

# Constraints
- Output in Japanese
- Use JSON format
   {"relations": ["answer1", "answer2", "answer3", "answer4", "answer5", "answer6", "answer7", "answer8"]}
- Do not include the following
   - Unnecessary decorations
   - Duplicates
   - Similar
   - ${mainText}
   ${relationText ? `- ${relationText}\n` : ""}

# Answer
`;
    const res = await this.api.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    const { relations } = JSON.parse(
      res.data.choices?.[0]?.message?.content ?? "{}"
    );

    return {
      relations,
    };
  }
}
