// Fieldset.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import {
    Fieldset,
    Legend,
    FieldGroup,
    Field,
    Label,
    Description,
    ErrorMessage,
} from '../components/fieldset' // ⬅️ update path if needed
import React from 'react'

const meta: Meta<typeof Fieldset> = {
    title: 'Components/Fieldset',
    component: Fieldset,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    render: () => (
        <div className="max-w-md rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
            <Fieldset>
                <Legend>Profile information</Legend>

                <FieldGroup>
                    <Field>
                        <Label htmlFor="name">Full name</Label>
                        <input
                            id="name"
                            data-slot="control"
                            className="mt-3 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                            placeholder="Jane Doe"
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="email">Email</Label>
                        <input
                            id="email"
                            type="email"
                            data-slot="control"
                            className="mt-3 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                            placeholder="jane.doe@example.com"
                        />
                    </Field>
                </FieldGroup>
            </Fieldset>
        </div>
    ),
}

export const WithDescription: Story = {
    render: () => (
        <div className="max-w-md rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
            <Fieldset>
                <Legend>Security</Legend>

                <FieldGroup>
                    <Field>
                        <Label htmlFor="password">Password</Label>
                        <Description>
                            Use at least 8 characters with a mix of letters, numbers, and symbols.
                        </Description>
                        <input
                            id="password"
                            type="password"
                            data-slot="control"
                            className="mt-3 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                            placeholder="••••••••"
                        />
                    </Field>
                </FieldGroup>
            </Fieldset>
        </div>
    ),
}

export const WithError: Story = {
    render: () => (
        <div className="max-w-md rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
            <Fieldset>
                <Legend>Billing</Legend>

                <FieldGroup>
                    <Field>
                        <Label htmlFor="card">Card number</Label>
                        <input
                            id="card"
                            data-slot="control"
                            className="mt-3 w-full rounded-md border border-red-500 px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-red-500/80 dark:bg-zinc-900 dark:text-white"
                            placeholder="1234 5678 9012 3456"
                        />
                        <ErrorMessage>Card number is invalid.</ErrorMessage>
                    </Field>
                </FieldGroup>
            </Fieldset>
        </div>
    ),
}
