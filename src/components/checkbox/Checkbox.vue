<script setup lang="ts">
import { computed } from "vue";

interface Props {
  size: "sm" | "lg" | "def";
  variant: "gray" | "green" | "red" | "yellow";
  theme: "light" | "dark";
}

interface CheckboxState {
  indeterminate: boolean;
}

const { size = "def", variant = "gray", theme = "dark" } = defineProps<Props>();

const checkboxAttrs = computed(() => ({
  "data-size": size,
  "data-variant": variant,
  "data-theme": theme,
}));

const checked = defineModel<boolean>({ default: false });
</script>

<template>
  <input
    type="checkbox"
    v-bind="checkboxAttrs"
    v-model="checked"
    :indeterminate="indeterminate"
  />
</template>

<style scoped></style>
