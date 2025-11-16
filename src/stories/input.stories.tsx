// Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Input, InputGroup } from '../components/input'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// --- Basic input -------------------------------------------------------------

export const Default: Story = {
    render: () => (
        <div className="max-w-sm space-y-4 p-6 rounded-lg border border-zinc-300 bg-white shadow">
            <label className="text-zinc-700 text-sm font-medium">Default Input</label>
            <Input placeholder="Type something..." />
        </div>
    ),
}

// --- Input with icons --------------------------------------------------------

export const WithIcon: Story = {
    render: () => (
        <div className="max-w-sm space-y-4 p-6 rounded-lg border border-zinc-300 bg-white shadow">
            <label className="text-zinc-700 text-sm font-medium">Input With Icon</label>

            <InputGroup>
                <MagnifyingGlassIcon data-slot="icon" />
                <Input placeholder="Search..." />
            </InputGroup>
        </div>
    ),
}

// --- Different types ---------------------------------------------------------

export const Types: Story = {
    render: () => (
        <div className="max-w-sm space-y-6 p-6 rounded-lg border border-zinc-300 bg-white shadow">
            <div>
                <label className="text-zinc-700 text-sm font-medium">Email</label>
                <Input type="email" placeholder="your@email.com" />
            </div>

            <div>
                <label className="text-zinc-700 text-sm font-medium">Password</label>
                <Input type="password" placeholder="••••••••" />
            </div>

            <div>
                <label className="text-zinc-700 text-sm font-medium">Date</label>
                <Input type="date" />
            </div>

            <div>
                <label className="text-zinc-700 text-sm font-medium">Number</label>
                <Input type="number" placeholder="123" />
            </div>
        </div>
    ),
}

// --- Disabled state ----------------------------------------------------------

export const Disabled: Story = {
    render: () => (
        <div className="max-w-sm space-y-4 p-6 rounded-lg border border-zinc-300 bg-white shadow">
            <label className="text-zinc-700 text-sm font-medium">Disabled Input</label>

            <Input data-disabled placeholder="Cannot type..." />
        </div>
    ),
}
