<script setup lang="ts">
import { computed } from "vue";
import CheckRoundedIcon from "~icons/material-symbols/check-rounded";
import CropSquareIcon from "~icons/material-symbols/crop-square";

interface Props {
  size: "sm" | "lg" | "def";
  variant: "gray" | "green" | "red" | "yellow";
  theme: "light" | "dark";
  indeterminate: boolean;
  disabled?: boolean;
}

const {
  size = "def",
  variant = "gray",
  theme = "dark",
  indeterminate = false,
  disabled = false,
} = defineProps<Props>();

const checkboxAttrs = computed(() => ({
  "data-size": size,
  "data-variant": variant,
  "data-theme": theme,
}));

const checked = defineModel<boolean>({ default: false });
</script>

<template>
  <label class="tamagui-checkbox" v-bind="checkboxAttrs">
    <input
      type="checkbox"
      v-model="checked"
      :indeterminate="indeterminate"
      :disabled="disabled"
      class="visually-hidden-input"
    />
    <span class="tamagui-checkbox-box">
      <CheckRoundedIcon
        v-if="checked && !indeterminate"
        class="tamagui-checkbox-box-icon"
      />
      <CropSquareIcon
        v-else-if="indeterminate"
        class="tamagui-checkbox-box-icon"
      />
    </span>
  </label>
</template>

<style scoped>
.tamagui-checkbox {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &[data-size="sm"] {
    width: 16px;
    height: 16px;

    .tamagui-checkbox-box-icon {
      height: 10px;
      width: auto;
    }
  }

  &[data-size="def"] {
    width: 20px;
    height: 20px;

    .tamagui-checkbox-box-icon {
      height: 14px;
      width: auto;
    }
  }

  &[data-size="lg"] {
    width: 24px;
    height: 24px;

    .tamagui-checkbox-box-icon {
      height: 18px;
      width: auto;
    }
  }

  .visually-hidden-input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .tamagui-checkbox-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 5px;
    box-sizing: border-box;
  }

  &[data-variant="gray"][data-theme="dark"] {
    .tamagui-checkbox-box {
      background-color: var(--tamagui-color-dark-gray-1);
      border-color: var(--tamagui-color-dark-gray-6);

      .tamagui-checkbox-box-icon {
        color: var(--tamagui-color-dark-gray-12);
      }

      &:hover {
        border-color: var(--tamagui-color-dark-gray-8);
      }

      &:active {
        background-color: var(--tamagui-color-dark-gray-2);
      }
    }

    .visually-hidden-input:disabled ~ .tamagui-checkbox-box {
      opacity: 50%;
      pointer-events: none;
    }
  }

  &[data-variant="gray"][data-theme="light"] {
  }
}
</style>
