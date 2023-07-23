<script setup lang="ts">
import { useMandarato } from "~/domains/mandarato/composables/useMandarato.ts";
import Mandarato from "~/domains/mandarato/components/Mandarato.vue";
import { RelationIndexType } from "~/domains/mandarato/models/mandarato.ts";

const {
  mandarato,
  changeMainText,
  changeRelationText,
  generateRelations,
  pending,
} = useMandarato();
const current = ref<"root" | RelationIndexType>("root");

const changeMain = (text: string) => {
  changeMainText(text, current.value === "root" ? undefined : current.value);
};

const changeRelation = (index: RelationIndexType, text: string) => {
  if (current.value === "root") {
    changeRelationText(text, index, undefined);
  } else {
    changeRelationText(text, current.value, index);
  }
};
</script>

<template>
  <div>
    <BaseTitle :level="1">マンダラート作成</BaseTitle>
    <LayoutSpacer large />
    <Mandarato
      :mandarato="mandarato"
      :current="current"
      :disabled="pending"
      @select:relation="current = $event"
      @select:main="current = 'root'"
      @update:main="changeMain"
      @update:relation="changeRelation"
      @click:auto-gen="generateRelations(current === 'root' ? 'main' : current)"
    />
  </div>
</template>
