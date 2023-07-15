<script setup lang="ts">
withDefaults(defineProps<{ srText?: string }>(), {
  srText: "",
});
const isFocused = ref(false);
</script>

<template>
  <LayoutBox
    class="rounded-md border transition-all"
    :class="{
      'border-gray-200': !isFocused,
      'border-secondary-light': isFocused,
    }"
  >
    <span v-if="srText" class="sr-only">{{ srText }}</span>
    <textarea
      v-bind="$attrs"
      class="h-full w-full focus:outline-none disabled:text-gray-400"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </LayoutBox>
</template>
