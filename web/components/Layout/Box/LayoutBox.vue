<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    thin?: boolean;
    thick?: boolean;
    center?: boolean;
    full?: boolean;
  }>(),
  {
    thin: false,
    thick: false,
    center: false,
    full: false,
  }
);

const style = computed(() => ({
  "p-4": props.thick,
  "p-2": !props.thin && !props.thick,
  "p-1": props.thin,
  "flex justify-center": props.center,
  "w-full h-full": props.full,
}));
</script>

<template>
  <div :class="style"><slot /></div>
</template>
