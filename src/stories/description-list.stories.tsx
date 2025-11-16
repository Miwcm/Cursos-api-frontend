import type { Meta, StoryObj } from '@storybook/react'
import {
    DescriptionList,
    DescriptionTerm,
    DescriptionDetails,
} from '../components/description-list'

const meta: Meta<typeof DescriptionList> = {
    title: 'Components/DescriptionList',
    component: DescriptionList,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const UserProfile: Story = {
    render: () => (
        <div className="max-w-md rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
            <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                User Profile
            </h2>

            <DescriptionList>
                <DescriptionTerm>Full name</DescriptionTerm>
                <DescriptionDetails>Jane Doe</DescriptionDetails>

                <DescriptionTerm>Email</DescriptionTerm>
                <DescriptionDetails>jane.doe@example.com</DescriptionDetails>

                <DescriptionTerm>Role</DescriptionTerm>
                <DescriptionDetails>Product Designer</DescriptionDetails>

                <DescriptionTerm>Location</DescriptionTerm>
                <DescriptionDetails>Buenos Aires, Argentina</DescriptionDetails>

                <DescriptionTerm>Joined</DescriptionTerm>
                <DescriptionDetails>March 14, 2023</DescriptionDetails>
            </DescriptionList>
        </div>
    ),
}

export const ProjectSummary: Story = {
    render: () => (
        <div className="max-w-md rounded-lg border border-blue-200 bg-white p-4 shadow-sm dark:border-blue-900 dark:bg-zinc-900">
            <h2 className="mb-4 text-base font-semibold text-blue-700 dark:text-blue-300">
                Project Summary
            </h2>

            <DescriptionList>
                <DescriptionTerm>Project name</DescriptionTerm>
                <DescriptionDetails>Aurora Dashboard</DescriptionDetails>

                <DescriptionTerm>Status</DescriptionTerm>
                <DescriptionDetails>In progress</DescriptionDetails>

                <DescriptionTerm>Owner</DescriptionTerm>
                <DescriptionDetails>Michael Smith</DescriptionDetails>

                <DescriptionTerm>Last update</DescriptionTerm>
                <DescriptionDetails>Feb 10, 2025</DescriptionDetails>
            </DescriptionList>
        </div>
    ),
}

export const BillingDetails: Story = {
    render: () => (
        <div className="max-w-md rounded-lg border border-green-200 bg-white p-4 shadow-sm dark:border-green-900 dark:bg-zinc-900">
            <h2 className="mb-4 text-base font-semibold text-green-700 dark:text-green-300">
                Billing Details
            </h2>

            <DescriptionList>
                <DescriptionTerm>Plan</DescriptionTerm>
                <DescriptionDetails>Pro Monthly</DescriptionDetails>

                <DescriptionTerm>Next charge</DescriptionTerm>
                <DescriptionDetails>March 1, 2025</DescriptionDetails>

                <DescriptionTerm>Payment method</DescriptionTerm>
                <DescriptionDetails>Visa •••• 4421</DescriptionDetails>

                <DescriptionTerm>Amount</DescriptionTerm>
                <DescriptionDetails>$19.99</DescriptionDetails>
            </DescriptionList>
        </div>
    ),
}
