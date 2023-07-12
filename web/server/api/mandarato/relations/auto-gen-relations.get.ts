import { GetAutoGenRelationsQuery } from "@/server/domains/mandarato/usecases/get-auto-gen-relations-query.ts";
import { OAIAutoGenRelationsGateway } from "@/server/domains/mandarato/infrastructures/oai-auto-gen-relations-gateway.ts";

export default defineEventHandler(async (event) => {
  const { mainText, relationText } = getQuery(event);
  const { openAiApiKey } = useRuntimeConfig();

  if (
    mainText === undefined ||
    typeof mainText !== "string" ||
    mainText.length === 0 ||
    mainText.length > 50
  ) {
    throw new Error("query error: mainText");
  }
  if (
    (relationText !== undefined && typeof relationText !== "string") ||
    (typeof relationText === "string" &&
      (relationText.length > 50 || relationText.length === 0))
  ) {
    throw new Error("query error: relationText");
  }

  const getAutoGenRelationsQuery = new GetAutoGenRelationsQuery(
    new OAIAutoGenRelationsGateway(openAiApiKey)
  );
  return getAutoGenRelationsQuery.execute(mainText, relationText);
});
