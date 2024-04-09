import type { Metadata } from 'next'
import AdminDashboard from './page'

export const metadata: Metadata = {
  title: 'Estrela América - Dashboard',
  description: 'Acesso de operador',
}

export default function AdminDashboardHead() {
  return <AdminDashboard />
}
