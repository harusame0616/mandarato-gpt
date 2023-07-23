<script setup lang="ts">
import MandaratoCell from "./MandaratoCell.vue";

withDefaults(
  defineProps<{
    modelValue: string;
    disableSelect?: boolean;
  }>(),
  {
    disableSelect: false,
  }
);

defineEmits<{
  (event: "update:model-value", text: string): void;
  (event: "click:select"): void;
}>();
</script>

<template>
  <MandaratoCell
    v-bind="$attrs"
    :model-value="modelValue"
    @update:model-value="$emit('update:model-value', $event)"
  >
    <template #footer>
      <BaseButton
        secondary
        small
        :disabled="disableSelect"
        @click="$emit('click:select')"
        >選択</BaseButton
      >
    </template>
  </MandaratoCell>
</template>
