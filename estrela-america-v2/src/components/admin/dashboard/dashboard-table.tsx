'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Input } from '@/components/ui/input'
import { Products, useProducts } from '@/data/products-data'
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'

import { format } from 'date-fns'
import { ArrowUpDown } from 'lucide-react'
import DashboardActions from './dashboard-acions'
import DashboardFilters from './dashboard-filters'
import DashboardOperations from './dashboard-operations'
import { DashboardTableSkeleton } from './dashboard-table-skeleton'
import { DashboardAddProduct } from './product/dashboard-add-product'

export const columns: ColumnDef<Products>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Selecionar todos"
        className="ml-1.5"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Selecione a linha"
        className="ml-1.5"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'sku',
    header: 'SKU',
    cell: ({ row }) => (
      <div className="text-xs tracking-tighter">{row.getValue('sku')}</div>
    ),
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Produto
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'price',
    header: () => <div className="text-right">Preço</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'))

      const formatted = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: 'createdAt',
    header: () => (
      <div className="text-right text-xs sm:text-sm">Data de cadastro</div>
    ),
    cell: ({ row }) => {
      const createdAt = new Date(row.getValue('createdAt'))
      const formattedDate = format(createdAt, 'dd/MM/yyyy')

      return (
        <div className="text-right capitalize text-xs sm:text-sm">
          {formattedDate}
        </div>
      )
    },
  },
  {
    id: 'actions',
    header: () => (
      <div className="text-right text-xs sm:text-sm sm:pr-7">Ações</div>
    ),
    enableHiding: false,
    cell: ({ row }) => {
      const paymentId = row.original.sku
      const children = [
        <DashboardActions key="actions" paymentId={paymentId} />,
        <DashboardOperations key="operations" />,
      ]

      return (
        <div className="flex items-end justify-end text-black mr-3">
          {React.Children.map(children, (child) => child)}
        </div>
      )
    },
  },
]

export function DashboardTable() {
  const products: Products[] = useProducts()
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: products,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-4">
        <Input
          placeholder="Pesquisar produtos"
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
          className="max-w-sm placeholder:text-xs"
        />

        <div className="flex justify-end items-center gap-2">
          <DashboardAddProduct />
          <DashboardFilters table={table} />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-black">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="text-muted-foreground"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                {columns.length > 0 ? (
                  <TableCell colSpan={columns.length}>
                    <DashboardTableSkeleton />
                  </TableCell>
                ) : (
                  <TableCell colSpan={columns.length}>
                    Nenhum produto cadastrado
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de{' '}
          {table.getFilteredRowModel().rows.length} item(s) selecionado.
        </div>

        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  )
}
