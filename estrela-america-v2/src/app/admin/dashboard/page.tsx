import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { DashboardTable } from '@/components/dashboard/dashboard-table'
import { Boxes } from 'lucide-react'

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
          <DashboardTable />
        </main>
      </div>
    </>
  )
}
