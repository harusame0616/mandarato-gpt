import { MandaratoType, RelationIndexType } from "../models/mandarato.ts";

export const useMandarato = () => {
  const pending = ref(false);
  const mandarato = ref<MandaratoType>({
    main: "",
    relations: [
      { main: "", relations: ["", "", "", "", "", "", "", ""] },
      { main: "", relations: ["", "", "", "", "", "", "", ""] },
      { main: "", relations: ["", "", "", "", "", "", "", ""] },
      { main: "", relations: ["", "", "", "", "", "", "", ""] },
      { main: "", relations: ["", "", "", "", "", "", "", ""] },
      { main: "", relations: ["", "", "", "", "", "", "", ""] },
      { main: "", relations: ["", "", "", "", "", "", "", ""] },
      { main: "", relations: ["", "", "", "", "", "", "", ""] },
    ],
  });

  const changeMainText = (text: string, relationIndex?: RelationIndexType) => {
    if (relationIndex) {
      mandarato.value.relations[relationIndex].main = text;
    } else {
      mandarato.value.main = text;
    }
  };

  const changeRelationText = (
    text: string,
    relationIndex: RelationIndexType,
    relationIndex2?: RelationIndexType
  ) => {
    if (relationIndex2) {
      mandarato.value.relations[relationIndex].relations[relationIndex2] = text;
    } else {
      mandarato.value.relations[relationIndex].main = text;
    }
  };

  const generateRelations = async (target: "main" | RelationIndexType) => {
    const theme = mandarato.value.main;
    const theme2 =
      target === "main" ? undefined : mandarato.value.relations[target].main;

    try {
      pending.value = true;
      const { relations } = await $fetch(
        "/api/mandarato/relations/auto-gen-relations",
        {
          method: "get",
          query: {
            mainText: theme,
            relationText: theme2,
          },
        }
      );

      if (target === "main") {
        relations.forEach((relation: string, index: number) => {
          mandarato.value.relations[index].main = relation;
        });
      } else {
        relations.forEach((relation: string, index: number) => {
          mandarato.value.relations[target].relations[index] = relation;
        });
      }
    } catch (e) {
      // TODO: エラー処理
      // eslint-disable-next-line no-console
      console.warn({ e });
    }
    pending.value = false;
  };

  return {
    mandarato,
    changeMainText,
    changeRelationText,
    generateRelations,
    pending,
  };
};
