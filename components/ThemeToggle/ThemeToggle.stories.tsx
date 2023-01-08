import { Meta, StoryObj } from '@storybook/react'
import ThemeToggle from './ThemeToggle'

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
  tags: ['docsPage'],
}

export default meta

type Story = StoryObj<typeof ThemeToggle>

export const Toggle: Story = {}
