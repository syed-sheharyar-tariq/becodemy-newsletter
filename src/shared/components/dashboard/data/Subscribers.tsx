"use client"

import { useState } from "react"
import useSubscribersData from "@/shared/hooks/useSubscribersData"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react"
import { format } from "timeago.js"

export default function SubscribersData() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["2"]))
  const { data } = useSubscribersData()

  const columns = [
    { field: "id", label: "ID" },
    { field: "email", label: "Email" },
    { field: "createdAt", label: "Subscribed At" },
    { field: "source", label: "Source" },
    {
      field: "status",
      label: "Status",
    },
  ]

  const rows: subscribersDataTypes[] = []

  data?.forEach((i) => {
    rows.push({
      id: i?._id,
      email: i?.email,
      createdAt: format(i?.createdAt),
      source: i?.source,
      status: i?.status,
    })
  })
  return (
    <Table
      removeWrapper
      isStripped
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      selectionMode="multiple"
      className="mt-5"
      aria-label="Subscribers Data">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.field} className="bg-[#bcb5fc]">{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
