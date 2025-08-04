import { TableCell } from "@/components/ui/table"

// Generic renderer for list pages (Single, Rajshree, Choice)
export const renderListRowCells = (rowData: any, headers: { label: string; sortable: boolean }[]) => {
  return headers.map((header, cellIndex) => {
    let content: any = rowData[header.label.toLowerCase().replace(/\./g, "").replace(/\s/g, "")] // Basic mapping
    if (header.label === "Sr. No.") content = rowData.srNo
    if (header.label === "Date") content = rowData.date
    if (header.label === "Session") content = rowData.session
    if (header.label === "Group") content = rowData.group
    if (header.label === "Item") content = rowData.item
    if (header.label === "From") content = rowData.from
    if (header.label === "To") content = rowData.to
    if (header.label === "Ticket Name") content = rowData.ticketName
    if (header.label === "Qty.") content = rowData.qty
    if (header.label === "Amt.") content = rowData.amt
    if (header.label === "Total") content = rowData.total

    // For numerical columns (0-9), assume data is directly accessible by key '0', '1', etc.
    if (
      !isNaN(Number.parseInt(header.label)) &&
      Number.parseInt(header.label) >= 0 &&
      Number.parseInt(header.label) <= 9
    ) {
      content = rowData[`col${header.label}`] || "-" // Example: rowData.col0, rowData.col1
    }

    return (
      <TableCell key={cellIndex} className="text-gray-800 py-1 px-2 sm:px-3 text-center">
        {content || "-"}
      </TableCell>
    )
  })
}

// Renderer for Dear Single Result
export const renderDearSingleResultRowCells = (rowData: any, headers: { label: string; sortable: boolean }[]) => {
  return headers.map((header, cellIndex) => {
    let content: any
    switch (header.label) {
      case "Sr. No.":
        content = rowData.srNo
        break
      case "Date":
        content = rowData.date
        break
      case "Session":
        content = rowData.session
        break
      case "Dear-1st":
        content = rowData.d1
        break
      case "Dear-2nd":
        content = rowData.d2
        break
      case "Dear-3rd":
        content = rowData.d3
        break
      case "Dear-4th":
        content = rowData.d4
        break
      case "Dear-5th Last":
        content = rowData.d5
        break
      default:
        content = "-"
    }
    return (
      <TableCell key={cellIndex} className="font-bold text-gray-800 py-1 px-2 sm:px-3 text-center">
        {content}
      </TableCell>
    )
  })
}

// Renderer for Rajshree Punjab Result
export const renderRajshreePunjabResultRowCells = (rowData: any, headers: { label: string; sortable: boolean }[]) => {
  return headers.map((header, cellIndex) => {
    let content: any
    switch (header.label) {
      case "Sr. No.":
        content = rowData.srNo
        break
      case "Date":
        content = rowData.date
        break
      case "Session":
        content = rowData.session
        break
      case "Rajshree-1st":
        content = rowData.r1
        break
      case "Rajshree-2nd":
        content = rowData.r2
        break
      case "Rajshree-3rd":
        content = rowData.r3
        break
      case "Rajshree-4th":
        content = rowData.r4
        break
      case "Rajshree-5th Last":
        content = rowData.r5
        break
      default:
        content = "-"
    }
    return (
      <TableCell key={cellIndex} className="font-bold text-gray-800 py-1 px-2 sm:px-3 text-center">
        {content}
      </TableCell>
    )
  })
}

// Generic renderer for report pages (currently no data, so just placeholder)
export const renderReportRowCells = (rowData: any, headers: { label: string; sortable: boolean }[]) => {
  return headers.map((header, cellIndex) => (
    <TableCell key={cellIndex} className="text-center py-1 px-2 sm:px-3 text-gray-500">
      -
    </TableCell>
  ))
}
