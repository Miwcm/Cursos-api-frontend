// Pagination.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import {
    Pagination,
    PaginationPrevious,
    PaginationNext,
    PaginationList,
    PaginationPage,
    PaginationGap,
} from '../components/pagination'

const meta: Meta<typeof Pagination> = {
    title: 'Components/Pagination',
    component: Pagination,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    render: () => (
        <BrowserRouter>
            <div className="min-h-[220px] flex items-center justify-center bg-slate-900">
                <div className="w-full max-w-lg rounded-xl border border-slate-600 bg-white p-6 shadow-lg">
                    <div className="mb-4 text-sm text-slate-700">
                        Showing <span className="font-semibold">page 1</span> of 5
                    </div>

                    <Pagination aria-label="Basic pagination">
                        <PaginationPrevious href={null} />

                        <PaginationList>
                            <PaginationPage href="/page/1" current>
                                1
                            </PaginationPage>
                            <PaginationPage href="/page/2">2</PaginationPage>
                            <PaginationPage href="/page/3">3</PaginationPage>
                            <PaginationGap />
                            <PaginationPage href="/page/5">5</PaginationPage>
                        </PaginationList>

                        <PaginationNext href="/page/2" />
                    </Pagination>
                </div>
            </div>
        </BrowserRouter>
    ),
}

export const MiddlePage: Story = {
    render: () => (
        <BrowserRouter>
            <div className="min-h-[220px] flex items-center justify-center bg-slate-900">
                <div className="w-full max-w-lg rounded-xl border border-slate-600 bg-white p-6 shadow-lg">
                    <div className="mb-4 text-sm text-slate-700">
                        Showing <span className="font-semibold">page 3</span> of 10
                    </div>

                    <Pagination aria-label="Pagination on middle page">
                        <PaginationPrevious href="/page/2" />

                        <PaginationList>
                            <PaginationPage href="/page/1">1</PaginationPage>
                            <PaginationGap />
                            <PaginationPage href="/page/2">2</PaginationPage>
                            <PaginationPage href="/page/3" current>
                                3
                            </PaginationPage>
                            <PaginationPage href="/page/4">4</PaginationPage>
                            <PaginationGap />
                            <PaginationPage href="/page/10">10</PaginationPage>
                        </PaginationList>

                        <PaginationNext href="/page/4" />
                    </Pagination>
                </div>
            </div>
        </BrowserRouter>
    ),
}
