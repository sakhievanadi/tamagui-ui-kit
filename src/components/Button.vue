<script setup lang="ts">
import { computed } from "vue";

interface Props {
  size: "sm" | "lg" | "def";
  variant: "grey" | "green" | "red" | "yellow";
  theme: "light" | "dark";
  hasIcon?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const {
  size = "def",
  variant = "green",
  theme = "light",
  disabled = false,
  loading = false,
} = defineProps<Props>();

const classes = computed(() => [
  "tamagui-button",
  `tamagui-button--size-${size}`,
  `tamagui-button--variant-${variant}`,
  `tamagui-button--theme-${theme}`,
  { "is-disabled": disabled, "is-loading": loading },
]);
</script>

<template>
  <button :class="classes" :disabled="disabled || loading">
    <slot />
  </button>
</template>

<style scoped></style>
