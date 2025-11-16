// Listbox.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
    Listbox,
    ListboxOption,
    ListboxLabel,
    ListboxDescription,
} from '../components/listbox' // ⬅️ adjust if needed

type User = {
    id: number
    name: string
    role: string
}

const users: User[] = [
    { id: 1, name: 'Sarah Connor', role: 'Admin' },
    { id: 2, name: 'John Carter', role: 'Editor' },
    { id: 3, name: 'Linda Shaw', role: 'Viewer' },
]

const meta: Meta<typeof Listbox> = {
    title: 'Components/Listbox',
    component: Listbox,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    render: () => {
        const [selected, setSelected] = useState<User>(users[0])

        return (
            <div className="min-h-[260px] flex items-center justify-center bg-slate-900">
                <div className="w-full max-w-sm rounded-lg border border-slate-300 bg-white p-6 shadow-lg">
                    <p className="mb-3 text-sm font-medium text-slate-800">
                        Select a user
                    </p>

                    <Listbox<User>
                        value={selected}
                        onChange={setSelected}
                        aria-label="Select user"
                        placeholder="Choose a user"
                    >
                        {users.map((user) => (
                            <ListboxOption<User> key={user.id} value={user}>
                                <ListboxLabel>{user.name}</ListboxLabel>
                            </ListboxOption>
                        ))}
                    </Listbox>

                    <p className="mt-4 text-sm text-slate-700">
                        Selected:{' '}
                        <span className="font-semibold text-slate-900">
              {selected.name}
            </span>
                    </p>
                </div>
            </div>
        )
    },
}

export const WithDescription: Story = {
    render: () => {
        const [selected, setSelected] = useState<User>(users[0])

        return (
            <div className="min-h-[260px] flex items-center justify-center bg-slate-900">
                <div className="w-full max-w-sm rounded-lg border border-slate-300 bg-white p-6 shadow-lg">
                    <p className="mb-3 text-sm font-medium text-slate-800">
                        Select a user with role description
                    </p>

                    <Listbox<User>
                        value={selected}
                        onChange={setSelected}
                        aria-label="Select user with description"
                        placeholder="Choose a user"
                    >
                        {users.map((user) => (
                            <ListboxOption<User> key={user.id} value={user}>
                                <div className="flex flex-col">
                                    <ListboxLabel>{user.name}</ListboxLabel>
                                    <ListboxDescription>{user.role}</ListboxDescription>
                                </div>
                            </ListboxOption>
                        ))}
                    </Listbox>

                    <p className="mt-4 text-sm text-slate-700">
                        Selected:{' '}
                        <span className="font-semibold text-slate-900">
              {selected.name} – {selected.role}
            </span>
                    </p>
                </div>
            </div>
        )
    },
}
