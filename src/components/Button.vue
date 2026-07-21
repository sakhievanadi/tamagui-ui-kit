<script setup lang="ts">
import { computed } from "vue";

interface Props {
  size: "sm" | "lg" | "def";
  variant: "grey" | "green" | "red" | "yellow";
  theme: "light" | "dark";
  type: "plain" | "chromeless" | "outline";
  disabled?: boolean;
  loading?: boolean;
  iconAfter?: boolean;
  icon?: boolean;
}

const {
  size = "def",
  variant = "grey",
  theme = "dark",
  type = "plain",
  disabled = false,
  loading = false,
  iconAfter = true,
  icon = true,
} = defineProps<Props>();

const buttonAttrs = computed(() => ({
  "data-size": size,
  "data-variant": variant,
  "data-theme": theme,
  "data-type": type,
  "data-disabled": disabled,
  "icon-size": iconAfter,
}));
</script>

<template>
  <button v-bind="buttonAttrs" :disabled="disabled || loading">
    <slot name="icon-after" v-if="iconAfter && icon" class="icon" />

    <slot />
    <slot name="icon" v-if="icon" class="icon" />
  </button>
</template>

<style scoped>
button {
  font-family: var(--tamagui-font-family);
  border: none;
  border-radius: 7px;
  display: flex;
  align-items: center;
  gap: var(--icon-gap);

  .icon {
    width: var(--icon-size);
    height: var(--icon-size);
  }

  &[data-size="sm"] {
    padding: 6px 7px;
    font-size: var(--tamagui-font-size-2-xs);
    --icon-size: 16px;
    --icon-gap: 3.5px;
  }

  &[data-size="def"] {
    padding: 8px 13px;
    font-size: var(--tamagui-font-size-xs);
    --icon-size: 20px;
    --icon-gap: 13px;
  }

  &[data-size="lg"] {
    padding: 10px 18px;
    font-size: var(--tamagui-font-size-sm);
    --icon-size: 24px;
    --icon-gap: 18px;
  }

  &[data-variant="grey"][data-theme="dark"] {
    background-color: var(--tamagui-color-gray-4);
    color: var(--tamagui-color-gray-12);

    &:hover {
      background-color: var(--tamagui-color-gray-8);
    }

    &:active {
      background-color: var(--tamagui-color-gray-4);
    }

    &[data-type="chromeless"] {
      background-color: transparent;
    }

    &[data-type="outline"] {
      background-color: transparent;
      border: 1px solid var(--tamagui-color-gray-6);
    }
  }

  &[data-variant="grey"][data-theme="theme"] {
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
