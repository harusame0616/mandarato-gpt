<script setup lang="ts">
withDefaults(
  defineProps<{
    disabled?: boolean;
    small?: boolean;
    primary?: boolean;
    secondary?: boolean;
  }>(),
  {
    disabled: false,
    small: false,
    primary: true,
    secondary: false,
  }
);
</script>

<template>
  <button
    class="rounded-md border"
    :class="{
      'bg-primary-light text-white hover:bg-primary-dark active:bg-primary-darken font-bold':
        primary && !secondary,
      'border-primary-light text-primary-light hover:border-primary-dark hover:text-primary-dark  hover:font-bold active:border-primary-darken active:text-primary-darken active:font-bold inset-2 ':
        secondary,
      'opacity-40': disabled,
      'text-xs': small,
      'pointer-events-none': disabled,
    }"
    type="button"
    :disabled="disabled"
  >
    <LayoutBox :thin="small" center>
      <slot />
    </LayoutBox>
  </button>
</template>
