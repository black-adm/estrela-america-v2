'use client'

import { DashboardHeader } from '@/components/admin/dashboard/dashboard-header'
import { DashboardTable } from '@/components/admin/dashboard/dashboard-table'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Boxes } from 'lucide-react'

const queryClient = new QueryClient()

export default function AdminDashboard() {
  return (
    <>
      <DashboardHeader />
      <div className="w-screen h-full">
        <main className="pt-16 px-5 max-w-7xl mx-auto w-full sm:pt-24 sm:px-0">
          <h1 className="inline-flex items-center gap-1.5 text-2xl font-bold">
            Meus produtos
            <Boxes />
          </h1>
          <QueryClientProvider client={queryClient}>
            <DashboardTable />
          </QueryClientProvider>
        </main>
      </div>
    </>
  )
}
