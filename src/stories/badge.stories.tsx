import type { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeButton } from '../components/badge' // update path!

const colors = [
    'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
    'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink',
    'rose', 'zinc',
] as const

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    subcomponents: { BadgeButton },
    tags: ['autodocs'],
    args: {
        children: 'Badge',
    },
    argTypes: {
        color: {
            control: 'select',
            options: colors,
        },
        className: { table: { disable: true } },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        color: 'zinc',
    },
}

export const ColorsGrid: Story = {
    render: () => (
        <div className="flex flex-wrap gap-3">
            {colors.map((c) => (
                <Badge key={c} color={c}>
                    {c}
                </Badge>
            ))}
        </div>
    ),
}

export const AsButton: Story = {
    args: {
        color: 'blue',
        children: 'Click me',
    },
    render: ({ color, children }) => (
        <BadgeButton
            color={color}
            onClick={() => {
                // eslint-disable-next-line no-alert
                alert('BadgeButton clicked!')
            }}
        >
            {children ?? 'Click me'}
        </BadgeButton>
    ),
}

export const AsLink: Story = {
    args: {
        color: 'rose',
        children: 'Go to Dashboard',
    },
    render: ({ color, children }) => (
        <BadgeButton color={color} href="/dashboard">
            {children ?? 'Go to Dashboard'}
        </BadgeButton>
    ),
}
