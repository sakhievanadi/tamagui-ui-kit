<script setup lang="ts">
import { computed } from "vue";

interface Props {
  size: "sm" | "lg" | "def";
  variant: "gray" | "green" | "red" | "yellow";
  theme: "light" | "dark";
  type: "plain" | "chromeless" | "outline";
  disabled?: boolean;
  loading?: boolean;
  iconAfter?: boolean;
  icon?: boolean;
  activated?: boolean;
}

const {
  size = "def",
  variant = "gray",
  theme = "dark",
  type = "plain",
  disabled = false,
  loading = false,
  iconAfter = true,
  icon = true,
  activated = false,
} = defineProps<Props>();

const buttonAttrs = computed(() => ({
  "data-size": size,
  "data-variant": variant,
  "data-theme": theme,
  "data-type": type,
  "data-disabled": disabled,
  "icon-size": iconAfter,
  "data-activated": activated,
}));
</script>

<template>
  <button v-bind="buttonAttrs" :disabled="disabled || loading">
    <slot name="icon-after" v-if="iconAfter" class="icon" />

    <slot />
    <slot name="icon" v-if="icon" class="icon" />
  </button>
</template>

<style scoped>
button {
  font-family: var(--tamagui-font-family);
  border-radius: 7px;
  display: flex;
  align-items: center;
  gap: var(--icon-gap);
  border-style: none;

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

  &[data-variant="gray"][data-theme="dark"][data-activated="false"] {
    background-color: var(--tamagui-color-dark-gray-4);
    color: var(--tamagui-color-dark-gray-12);

    &:hover {
      background-color: var(--tamagui-color-dark-gray-8);
      border: 1px solid var(--tamagui-color-dark-gray-8);
    }

    &:active {
      background-color: var(--tamagui-color-dark-gray-4);
      border: 1px solid var(--tamagui-color-dark-gray-4);
    }

    &[data-type="chromeless"] {
      background-color: transparent;
      border: 1px solid transparent;

      &:hover {
        background-color: var(--tamagui-color-dark-gray-5);
      }

      &:active {
        background-color: var(--tamagui-color-dark-gray-6);
      }
    }

    &[data-type="outline"] {
      background-color: transparent;
      border: 1px solid var(--tamagui-color-dark-gray-6);

      &:hover {
        border-color: var(--tamagui-color-dark-gray-8);
      }

      &:active {
        border-color: var(--tamagui-color-dark-gray-6);
      }
    }
  }

  &[data-variant="gray"][data-theme="dark"][data-activated="true"] {
    background-color: var(--tamagui-color-dark-gray-8);
    color: var(--tamagui-color-dark-gray-12);

    &:hover {
      background-color: var(--tamagui-color-dark-gray-9);
    }

    &:active {
      background-color: var(--tamagui-color-dark-gray-10);
    }

    &[data-type="chromeless"] {
      background-color: transparent;

      &:hover {
        background-color: var(--tamagui-color-dark-gray-9);
      }

      &:active {
        background-color: var(--tamagui-color-dark-gray-10);
      }
    }

    &[data-type="outline"] {
      background-color: transparent;
      border: 1px solid var(--tamagui-color-dark-gray-9);

      &:hover {
        border-color: var(--tamagui-color-dark-gray-10);
      }

      &:active {
        border-color: var(--tamagui-color-dark-gray-6);
      }
    }
  }

  &[data-variant="gray"][data-theme="light"][data-activated="false"] {
    background-color: var(--tamagui-color-light-gray-4);
    color: var(--tamagui-color-light-gray-12);
    border: 1px solid var(--tamagui-color-light-gray-4);

    &:hover {
      background-color: var(--tamagui-color-light-gray-5);
      border-color: var(--tamagui-color-light-gray-8);
    }

    &:active {
      background-color: var(--tamagui-color-light-gray-6);
    }

    &[data-type="chromeless"] {
      background-color: transparent;

      &:hover {
        background-color: var(--tamagui-color-light-gray-5);
      }

      &:active {
        background: var(--tamagui-color-light-gray-6);
      }
    }

    &[data-type="outline"] {
      background-color: transparent;
      border: 1px solid var(--tamagui-color-light-gray-6);

      &:hover {
        border-color: var(--tamagui-color-light-gray-8);
      }

      &:active {
        border-color: var(--tamagui-color-light-gray-6);
      }
    }
  }
}
</style>
