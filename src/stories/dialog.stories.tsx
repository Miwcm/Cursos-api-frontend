import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogDescription,
    DialogBody,
    DialogActions,
} from '../components/dialog' // ⬅️ adjust path if needed
import { Button } from '../components/button' // ⬅️ adjust path if needed

const meta: Meta<typeof Dialog> = {
    title: 'Components/Dialog',
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj

// 1) Basic Dialog
export const Basic: Story = {
    render: () => {
        const [open, setOpen] = useState(false)

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>

                <Dialog open={open} onClose={setOpen}>
                    <DialogTitle>Simple Dialog</DialogTitle>

                    <DialogBody>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            This is a very simple dialog with minimal content.
                        </p>
                    </DialogBody>

                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    },
}

// 2) Dialog With Description
export const WithDescription: Story = {
    render: () => {
        const [open, setOpen] = useState(false)

        return (
            <>
                <Button onClick={() => setOpen(true)}>Show Info</Button>

                <Dialog open={open} onClose={setOpen}>
                    <DialogTitle>Account Update</DialogTitle>

                    <DialogDescription>
                        Your account information has been successfully updated.
                    </DialogDescription>

                    <DialogBody>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            You may now continue browsing or close this message.
                        </p>
                    </DialogBody>

                    <DialogActions>
                        {/* No variant prop */}
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button onClick={() => setOpen(false)}>Confirm</Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    },
}

// 3) Dialog Size Variants
export const Sizes: Story = {
    render: () => {
        const [open, setOpen] = useState(false)
        const [size, setSize] = useState<
            'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
        >('lg')

        const sizes: typeof size[] = ['xs','sm','md','lg','xl','2xl','3xl','4xl','5xl']

        return (
            <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {sizes.map((s) => (
                        <Button
                            key={s}
                            onClick={() => {
                                setSize(s)
                                setOpen(true)
                            }}
                        >
                            {`Open ${s.toUpperCase()}`}
                        </Button>
                    ))}
                </div>

                <Dialog size={size} open={open} onClose={setOpen}>
                    <DialogTitle>Dialog Size: {size.toUpperCase()}</DialogTitle>

                    <DialogBody>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            This dialog demonstrates the <strong>{size}</strong> size option.
                        </p>
                    </DialogBody>

                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    },
}
