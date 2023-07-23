<script setup lang="ts">
import MandaratoChank from "./MandaratoChank.vue";

import type {
  MandaratoChankType,
  MandaratoType,
  RelationIndexType,
} from "../models/mandarato.ts";

const props = withDefaults(
  defineProps<{
    mandarato: MandaratoType;
    current: "root" | RelationIndexType;
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  }
);

defineEmits<{
  (event: "click:auto-gen"): void;
}>();

const currentMandaratoChank = computed<MandaratoChankType>(() =>
  props.current === "root"
    ? ({
        main: props.mandarato.main,
        relations: props.mandarato.relations.map((relation) => relation.main),
      } as MandaratoChankType)
    : props.mandarato.relations[props.current]
);
</script>

<template>
  <MandaratoChank
    v-bind="$attrs"
    :mandarato-chank="currentMandaratoChank"
    :root="current === 'root'"
    :class="{
      'pointer-events-none': disabled,
      'opacity-50': disabled,
    }"
    @click:auto-gen="$emit('click:auto-gen')"
  />
</template>
