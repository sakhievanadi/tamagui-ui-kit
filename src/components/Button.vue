<script setup lang="ts">
import { computed } from "vue";

interface Props {
  size: "sm" | "lg" | "def";
  variant: "grey" | "green" | "red" | "yellow";
  theme: "light" | "dark";
  type: "plain" | "chromeless" | "outline";
  hasIcon?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const {
  size = "def",
  variant = "grey",
  theme = "dark",
  type = "plain",
  hasIcon = true,
  disabled = false,
  loading = false,
} = defineProps<Props>();

const buttonAttrs = computed(() => ({
  "data-size": size,
  "data-variant": variant,
  "data-theme": theme,
  "data-type": type,
  "data-disabled": disabled,
}));
</script>

<template>
  <button
    v-bind="buttonAttrs"
    :disabled="disabled || loading"
    :class="{
      'has-icon': hasIcon,
    }"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  font-family: var(--tamagui-font-family);
  border: none;
  border-radius: 7px;

  &[data-size="sm"] {
    padding: 6px 7px;
    font-size: var(--tamagui-font-size-2-xs);
  }

  &[data-size="def"] {
    padding: 8px 13px;
    font-size: var(--tamagui-font-size-xs);
  }

  &[data-size="lg"] {
    padding: 10px 18px;
    font-size: var(--tamagui-font-size-sm);
  }

  &[data-variant="grey"][data-theme="dark"] {
    background-color: var(--tamagui-color-gray-4);
    color: var(--tamagui-color-gray-12);

    &[data-type="chromeless"] {
      background-color: transparent;
    }

    &[data-type="outline"] {
      background-color: transparent;
      border: 1px solid var(--tamagui-color-gray-6);
    }
  }
}
</style>
