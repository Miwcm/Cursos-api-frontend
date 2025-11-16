import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
    Combobox,
    ComboboxOption,
    ComboboxLabel,
    ComboboxDescription,
} from '../components/combobox'

type User = {
    id: number
    name: string
    email: string
}

const users: User[] = [
    { id: 1, name: 'Sarah Connor', email: 'sarah@example.com' },
    { id: 2, name: 'John Carter', email: 'john@example.com' },
    { id: 3, name: 'Linda Shaw', email: 'linda@example.com' },
    { id: 4, name: 'Mike Brown', email: 'mike@example.com' },
]

const meta: Meta = {
    title: 'Components/Combobox',
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj

export const Basic: Story = {
    render: () => {
        const [selected, setSelected] = useState<User | null>(null)

        return (
            <div className="w-80">
                <Combobox<User>
                    value={selected}
                    onChange={(value) => setSelected(value)}
                    options={users}
                    placeholder="Select a user"
                    displayValue={(user) => user?.name}
                >
                    {(user) => (
                        <ComboboxOption key={user.id} value={user}>
                            <ComboboxLabel>{user.name}</ComboboxLabel>
                        </ComboboxOption>
                    )}
                </Combobox>
            </div>
        )
    },
}

export const WithDescription: Story = {
    render: () => {
        const [selected, setSelected] = useState<User | null>(null)

        return (
            <div className="w-80">
                <Combobox<User>
                    value={selected}
                    onChange={(value) => setSelected(value)}
                    options={users}
                    placeholder="Search users..."
                    displayValue={(user) => user?.name}
                >
                    {(user) => (
                        <ComboboxOption key={user.id} value={user}>
                            <div className="flex flex-col">
                                <ComboboxLabel>{user.name}</ComboboxLabel>
                                <ComboboxDescription>{user.email}</ComboboxDescription>
                            </div>
                        </ComboboxOption>
                    )}
                </Combobox>
            </div>
        )
    },
}

export const CustomFilter: Story = {
    render: () => {
        const [selected, setSelected] = useState<User | null>(null)

        return (
            <div className="w-80">
                <Combobox<User>
                    value={selected}
                    onChange={(value) => setSelected(value)}
                    options={users}
                    placeholder="Filter by email"
                    displayValue={(user) => user?.name}
                    filter={(option, query) =>
                        option.email.toLowerCase().includes(query.toLowerCase())
                    }
                >
                    {(user) => (
                        <ComboboxOption key={user.id} value={user}>
                            <div>
                                <ComboboxLabel>{user.name}</ComboboxLabel>
                                <ComboboxDescription>{user.email}</ComboboxDescription>
                            </div>
                        </ComboboxOption>
                    )}
                </Combobox>
            </div>
        )
    },
}

export const Disabled: Story = {
    render: () => {
        const [selected] = useState<User | null>(users[0])

        return (
            <div className="w-80">
                <Combobox<User>
                    value={selected}
                    onChange={() => {
                        // no-op since it's disabled
                    }}
                    options={users}
                    placeholder="Disabled combobox"
                    displayValue={(user) => user?.name}
                    disabled
                >
                    {(user) => (
                        <ComboboxOption key={user.id} value={user}>
                            <ComboboxLabel>{user.name}</ComboboxLabel>
                        </ComboboxOption>
                    )}
                </Combobox>
            </div>
        )
    },
}

export const AnchorTop: Story = {
    render: () => {
        const [selected, setSelected] = useState<User | null>(null)

        return (
            <div className="w-80 mt-48">
                <Combobox<User>
                    value={selected}
                    onChange={(value) => setSelected(value)}
                    options={users}
                    anchor="top"
                    placeholder="Opens upward"
                    displayValue={(user) => user?.name}
                >
                    {(user) => (
                        <ComboboxOption key={user.id} value={user}>
                            <ComboboxLabel>{user.name}</ComboboxLabel>
                        </ComboboxOption>
                    )}
                </Combobox>
            </div>
        )
    },
}
