import type { Meta, StoryObj } from '@storybook/react'
import {
    Alert,
    AlertActions,
    AlertBody,
    AlertDescription,
    AlertTitle,
} from '../components/alert'
import { Button } from '../components/button'
import {useState} from "react";

// Define the custom props for story content
interface AlertStoryContentProps {
    title?: string
    description?: string
    bodyContent?: React.ReactNode
}

// Combine component props with custom content props
const meta: Meta<typeof Alert & AlertStoryContentProps> = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // Component Props
        size: {
            control: 'select',
            options: [
                'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl',
            ],
        },
        // Custom Content Props
        title: { control: 'text' },
        // Hide component props
        open: { table: { disable: true } },
        onClose: { table: { disable: true } },
        children: { table: { disable: true } },
    },
}

export default meta
type Story = StoryObj<typeof meta>

// Base template for all stories
const AlertTemplate: Story['render'] = (args) => {
    const [isOpen, setIsOpen] = useState(false)

    // This line now works because 'args' is correctly typed
    const { title, ...alertProps } = args

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Alert</Button>

            <Alert {...alertProps} open={isOpen} onClose={() => setIsOpen(false)}>
                {title && <AlertTitle>{title}</AlertTitle>}
                {title && <AlertDescription>{title}</AlertDescription>}
                {title && <AlertBody>{title}</AlertBody>}

                <AlertActions>
                    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button onClick={() => setIsOpen(false)}>OK</Button>
                </AlertActions>
            </Alert>
        </>
    )
}

// ### Primary Story ###
export const Primary: Story = {
    args: {
        size: 'md',
        title: 'Payment Successful',
    },
    render: AlertTemplate,
}