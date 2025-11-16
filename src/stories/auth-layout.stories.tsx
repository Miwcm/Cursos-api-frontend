import type { Meta, StoryObj } from '@storybook/react'
import { AuthLayout } from '../components/auth-layout' // <- update path if different

const meta: Meta<typeof AuthLayout> = {
    title: 'Layout/AuthLayout',
    component: AuthLayout,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        // We control children manually in the story
        children: { table: { disable: true } },
    },
    tags: ['autodocs'],
}

//TODO:arreglar

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <AuthLayout>
            <div className="w-full max-w-sm space-y-6">
                <header className="space-y-1 text-center">
                    <h1 className="text-xl font-semibold tracking-tight">
                        Sign in to your account
                    </h1>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Use your email and password to continue.
                    </p>
                </header>

                <form className="space-y-4">
                    <div className="space-y-1">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-zinc-800 dark:text-zinc-100"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="block w-full rounded-md border border-zinc-300 px-3 py-2 text-sm shadow-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="space-y-1">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-zinc-800 dark:text-zinc-100"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="block w-full rounded-md border border-zinc-300 px-3 py-2 text-sm shadow-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                        Sign in
                    </button>
                </form>

                <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </AuthLayout>
    ),
}
