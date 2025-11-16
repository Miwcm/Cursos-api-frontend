'use client'

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import {
    Sidebar,
    SidebarHeader,
    SidebarBody,
    SidebarFooter,
    SidebarSection,
    SidebarHeading,
    SidebarItem,
    SidebarLabel,
    SidebarDivider,
    SidebarSpacer,
} from './sidebar'

const meta: Meta<typeof Sidebar> = {
    title: 'Layout/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
}
export default meta

type Story = StoryObj<typeof Sidebar>

function NavIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            data-slot="icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            {...props}
        >
            <path d="M4 5h16v3H4zM4 10.5h10v3H4zM4 16h7v3H4z" />
        </svg>
    )
}

function ChevronIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            data-slot="icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            {...props}
        >
            <path d="M9 6l6 6-6 6" />
        </svg>
    )
}

const avatarUrl =
    'https://avatars.githubusercontent.com/u/00000000?v=4' // replace with whatever in your app

const Avatar = () => (
    <img
        data-slot="avatar"
        src={avatarUrl}
        alt="User avatar"
        className="rounded-full"
    />
)

export const Default: Story = {
    render: (args) => (
        <div className="flex h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-white">
            <Sidebar
                {...args}
                className="w-72 border-r border-zinc-950/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-zinc-900/70"
            >
                {/* HEADER */}
                <SidebarHeader>
                    <div className="flex items-center gap-3 px-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
                            AC
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">Acme Corp</span>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Dashboard
              </span>
                        </div>
                    </div>
                </SidebarHeader>

                {/* BODY */}
                <SidebarBody>
                    {/* MAIN NAV */}
                    <SidebarSection>
                        <SidebarHeading>Overview</SidebarHeading>

                        <SidebarItem href="#" current>
                            <NavIcon />
                            <SidebarLabel>Home</SidebarLabel>
                        </SidebarItem>

                        <SidebarItem href="#">
                            <NavIcon />
                            <SidebarLabel>Analytics</SidebarLabel>
                        </SidebarItem>

                        <SidebarItem href="#">
                            <NavIcon />
                            <SidebarLabel>Activity</SidebarLabel>
                        </SidebarItem>
                    </SidebarSection>

                    <SidebarDivider />

                    {/* SECONDARY NAV */}
                    <SidebarSection>
                        <SidebarHeading>Projects</SidebarHeading>

                        <SidebarItem href="#">
                            <NavIcon />
                            <SidebarLabel>Website redesign</SidebarLabel>
                        </SidebarItem>

                        <SidebarItem href="#">
                            <NavIcon />
                            <SidebarLabel>Mobile app</SidebarLabel>
                            <ChevronIcon />
                        </SidebarItem>

                        <SidebarItem href="#">
                            <NavIcon />
                            <SidebarLabel>Sales enablement</SidebarLabel>
                        </SidebarItem>
                    </SidebarSection>

                    <SidebarSpacer />

                    {/* BUTTON-STYLE ITEMS (no href) */}
                    <SidebarSection>
                        <SidebarHeading>Actions</SidebarHeading>

                        <SidebarItem
                            onClick={() => {
                                // This is just for demo; in a real story you could use actions addon
                                // eslint-disable-next-line no-console
                                console.log('Create project clicked')
                            }}
                        >
                            <NavIcon />
                            <SidebarLabel>New project</SidebarLabel>
                        </SidebarItem>
                    </SidebarSection>
                </SidebarBody>

                {/* FOOTER */}
                <SidebarFooter>
                    <SidebarSection>
                        <SidebarItem href="#">
                            <Avatar />
                            <div className="flex flex-col text-left">
                <span className="truncate text-sm font-medium">
                  Jane Doe
                </span>
                                <span className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                  jane.doe@example.com
                </span>
                            </div>
                            <ChevronIcon />
                        </SidebarItem>
                    </SidebarSection>
                </SidebarFooter>
            </Sidebar>

            {/* Fake main content area */}
            <main className="flex-1 p-8">
                <h1 className="mb-2 text-2xl font-semibold">Main content</h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    This area is just here so you can see how the sidebar looks next to your
                    app content in fullscreen layout.
                </p>
            </main>
        </div>
    ),
}
