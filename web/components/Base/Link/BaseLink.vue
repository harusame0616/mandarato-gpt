<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string;
    screenReaderText: string;
  }>(),
  {
    screenReaderText: "",
  }
);
</script>

<template>
  <NuxtLink :href="href">
    <slot />
    <span class="sr-only">{{ screenReaderText }}</span>
  </NuxtLink>
</template>
