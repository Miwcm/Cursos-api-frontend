'use client'

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Text, TextLink, Strong, Code } from '../components/text'

const meta: Meta<typeof Text> = {
    title: 'Typography/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
}
export default meta

type Story = StoryObj<typeof Text>

export const Basic: Story = {
    render: () => (
        <div className="max-w-xl space-y-4 rounded-xl bg-white p-6 text-left shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
            <Text>
                This is the default <Strong>Text</Strong> component. It’s designed for
                body copy and long-form content, with sensible defaults for both light
                and dark mode.
            </Text>

            <Text>
                You can also include inline code like{' '}
                <Code>npm run dev</Code> or{' '}
                <Code>tailwind.config.ts</Code> to highlight technical terms without
                breaking the flow of the paragraph.
            </Text>

            <Text>
                Need to link somewhere? Use <TextLink href="#">TextLink</TextLink> to
                get underlined, theme-aware links that match your typography system.
            </Text>
        </div>
    ),
}

export const InlineExamples: Story = {
    render: () => (
        <div className="max-w-xl space-y-3 rounded-xl bg-white p-6 text-left shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
            <Text>
                <Strong>Strong</Strong> emphasizes important words or phrases in your
                copy without being too heavy-handed.
            </Text>

            <Text>
                <Code>Code</Code> is great for short identifiers, commands, or inline
                snippets – it uses a subtle background and border to stand out just
                enough.
            </Text>

            <Text>
                <TextLink href="#">TextLink</TextLink> renders a semantic link using
                your app’s <Code>Link</Code> component, with focus and hover styles that
                feel consistent across the design system.
            </Text>
        </div>
    ),
}

export const OnDarkBackground: Story = {
    render: () => (
        <div className="w-full max-w-xl rounded-xl bg-zinc-900 p-6 text-left ring-1 ring-zinc-800">
            <div className="space-y-3">
                <Text>
                    These components are built with dark mode in mind. On dark
                    backgrounds, the colors invert to maintain contrast and readability.
                </Text>

                <Text>
                    For example, <Strong>Strong</Strong> switches to a light color, and{' '}
                    <TextLink href="#">TextLink</TextLink> uses white with adjusted
                    underline decoration to stay legible.
                </Text>

                <Text>
                    Inline <Code>Code</Code> still looks like code, but the background and
                    border adapt to the darker surface.
                </Text>
            </div>
        </div>
    ),
}
