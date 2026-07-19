import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "lg", "def"],
    },
    variant: {
      control: "select",
      options: ["grey", "green", "red", "yellow"],
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "def",
    variant: "green",
    theme: "light",
    disabled: false,
    loading: false,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Click me</Button>`,
  }),
};
