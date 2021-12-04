import React from "react";
import { useTable } from "react-table";
import TableView from "./Tableview";
export default function App() {
  const data = React.useMemo(
    () => [
      {
        name: "nill",
        email: "nill@gmail.com",
      },
      {
        name: "prayu",
        email: "prayu@gmail.com",
      },
      {
        name: "shubahm",
        email: "shubham@gmail.com",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <TableView
      getTableProps={getTableProps}
      getTableBodyProps={getTableBodyProps}
      headerGroups={headerGroups}
      rows={rows}
      prepareRow={prepareRow}
      action={true}
    />
  );
}
