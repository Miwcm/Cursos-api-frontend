import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarButton } from '../components/avatar' // <- update path

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    subcomponents: { AvatarButton },
    tags: ['autodocs'],
    argTypes: {
        className: { table: { disable: true } },
        // DOM span props are passed through but not interesting for controls
        onClick: { table: { disable: true } },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Initials: Story = {
    args: {
        initials: 'JD',
        alt: 'Jenny Doe',
    },
}

export const Image: Story = {
    args: {
        src: 'https://via.placeholder.com/128x128.png?text=JD',
        alt: 'Jenny Doe',
    },
}

export const SquareInitials: Story = {
    args: {
        initials: 'JD',
        alt: 'Jenny Doe',
        square: true,
    },
}

export const AsButton: Story = {
    args: {
        initials: 'JD',
        alt: 'Open profile menu',
    },
    render: (args) => (
        <AvatarButton
            {...args}
            aria-label={args.alt || 'Open profile menu'}
            onClick={() => {
                // just to show it's interactive in Storybook
                // eslint-disable-next-line no-alert
                alert('Avatar button clicked!')
            }}
        />
    ),
}

export const AsLink: Story = {
    args: {
        initials: 'JD',
        alt: 'Go to profile',
    },
    render: (args) => (
        <AvatarButton
            {...args}
            href="/profile"
            aria-label={args.alt || 'Go to profile'}
        />
    ),
}
