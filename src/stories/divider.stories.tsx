import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '../components/divider' // ⬅️ change path if needed

const meta: Meta<typeof Divider> = {
    title: 'Components/Divider',
    component: Divider,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <div className="max-w-md space-y-4">
            <p>Content above the divider.</p>
            <Divider />
            <p>Content below the divider.</p>
        </div>
    ),
}

export const Soft: Story = {
    render: () => (
        <div className="max-w-md space-y-4">
            <p>Content above the soft divider.</p>
            <Divider soft />
            <p>Content below the soft divider.</p>
        </div>
    ),
}

export const InSection: Story = {
    render: () => (
        <div className="max-w-md rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Settings
            </h2>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                General account preferences.
            </p>

            <Divider className="my-4" />

            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Notifications, privacy, and other options.
            </p>
        </div>
    ),
}
