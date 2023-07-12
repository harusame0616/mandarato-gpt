<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    thin: boolean;
    center: boolean;
  }>(),
  {
    thin: false,
    center: false,
  }
);

const style = computed(() => ({
  "p-2": !props.thin,
  "p-1": props.thin,
  "flex justify-center": props.center,
}));
</script>

<template>
  <div :class="style"><slot /></div>
</template>
