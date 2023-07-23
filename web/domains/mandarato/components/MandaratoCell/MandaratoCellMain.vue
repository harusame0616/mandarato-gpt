<script setup lang="ts">
import MandaratoCell from "./MandaratoCell.vue";

withDefaults(
  defineProps<{
    modelValue: string;
    canBack?: boolean;
    canEdit?: boolean;
  }>(),
  {
    canBack: false,
    canEdit: true,
  }
);

defineEmits<{
  (event: "update:model-value", text: string): void;
  (event: "click:auto-gen"): void;
  (event: "click:back"): void;
}>();
</script>

<template>
  <MandaratoCell
    v-bind="$attrs"
    :model-value="modelValue"
    :can-edit="canEdit"
    @update:model-value="$emit('update:model-value', $event)"
  >
    <template #footer>
      <BaseButton
        :disabled="!modelValue"
        small
        class="mb-px"
        @click="$emit('click:auto-gen')"
        >自動生成</BaseButton
      >
      <BaseButton v-if="canBack" secondary small @click="$emit('click:back')"
        >戻る</BaseButton
      >
    </template>
  </MandaratoCell>
</template>
