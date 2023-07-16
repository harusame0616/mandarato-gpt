<script setup lang="ts">
const props = withDefaults(defineProps<{ large?: boolean }>(), {
  large: false,
});

const size = computed(() => (props.large ? "h-8" : "h-4"));
</script>

<template>
  <div :class="size"></div>
</template>
