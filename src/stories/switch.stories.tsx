'use client'

import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import * as Headless from '@headlessui/react'

import { Switch, SwitchGroup, SwitchField } from '../components/switch'

const meta: Meta<typeof Switch> = {
    title: 'Forms/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
}
export default meta

type Story = StoryObj<typeof Switch>

export const SettingsExample: Story = {
    render: () => {
        const [notifications, setNotifications] = useState(true)
        const [marketing, setMarketing] = useState(false)

        return (
            <div className="max-w-md rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
                <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Notification settings
                </h2>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Choose which kinds of updates you’d like to receive.
                </p>

                <div className="mt-6">
                    <SwitchGroup>
                        {/* With description */}
                        <SwitchField>
                            <Headless.Label
                                data-slot="label"
                                className="text-sm text-zinc-900 dark:text-zinc-50"
                            >
                                Email notifications
                            </Headless.Label>

                            <Switch
                                checked={notifications}
                                onChange={setNotifications}
                                color="dark/zinc"
                            />

                            <Headless.Description
                                data-slot="description"
                                className="text-xs text-zinc-500 dark:text-zinc-400"
                            >
                                Get notified when something important happens in your account.
                            </Headless.Description>
                        </SwitchField>

                        {/* Without description */}
                        <SwitchField className="mt-4">
                            <Headless.Label
                                data-slot="label"
                                className="text-sm text-zinc-900 dark:text-zinc-50"
                            >
                                Marketing emails
                            </Headless.Label>

                            <Switch
                                checked={marketing}
                                onChange={setMarketing}
                                color="blue"
                            />
                        </SwitchField>
                    </SwitchGroup>
                </div>
            </div>
        )
    },
}

type SwitchColor = React.ComponentProps<typeof Switch>['color']

const colorOptions: SwitchColor[] = [
    'dark/zinc',
    'dark/white',
    'dark',
    'zinc',
    'white',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
]

function ColorRow({ color }: { color: SwitchColor }) {
    const [enabled, setEnabled] = useState(true)

    return (
        <SwitchField>
            <Headless.Label
                data-slot="label"
                className="text-sm text-zinc-900 dark:text-zinc-50"
            >
                {color}
            </Headless.Label>

            <Switch
                color={color}
                checked={enabled}
                onChange={setEnabled}
            />

            <Headless.Description
                data-slot="description"
                className="text-xs text-zinc-500 dark:text-zinc-400"
            >
                Preview of the <code className="font-mono text-[0.7rem]">{color}</code>{' '}
                color theme.
            </Headless.Description>
        </SwitchField>
    )
}

export const ColorsShowcase: Story = {
    render: () => (
        <div className="max-w-xl space-y-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Switch color palette
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                All available <code className="font-mono text-[0.7rem]">color</code>{' '}
                variants rendered inside a field layout.
            </p>

            <div className="mt-4 space-y-5">
                <SwitchGroup>
                    {colorOptions.map((color) => (
                        <ColorRow key={color} color={color} />
                    ))}
                </SwitchGroup>
            </div>
        </div>
    ),
}
