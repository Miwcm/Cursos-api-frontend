// RadioGroup.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import * as Headless from '@headlessui/react'
import React, { useState } from 'react'

import {
    RadioGroup,
    RadioField,
    Radio,
} from '../components/radio' // ⬅️ adjust filename/path if needed

const meta: Meta<typeof RadioGroup> = {
    title: 'Components/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

type Plan = 'starter' | 'pro' | 'business'

export const Basic: Story = {
    render: () => {
        const [selected, setSelected] = useState<Plan>('starter')

        const handleChange = (value: string) => {
            setSelected(value as Plan)
        }

        return (
            <div className="min-h-[260px] flex items-center justify-center bg-slate-900">
                <div className="w-full max-w-md rounded-xl border border-slate-300 bg-white p-6 shadow-lg">
                    <h2 className="mb-4 text-base font-semibold text-slate-900">
                        Choose a plan
                    </h2>

                    <RadioGroup value={selected} onChange={handleChange}>
                        <RadioField>
                            <Radio value="starter" color="blue" />
                            <Headless.Label
                                data-slot="label"
                                className="text-sm text-slate-900 dark:text-white"
                            >
                                Starter
                            </Headless.Label>
                        </RadioField>

                        <RadioField>
                            <Radio value="pro" color="emerald" />
                            <Headless.Label
                                data-slot="label"
                                className="text-sm text-slate-900 dark:text-white"
                            >
                                Pro
                            </Headless.Label>
                        </RadioField>

                        <RadioField>
                            <Radio value="business" color="violet" />
                            <Headless.Label
                                data-slot="label"
                                className="text-sm text-slate-900 dark:text-white"
                            >
                                Business
                            </Headless.Label>
                        </RadioField>
                    </RadioGroup>

                    <p className="mt-4 text-sm text-slate-700">
                        Selected:{' '}
                        <span className="font-semibold text-slate-900">
              {selected}
            </span>
                    </p>
                </div>
            </div>
        )
    },
}

export const WithDescription: Story = {
    render: () => {
        const [selected, setSelected] = useState<Plan>('pro')

        const handleChange = (value: string) => {
            setSelected(value as Plan)
        }

        return (
            <div className="min-h-[280px] flex items-center justify-center bg-slate-900">
                <div className="w-full max-w-md rounded-xl border border-slate-300 bg-white p-6 shadow-lg">
                    <h2 className="mb-4 text-base font-semibold text-slate-900">
                        Choose a plan with details
                    </h2>

                    <RadioGroup value={selected} onChange={handleChange}>
                        <RadioField>
                            <Radio value="starter" color="zinc" />
                            <Headless.Label
                                data-slot="label"
                                className="text-sm text-slate-900 dark:text-white"
                            >
                                Starter
                            </Headless.Label>
                            <Headless.Description
                                data-slot="description"
                                className="text-xs text-slate-500 dark:text-slate-300"
                            >
                                Good for trying things out.
                            </Headless.Description>
                        </RadioField>

                        <RadioField>
                            <Radio value="pro" color="emerald" />
                            <Headless.Label
                                data-slot="label"
                                className="text-sm text-slate-900 dark:text-white"
                            >
                                Pro
                            </Headless.Label>
                            <Headless.Description
                                data-slot="description"
                                className="text-xs text-slate-500 dark:text-slate-300"
                            >
                                Best for growing teams.
                            </Headless.Description>
                        </RadioField>

                        <RadioField>
                            <Radio value="business" color="indigo" />
                            <Headless.Label
                                data-slot="label"
                                className="text-sm text-slate-900 dark:text-white"
                            >
                                Business
                            </Headless.Label>
                            <Headless.Description
                                data-slot="description"
                                className="text-xs text-slate-500 dark:text-slate-300"
                            >
                                Advanced features and priority support.
                            </Headless.Description>
                        </RadioField>
                    </RadioGroup>

                    <p className="mt-4 text-sm text-slate-700">
                        Selected:{' '}
                        <span className="font-semibold text-slate-900">
              {selected}
            </span>
                    </p>
                </div>
            </div>
        )
    },
}
