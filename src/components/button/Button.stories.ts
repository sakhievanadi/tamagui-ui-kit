import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";
import StarOutlineRoundedIcon from "~icons/material-symbols/star-outline-rounded";

const meta = {
  title: "Components/Button",
  component: Button,
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
    type: {
      control: "select",
      options: ["plain", "chromeless", "outline"],
    },
    activated: {
      control: "select",
      options: [true, false],
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
    variant: "gray",
    theme: "dark",
    type: "plain",
    activated: true,
    disabled: false,
    loading: false,
  },
  render: (args) => ({
    components: { Button, StarOutlineRoundedIcon },
    setup() {
      return { args };
    },
    template: `
    <Button v-bind="args">

      <template #icon-after>
        <StarOutlineRoundedIcon>
      </template>

      Click me

      <template #icon>
        <StarOutlineRoundedIcon>
      </template>
      
    </Button>`,
  }),
};
