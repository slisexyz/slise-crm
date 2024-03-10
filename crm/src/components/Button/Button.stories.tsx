import { Meta } from "@storybook/react"
import { Button } from "./Button"

export default {
	component: Button,
	title: "Button",
} as Meta

export const Primary = () => <Button>Primary Button</Button>
export const Secondary = () => <Button>Secondary Button</Button>
