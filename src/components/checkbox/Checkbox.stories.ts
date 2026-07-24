import type { Meta, StoryObj } from "@storybook/vue3";
import Checkbox from "./Checkbox.vue";
import StarOutlineRoundedIcon from "~icons/material-symbols/star-outline-rounded";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "def", "lg"],
    },
    variant: {
      control: "select",
      options: ["gray", "green", "red", "yellow"],
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
    indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "def",
    variant: "gray",
    theme: "dark",
    indeterminate: false,
    disabled: false,
  },
  render: (args) => ({
    components: { Checkbox, StarOutlineRoundedIcon },
    setup() {
      return { args };
    },
    template: `
    <Checkbox v-bind="args">Click me!</Checkbox>
    `,
  }),
};
