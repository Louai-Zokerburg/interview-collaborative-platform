"use client"

import { ColumnDef } from "@tanstack/react-table"

import Link from "next/link"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

export type Interview = {
    id: string
    title: string;
    creator: string;
    createdAt: string;
    language: string;
}

export const columns: ColumnDef<Interview>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => {
            const interview = row.original
            return <Link href={`/dashboard/interviews/${interview.id}`} className="font-bold !text-primary">{row.getValue("title")}</Link>
        },
    },
    {
        accessorKey: "creator",
        header: "Creator",
        cell: ({ row }) => {
            return <div className="capitalize">{row.getValue("creator")}</div>
        },
    },
    {
        accessorKey: "language",
        header: "Language",
        cell: ({ row }) => {
            return <div className="capitalize">{row.getValue("language")}</div>
        },
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Created At
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("createdAt")}</div>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const interview = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(interview.id)}
                        >
                            Copy Interview ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href={`/dashboard/interviews/${interview.id}`} target="_blank">Open in new tab</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Delete Interview</DropdownMenuItem>
                        <DropdownMenuItem>Edit Interview</DropdownMenuItem>
                        <DropdownMenuItem>Invite User</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]