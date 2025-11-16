'use client'

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeader,
    TableCell,
} from '../components/table'

const meta: Meta<typeof Table> = {
    title: 'Data Display/Table',
    component: Table,
    parameters: {
        layout: 'centered',
    },
}
export default meta

type Story = StoryObj<typeof Table>

const invoices = [
    {
        id: 'INV-001',
        customer: 'Acme Inc.',
        amount: '$4,200.00',
        status: 'Paid',
        date: 'Jan 3, 2024',
        href: '#inv-001',
    },
    {
        id: 'INV-002',
        customer: 'Globex Corporation',
        amount: '$1,980.00',
        status: 'Pending',
        date: 'Jan 10, 2024',
        href: '#inv-002',
    },
    {
        id: 'INV-003',
        customer: 'Soylent Co.',
        amount: '$860.00',
        status: 'Overdue',
        date: 'Jan 14, 2024',
        href: '#inv-003',
    },
    {
        id: 'INV-004',
        customer: 'Initech',
        amount: '$2,450.00',
        status: 'Paid',
        date: 'Jan 22, 2024',
        href: '#inv-004',
    },
]

export const Basic: Story = {
    render: () => (
        <div className="w-full max-w-4xl rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
            <div className="flex items-baseline justify-between gap-4">
                <div>
                    <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                        Invoices
                    </h2>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        A basic table showcasing row links and the default spacing.
                    </p>
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
          {invoices.length} records
        </span>
            </div>

            <div className="mt-4">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Invoice</TableHeader>
                            <TableHeader>Customer</TableHeader>
                            <TableHeader>Amount</TableHeader>
                            <TableHeader>Status</TableHeader>
                            <TableHeader>Date</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow
                                key={invoice.id}
                                href={invoice.href}
                                title={`View details for ${invoice.id}`}
                            >
                                <TableCell>{invoice.id}</TableCell>
                                <TableCell>{invoice.customer}</TableCell>
                                <TableCell>{invoice.amount}</TableCell>
                                <TableCell>
                  <span
                      className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-zinc-200 dark:ring-zinc-700"
                  >
                    {invoice.status}
                  </span>
                                </TableCell>
                                <TableCell>{invoice.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    ),
}

export const StripedDense: Story = {
    render: () => (
        <div className="w-full max-w-4xl rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Compact, striped table
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Uses <code className="font-mono text-[0.7rem]">striped</code> and{' '}
                <code className="font-mono text-[0.7rem]">dense</code> for a tighter,
                high-density view.
            </p>

            <div className="mt-4">
                <Table striped dense>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Invoice</TableHeader>
                            <TableHeader>Customer</TableHeader>
                            <TableHeader>Amount</TableHeader>
                            <TableHeader>Status</TableHeader>
                            <TableHeader>Date</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow
                                key={invoice.id}
                                href={invoice.href}
                                title={`View details for ${invoice.id}`}
                            >
                                <TableCell>{invoice.id}</TableCell>
                                <TableCell>{invoice.customer}</TableCell>
                                <TableCell>{invoice.amount}</TableCell>
                                <TableCell>{invoice.status}</TableCell>
                                <TableCell>{invoice.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    ),
}

export const GridBleed: Story = {
    render: () => (
        <div className="w-full max-w-5xl rounded-xl bg-zinc-50 p-6 shadow-inner ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Grid table with bleed
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Demonstrates <code className="font-mono text-[0.7rem]">grid</code> and{' '}
                <code className="font-mono text-[0.7rem]">bleed</code> for a
                data-heavy layout that runs edge-to-edge on small screens.
            </p>

            <div className="mt-4">
                <Table grid bleed striped>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Invoice</TableHeader>
                            <TableHeader>Customer</TableHeader>
                            <TableHeader>Amount</TableHeader>
                            <TableHeader>Status</TableHeader>
                            <TableHeader>Date</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell>{invoice.id}</TableCell>
                                <TableCell>{invoice.customer}</TableCell>
                                <TableCell>{invoice.amount}</TableCell>
                                <TableCell>{invoice.status}</TableCell>
                                <TableCell>{invoice.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    ),
}
