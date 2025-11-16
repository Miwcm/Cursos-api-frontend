import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { Button } from '../components/button'
import type { ButtonProps } from '../components/button'

// Manually copied color keys
const colorOptions = [
  'dark/zinc', 'light', 'dark/white', 'dark', 'white', 'zinc',
  'indigo', 'cyan', 'red', 'orange', 'amber', 'yellow', 'lime',
  'green', 'emerald', 'teal', 'sky', 'blue', 'violet', 'purple',
  'fuchsia', 'pink', 'rose',
]

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    children: { control: 'text' },
    color: {
      control: 'select',
      options: colorOptions,
    },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    onClick: { action: 'clicked' },
  },

  args: {
    children: 'Button',
  },
}

export default meta
type Story = StoryObj<ButtonProps>

// --- Stories ---

export const Solid: Story = {
  args: {
    color: 'indigo',
    children: 'Solid Button',
  },
}

export const Outline: Story = {
  args: {
    outline: true,
    children: 'Outline Button',
  },
}

export const Plain: Story = {
  args: {
    plain: true,
    children: 'Plain Button',
  },
}

export const AsLink: Story = {
  args: {
    color: 'indigo',
    children: 'Link Button',
    href: '#',
  },
}

export const WithIcon: Story = {
  args: {
    color: 'indigo',
    children: (
      <>
        {/* ✅ FIX: Use ArrowRightIcon here */}
        <ArrowRightIcon data-slot="icon" />
        <span>Button with Icon</span>
      </>
    ),
  },
}

export const Disabled: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button color="indigo" disabled>Solid</Button>
      <Button outline disabled>Outline</Button>
      <Button plain disabled>Plain</Button>
    </div>
  ),
}

export const AllSolidColors: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div className="flex flex-wrap gap-4 max-w-lg justify-center">
      {colorOptions.map((color) => (
        <Button key={color} color={color as never}>
          {color}
        </Button>
      ))}
    </div>
  ),
}