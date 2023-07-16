<script setup lang="ts">
const props = defineProps<{ level: 1 | 2 | 3 | 4 }>();
const titleTag = computed(() => `h${props.level}`);

const sizes = {
  1: "text-xl",
  2: "text-lg",
  3: "text-md",
  4: "text-sm",
};
const size = computed(() => sizes[props.level]);
</script>

<template>
  <component :is="titleTag" class="font-bold text-text-primary" :class="size">
    <slot />
  </component>
</template>
