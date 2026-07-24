<script setup lang="ts">
import { computed } from "vue";

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
      :disabled
      class="visually-hidden-input"
    />
    <span class="tamagui-checkbox-box"></span>
  </label>
</template>

<style scoped>
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
</style>
