// Link.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { Link } from '../components/link' // adjust path as needed

const meta: Meta<typeof Link> = {
    title: 'Components/Link',
    component: Link,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Link>

export const Basic: Story = {
    render: () => (
        <BrowserRouter>
            <div className="max-w-md rounded-lg border border-zinc-300 bg-white p-6 shadow">
                <p className="text-sm text-zinc-700 mb-3">Standard colored link:</p>
                <Link
                    href="/profile"
                    className="text-blue-600 font-semibold underline hover:text-blue-800"
                >
                    Go to Profile
                </Link>
            </div>
        </BrowserRouter>
    ),
}

export const InParagraph: Story = {
    render: () => (
        <BrowserRouter>
            <div className="max-w-md rounded-lg border border-zinc-300 bg-white p-6 shadow">
                <p className="text-sm text-zinc-700">
                    Update your info on the{' '}
                    <Link
                        href="/settings"
                        className="text-purple-600 font-semibold underline hover:text-purple-800"
                    >
                        Settings page
                    </Link>
                    .
                </p>
            </div>
        </BrowserRouter>
    ),
}

export const ButtonStyle: Story = {
    render: () => (
        <BrowserRouter>
            <div className="max-w-md rounded-lg border border-zinc-300 bg-white p-6 shadow">
                <p className="text-sm text-zinc-700 mb-3">
                    The link styled as a bright-colored button:
                </p>

                <Link
                    href="/dashboard"
                    className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700"
                >
                    Go to Dashboard
                </Link>
            </div>
        </BrowserRouter>
    ),
}
