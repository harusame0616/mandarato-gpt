<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: string;
    disabled?: boolean;
    screenReaderLabel?: string;
    canEdit?: boolean;
  }>(),
  {
    disabled: false,
    screenReaderLabel: "",
    canEdit: true,
  }
);

const emits = defineEmits<{
  (event: "update:modelValue", text: string): void;
}>();

const emitsModelValue = (text: string) => {
  emits("update:modelValue", text);
};
const textareaRef = ref<HTMLTextAreaElement | null>(null);

const blur = () => {
  textareaRef.value?.blur();
};
</script>

<template>
  <div
    class="relative pb-[100%] h-0"
    :class="{ 'pointer-events-none': disabled }"
  >
    <LayoutBox
      class="absolute top-0 left-0 w-full h-full border rounded-sm transition-all flex flex-col"
      :class="{
        'shadow-sm': !disabled,
        'bg-gray-200': disabled,
        'opacity-40': disabled,
      }"
    >
      <slot name="header" />
      <BaseTextarea
        ref="textareaRef"
        :value="modelValue"
        class="bg-transparent text-xs text-center h-full flex-grow mb-2"
        :disabled="!canEdit"
        @change="emitsModelValue(($event.target as HTMLInputElement).value)"
        @keydown.enter="blur"
      />
      <slot name="footer" />
    </LayoutBox>
  </div>
</template>
