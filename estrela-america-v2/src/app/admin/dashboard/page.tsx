'use client'

import { DashboardHeader } from '@/components/admin/dashboard/dashboard-header'
import { DashboardTable } from '@/components/admin/dashboard/dashboard-table'
import { DashboardUploadImages } from '@/components/admin/dashboard/uploads/dashboard-upload-images'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ImageIcon, PackageSearch } from 'lucide-react'

const queryClient = new QueryClient()

export default function AdminDashboard() {
  return (
    <>
      <DashboardHeader />
      <div className="pt-16 px-5 max-w-7xl mx-auto w-full sm:pt-24 sm:px-0">
        <h1 className="inline-flex items-center gap-1.5 text-2xl font-bold py-4">
          Meu painel administrativo
        </h1>

        <Tabs defaultValue="productsTable" className="w-[400px] pt-6">
          <TabsList className="grid w-full grid-cols-2 ">
            <TabsTrigger
              value="productsTable"
              className="inline-flex items-center gap-1.5"
            >
              <PackageSearch className="size-4" />
              Produtos
            </TabsTrigger>
            <TabsTrigger
              value="imagesTable"
              className="inline-flex items-center gap-1.5"
            >
              <ImageIcon className="size-4" />
              Imagens
            </TabsTrigger>
          </TabsList>

          <div className="w-screen">
            <main className="max-w-7xl">
              <QueryClientProvider client={queryClient}>
                <TabsContent value="productsTable">
                  <DashboardTable />
                </TabsContent>

                <TabsContent value="imagesTable">
                  <DashboardUploadImages />
                </TabsContent>
              </QueryClientProvider>
            </main>
          </div>
        </Tabs>
      </div>
    </>
  )
}
