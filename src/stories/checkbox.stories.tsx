import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import * as Headless from '@headlessui/react'
import {
    Checkbox,
    CheckboxField,
    CheckboxGroup,
} from '../components/checkbox'

//TODO: Mejorar

const colors = [
    'dark/zinc',
    'dark/white',
    'white',
    'dark',
    'zinc',
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
] as const

type CheckboxStoryProps = {
    color: (typeof colors)[number]
    disabled?: boolean
}

const meta: Meta<CheckboxStoryProps> = {
    title: 'Components/Checkbox',
    tags: ['autodocs'],
    args: {
        color: 'dark/zinc',
        disabled: false,
    },
    argTypes: {
        color: {
            control: 'select',
            options: colors,
        },
    },
}

export default meta

type Story = StoryObj<CheckboxStoryProps>

export const Basic: Story = {
    render: ({ color, disabled }) => {
        const [checked, setChecked] = useState(false)

        return (
            <CheckboxGroup className="max-w-sm space-y-2">
                <CheckboxField>
                    <Checkbox
                        color={color}
                        checked={checked}
                        disabled={disabled}
                        onChange={setChecked}
                    />
                    <Headless.Label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Enable notifications
                    </Headless.Label>
                </CheckboxField>
            </CheckboxGroup>
        )
    },
}

export const WithDescription: Story = {
    render: ({ color, disabled }) => {
        const [checked, setChecked] = useState(true)

        return (
            <CheckboxGroup className="max-w-sm">
                <CheckboxField>
                    <Checkbox
                        color={color}
                        checked={checked}
                        disabled={disabled}
                        onChange={setChecked}
                    />
                    <Headless.Label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Marketing emails
                    </Headless.Label>
                    <Headless.Description className="text-sm text-zinc-500 dark:text-zinc-400">
                        Get product updates, special offers, and more.
                    </Headless.Description>
                </CheckboxField>
            </CheckboxGroup>
        )
    },
}

export const GroupOfOptions: Story = {
    render: ({ color, disabled }) => {
        const [values, setValues] = useState<string[]>(['email'])

        const toggle = (value: string) => {
            setValues((prev) =>
                prev.includes(value)
                    ? prev.filter((v) => v !== value)
                    : [...prev, value]
            )
        }

        return (
            <CheckboxGroup className="max-w-sm space-y-3">
                {/* FIXED: these cannot be <Headless.Label> */}
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Notification channels
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                    Choose how you want to be notified.
                </p>

                <CheckboxField>
                    <Checkbox
                        color={color}
                        checked={values.includes('email')}
                        onChange={() => toggle('email')}
                        disabled={disabled}
                    />
                    <Headless.Label className="text-sm text-zinc-900 dark:text-zinc-100">
                        Email
                    </Headless.Label>
                    <Headless.Description className="text-sm text-zinc-500 dark:text-zinc-400">
                        We&apos;ll send emails to your account.
                    </Headless.Description>
                </CheckboxField>

                <CheckboxField>
                    <Checkbox
                        color={color}
                        checked={values.includes('sms')}
                        onChange={() => toggle('sms')}
                        disabled={disabled}
                    />
                    <Headless.Label className="text-sm text-zinc-900 dark:text-zinc-100">
                        SMS
                    </Headless.Label>
                    <Headless.Description className="text-sm text-zinc-500 dark:text-zinc-400">
                        Standard SMS rates may apply.
                    </Headless.Description>
                </CheckboxField>

                <CheckboxField>
                    <Checkbox
                        color={color}
                        checked={values.includes('push')}
                        onChange={() => toggle('push')}
                        disabled={disabled}
                    />
                    <Headless.Label className="text-sm text-zinc-900 dark:text-zinc-100">
                        Push notifications
                    </Headless.Label>
                    <Headless.Description className="text-sm text-zinc-500 dark:text-zinc-400">
                        Delivered instantly to your device.
                    </Headless.Description>
                </CheckboxField>
            </CheckboxGroup>
        )
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: ({ color, disabled }) => {
        const [checked, setChecked] = useState(true)

        return (
            <CheckboxGroup className="max-w-sm">
                <CheckboxField>
                    <Checkbox
                        color={color}
                        checked={checked}
                        disabled={disabled}
                        onChange={setChecked}
                    />
                    <Headless.Label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Disabled checkbox
                    </Headless.Label>
                    <Headless.Description className="text-sm text-zinc-500 dark:text-zinc-400">
                        This checkbox cannot be changed.
                    </Headless.Description>
                </CheckboxField>
            </CheckboxGroup>
        )
    },
}
