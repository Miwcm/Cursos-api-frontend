// Navbar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import {
    Navbar,
    NavbarSection,
    NavbarSpacer,
    NavbarDivider,
    NavbarItem,
    NavbarLabel,
} from '../components/navbar'

const meta: Meta<typeof Navbar> = {
    title: 'Components/Navbar',
    component: Navbar,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <BrowserRouter>
            <div className="min-h-[200px] flex items-center justify-center bg-slate-900">
                <div className="w-full max-w-3xl rounded-xl border border-slate-700 bg-white/95 px-4 shadow-lg dark:bg-zinc-900">
                    <Navbar>
                        {/* Left section: brand + main links */}
                        <NavbarSection>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                MyApp
              </span>

                            <NavbarDivider />

                            <NavbarItem href="/" current>
                                <NavbarLabel>Home</NavbarLabel>
                            </NavbarItem>

                            <NavbarItem href="/projects">
                                <NavbarLabel>Projects</NavbarLabel>
                            </NavbarItem>

                            <NavbarItem href="/team">
                                <NavbarLabel>Team</NavbarLabel>
                            </NavbarItem>
                        </NavbarSection>

                        {/* Spacer pushes right section to the edge */}
                        <NavbarSpacer />

                        {/* Right section: account / action */}
                        <NavbarSection>
                            <NavbarItem
                                onClick={() => alert('Notifications clicked')}
                                type="button"
                            >
                                <NavbarLabel>Notifications</NavbarLabel>
                            </NavbarItem>

                            <NavbarItem href="/profile">
                                <NavbarLabel>Profile</NavbarLabel>
                            </NavbarItem>
                        </NavbarSection>
                    </Navbar>
                </div>
            </div>
        </BrowserRouter>
    ),
}
