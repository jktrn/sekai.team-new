'use client'

import { ColumnDef } from '@tanstack/react-table'
import type { ContestData } from './contestsData'
import clsx from 'clsx'

export const columns: ColumnDef<ContestData>[] = [
  {
    accessorKey: 'place',
    header: 'Place',
    cell: ({ row }) => {
      return (
        <div className="ribbon">
          <p className="relative text-center">{row.original.place}</p>
        </div>
      )
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      return <p>{row.original.name}</p>
    },
  },
  {
    accessorKey: 'startDate',
    header: 'Date',
    cell: ({ row }) => {
      // @ts-ignore
      const date = new Date(row.original.endDate).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      })
      return <p>{date}</p>
    },
  },
  {
    accessorKey: 'ctfPoints',
    header: 'Points',
    cell: ({ row }) => {
      return <p>{row.original.ctfPoints}</p>
    },
  },
  {
    accessorKey: 'ctftimeRating',
    header: 'Rating',
    cell: ({ row }) => {
      return (
        <p>
          {row.original.ctftimeRating !== undefined &&
            row.original.ctftimeRating.toFixed(2)}
        </p>
      )
    },
  },
]
