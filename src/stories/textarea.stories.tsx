'use client'

import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Textarea } from '../components/textarea'

const meta: Meta<typeof Textarea> = {
    title: 'Forms/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
}
export default meta

type Story = StoryObj<typeof Textarea>

export const Basic: Story = {
    render: () => {
        const [value, setValue] = useState('')

        return (
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
                <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Basic textarea
                </h2>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    A simple controlled textarea with the default resizable behavior.
                </p>

                <div className="mt-4 space-y-2">
                    <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                        Notes
                    </label>
                    <Textarea
                        placeholder="Write a short note..."
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        rows={4}
                    />
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        This component uses Headless UI’s <code className="font-mono text-[0.7rem]">Textarea</code>{' '}
                        props under the hood.
                    </p>
                </div>
            </div>
        )
    },
}

export const WithValidationState: Story = {
    render: () => {
        const [value, setValue] = useState('This is too short')

        const isInvalid = value.trim().length < 20

        return (
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
                <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Validation state
                </h2>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Uses the <code className="font-mono text-[0.7rem]">data-invalid</code> attribute
                    to trigger error styles.
                </p>

                <div className="mt-4 space-y-2">
                    <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                        Feedback
                    </label>
                    <Textarea
                        placeholder="Tell us what you think..."
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        rows={4}
                        aria-invalid={isInvalid}
                        data-invalid={isInvalid ? 'true' : undefined}
                    />
                    <p
                        className={clsx(
                            'text-xs',
                            isInvalid
                                ? 'text-red-600 dark:text-red-400'
                                : 'text-zinc-500 dark:text-zinc-400'
                        )}
                    >
                        {isInvalid
                            ? 'Please provide at least 20 characters.'
                            : 'Looks good — thanks for the detailed feedback!'}
                    </p>
                </div>
            </div>
        )
    },
}

// Helper for the story above
import clsx from 'clsx'

export const DisabledAndNonResizable: Story = {
    render: () => (
        <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Disabled, non-resizable
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Set <code className="font-mono text-[0.7rem]">disabled</code> and{' '}
                <code className="font-mono text-[0.7rem]">resizable=false</code> to lock
                the control and prevent resizing.
            </p>

            <div className="mt-4 space-y-2">
                <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    Internal notes
                </label>
                <Textarea
                    disabled
                    resizable={false}
                    rows={3}
                    defaultValue="This textarea is disabled and cannot be resized."
                />
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Disabled state reduces opacity and adjusts the background subtly.
                </p>
            </div>
        </div>
    ),
}

export const OnDarkBackground: Story = {
    render: () => {
        const [value, setValue] = useState('')

        return (
            <div className="w-full max-w-md rounded-xl bg-zinc-900 p-6 text-left ring-1 ring-zinc-800">
                <h2 className="text-base font-semibold text-white">
                    Dark mode preview
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                    In dark mode, the background, border, and focus ring adapt to keep the
                    field legible and clear.
                </p>

                <div className="mt-4 space-y-2">
                    <label className="block text-sm font-medium text-white">
                        Comment
                    </label>
                    <Textarea
                        placeholder="Share your thoughts..."
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        rows={4}
                    />
                </div>
            </div>
        )
    },
}
