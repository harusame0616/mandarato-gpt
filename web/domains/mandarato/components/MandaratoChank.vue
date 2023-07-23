<script setup lang="ts">
import MandaratoCellMain from "./MandaratoCell/MandaratoCellMain.vue";
import MandaratoCellRelation from "./MandaratoCell/MandaratoCellRelation.vue";
import type { MandaratoChankType } from "../models/mandarato.ts";
import {
  assertIsRelationIndexType,
  RelationIndexType,
} from "../models/mandarato.ts";

defineProps<{
  mandaratoChank: MandaratoChankType;
  root: boolean;
}>();
const emits = defineEmits<{
  (event: "update:main", text: string): void;
  (event: "select:main"): void;
  (event: "update:relation", index: RelationIndexType, text: string): void;
  (event: "select:relation", index: RelationIndexType): void;
  (event: "click:auto-gen"): void;
}>();

const emitSelectRelation = (index: number) => {
  assertIsRelationIndexType(index);
  emits("select:relation", index);
};

const emitUpdateRelation = (index: number, text: string) => {
  assertIsRelationIndexType(index);
  emits("update:relation", index, text);
};
</script>

<template>
  <div class="grid grid-cols-3 gap-1 grid-flow-row auto-rows-auto max-w-5xl">
    <template v-for="(text, i) in mandaratoChank.relations" :key="i">
      <MandaratoCellRelation
        :model-value="text"
        :disabled="!mandaratoChank.main"
        :disable-select="!text"
        @click:select="emitSelectRelation(i)"
        @update:model-value="emitUpdateRelation(i, $event)"
      />
      <MandaratoCellMain
        v-if="i === 3"
        :model-value="mandaratoChank.main"
        :can-back="!root"
        :can-edit="root"
        @click:back="emits('select:main')"
        @update:model-value="emits('update:main', $event)"
        @click:auto-gen="$emit('click:auto-gen')"
      />
    </template>
  </div>
</template>
