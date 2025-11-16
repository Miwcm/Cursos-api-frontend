import type { Meta, StoryObj } from '@storybook/react'
import {
    Dropdown,
    DropdownButton,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
    DropdownHeading,
    DropdownDivider,
    DropdownDescription,
    DropdownShortcut,
} from '../components/dropdown' // ⬅️ update path if needed
import { Button } from '../components/button' // ⬅️ update path if needed

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    render: () => (
        <div className="flex h-40 items-center justify-center">
            <Dropdown>
                <DropdownButton as={Button}>
                    Open menu
                </DropdownButton>

                <DropdownMenu>
                    <DropdownItem onClick={() => alert('Profile clicked')}>
                        Profile
                    </DropdownItem>
                    <DropdownItem onClick={() => alert('Settings clicked')}>
                        Settings
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem onClick={() => alert('Sign out clicked')}>
                        Sign out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    ),
}

export const WithSectionsAndShortcuts: Story = {
    render: () => (
        <div className="flex h-60 items-center justify-center">
            <Dropdown>
                <DropdownButton as={Button}>
                    Commands
                </DropdownButton>

                <DropdownMenu anchor="bottom">
                    <DropdownSection>
                        <DropdownHeading>
                            Navigation
                        </DropdownHeading>

                        <DropdownItem onClick={() => alert('Go to dashboard')}>
                            <DropdownDescription>
                                Go to dashboard
                            </DropdownDescription>
                            <DropdownShortcut keys={['G', 'D']} />
                        </DropdownItem>

                        <DropdownItem onClick={() => alert('Go to profile')}>
                            <DropdownDescription>
                                Open profile
                            </DropdownDescription>
                            <DropdownShortcut keys={['G', 'P']} />
                        </DropdownItem>
                    </DropdownSection>

                    <DropdownDivider />

                    <DropdownSection>
                        <DropdownHeading>
                            Account
                        </DropdownHeading>

                        <DropdownItem onClick={() => alert('Open settings')}>
                            <DropdownDescription>
                                Account settings
                            </DropdownDescription>
                            <DropdownShortcut keys={['⌘', ',']} />
                        </DropdownItem>

                        <DropdownItem onClick={() => alert('Sign out')}>
                            <DropdownDescription>
                                Sign out
                            </DropdownDescription>
                            <DropdownShortcut keys={['⇧', '⌘', 'Q']} />
                        </DropdownItem>
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>
        </div>
    ),
}
