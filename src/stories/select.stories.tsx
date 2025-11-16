// Select.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { useState, ChangeEvent } from 'react'
import { Select } from '../components/select' // ⬅️ adjust path if needed

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    render: () => {
        const [value, setValue] = useState('')

        const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
            setValue(event.target.value)
        }

        return (
            <div className="min-h-[260px] flex items-center justify-center bg-slate-900">
                <div className="w-full max-w-sm rounded-xl border border-slate-300 bg-white p-6 shadow-lg">
                    <label className="mb-2 block text-sm font-medium text-slate-900">
                        Country
                    </label>

                    <Select
                        value={value}
                        onChange={handleChange}
                        className="mb-3"
                    >
                        <option value="" disabled>
                            Select a country…
                        </option>
                        <option value="ar">Argentina</option>
                        <option value="br">Brazil</option>
                        <option value="cl">Chile</option>
                        <option value="uy">Uruguay</option>
                    </Select>

                    <p className="mt-2 text-sm text-slate-700">
                        Selected:{' '}
                        <span className="font-semibold text-slate-900">
              {value || 'None'}
            </span>
                    </p>
                </div>
            </div>
        )
    },
}

export const Multiple: Story = {
    render: () => {
        const [values, setValues] = useState<string[]>([])

        const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
            const selected = Array.from(
                event.target.selectedOptions,
            ).map((opt) => opt.value)
            setValues(selected)
        }

        return (
            <div className="min-h-[280px] flex items-center justify-center bg-slate-900">
                <div className="w-full max-w-sm rounded-xl border border-slate-300 bg-white p-6 shadow-lg">
                    <label className="mb-2 block text-sm font-medium text-slate-900">
                        Tags (multi-select)
                    </label>

                    <Select
                        multiple
                        value={values}
                        onChange={handleChange}
                        className="mb-3"
                    >
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="design">Design</option>
                        <option value="devops">DevOps</option>
                    </Select>

                    <p className="mt-2 text-sm text-slate-700">
                        Selected:{' '}
                        <span className="font-semibold text-slate-900">
              {values.length > 0 ? values.join(', ') : 'None'}
            </span>
                    </p>
                </div>
            </div>
        )
    },
}

export const Disabled: Story = {
    render: () => (
        <div className="min-h-[220px] flex items-center justify-center bg-slate-900">
            <div className="w-full max-w-sm rounded-xl border border-slate-300 bg-white p-6 shadow-lg">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                    Disabled select
                </label>

                <Select disabled defaultValue="ar">
                    <option value="ar">Argentina</option>
                    <option value="br">Brazil</option>
                    <option value="cl">Chile</option>
                </Select>

                <p className="mt-2 text-xs text-slate-500">
                    This select is disabled and cannot be changed.
                </p>
            </div>
        </div>
    ),
}
