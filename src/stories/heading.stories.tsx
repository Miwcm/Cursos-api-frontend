// Heading.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Heading, Subheading } from '../components/heading'

const meta: Meta<typeof Heading> = {
    title: 'Components/Heading',
    component: Heading,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <div className="max-w-md rounded-lg border border-zinc-300 bg-white p-4 shadow-sm">
            <Heading className="text-blue-600">
                Default Heading (h1)
            </Heading>
            <p className="mt-2 text-sm text-zinc-600">
                This is the default Heading component rendered as an <code>h1</code>.
            </p>
        </div>
    ),
}

export const Levels: Story = {
    render: () => (
        <div className="space-y-3 rounded-lg border border-zinc-300 bg-white p-4 shadow-sm">
            <Heading level={1} className="text-red-600">
                Heading level 1
            </Heading>
            <Heading level={2} className="text-orange-600">
                Heading level 2
            </Heading>
            <Heading level={3} className="text-amber-600">
                Heading level 3
            </Heading>
            <Heading level={4} className="text-emerald-600">
                Heading level 4
            </Heading>
            <Heading level={5} className="text-sky-600">
                Heading level 5
            </Heading>
            <Heading level={6} className="text-purple-600">
                Heading level 6
            </Heading>
        </div>
    ),
}

export const WithSubheading: Story = {
    render: () => (
        <div className="max-w-md rounded-lg border border-zinc-300 bg-white p-4 shadow-sm">
            <Heading level={1} className="text-indigo-600">
                Dashboard
            </Heading>
            <Subheading level={2} className="text-zinc-700">
                Overview of your recent activity and metrics.
            </Subheading>
        </div>
    ),
}
