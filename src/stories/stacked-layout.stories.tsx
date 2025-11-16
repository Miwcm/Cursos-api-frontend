'use client'

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { StackedLayout } from './stacked-layout'
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
} from './sidebar'

const meta: Meta<typeof StackedLayout> = {
    title: 'Layout/StackedLayout',
    component: StackedLayout,
    parameters: {
        layout: 'fullscreen',
    },
}
export default meta

type Story = StoryObj<typeof StackedLayout>

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

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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

const Avatar = () => (
    <img
        data-slot="avatar"
        src="https://avatars.githubusercontent.com/u/9919?v=4"
        alt="User avatar"
        className="rounded-full"
    />
)

function DemoNavbar() {
    return (
        <div className="flex items-center gap-4 py-3">
            <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
                    AC
                </div>
                <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold">Acme Admin</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Stacked layout
          </span>
                </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
                <button className="hidden rounded-full px-3 py-1.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50 dark:text-zinc-200 dark:ring-zinc-700 dark:hover:bg-zinc-800 lg:inline-flex">
                    Invite teammate
                </button>
                <button className="hidden rounded-full px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 lg:inline-flex">
                    New project
                </button>
            </div>
        </div>
    )
}

function DemoSidebar() {
    return (
        <Sidebar className="h-full">
            <SidebarHeader>
                <SidebarSection>
                    <SidebarHeading>Workspace</SidebarHeading>
                    <div className="px-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Acme Inc.
                    </div>
                </SidebarSection>
            </SidebarHeader>

            <SidebarBody>
                <SidebarSection>
                    <SidebarHeading>Overview</SidebarHeading>

                    <SidebarItem href="#" current>
                        <NavIcon />
                        <SidebarLabel>Dashboard</SidebarLabel>
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

                <SidebarSection>
                    <SidebarHeading>Projects</SidebarHeading>

                    <SidebarItem href="#">
                        <NavIcon />
                        <SidebarLabel>Website redesign</SidebarLabel>
                    </SidebarItem>

                    <SidebarItem href="#">
                        <NavIcon />
                        <SidebarLabel>Mobile app</SidebarLabel>
                        <ChevronRightIcon />
                    </SidebarItem>

                    <SidebarItem href="#">
                        <NavIcon />
                        <SidebarLabel>Internal tools</SidebarLabel>
                    </SidebarItem>
                </SidebarSection>
            </SidebarBody>

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
                        <ChevronRightIcon />
                    </SidebarItem>
                </SidebarSection>
            </SidebarFooter>
        </Sidebar>
    )
}

export const Default: Story = {
    render: () => (
        <StackedLayout navbar={<DemoNavbar />} sidebar={<DemoSidebar />}>
            <div className="space-y-6">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                        Example layout
                    </p>
                    <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                        Stacked layout with mobile sidebar
                    </h1>
                    <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
                        Resize the Storybook viewport down to a mobile width to see the
                        sidebar collapse into a slide-in panel using the menu button in the
                        header. On larger screens, the content is presented in a centered
                        card.
                    </p>
                </div>

                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                        <h2 className="mb-1 text-sm font-medium">Summary</h2>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                            Highlight key metrics and quick insights for your workspace.
                        </p>
                    </div>
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                        <h2 className="mb-1 text-sm font-medium">Activity</h2>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                            Recent changes, comments, and project updates in one place.
                        </p>
                    </div>
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                        <h2 className="mb-1 text-sm font-medium">Shortcuts</h2>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                            Quick links into frequently used views or actions.
                        </p>
                    </div>
                </section>
            </div>
        </StackedLayout>
    ),
}
