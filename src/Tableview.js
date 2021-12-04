import React from "react";

export default function TableView({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  action,
}) {
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  background: "#1ebdff",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
            <th
                style={{
                  background: "#1ebdff",
                  color: "white",
                  fontWeight: "bold",
                }}
              
            >
              Action
            </th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",

                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
              <td
                style={{
                  padding: "10px",

                  background: "papayawhip",
                }}
              >
                {action == true ? (
                  <>
                    <button
                      style={{
                        border: "1px solid blue",
                        backgroundColor: "white",
                        padding: "5px 15px 5px 15px",
                        margin: "5px",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        border: "1px solid blue",
                        backgroundColor: "white",
                        padding: "5px 15px 5px 15px",
                        margin: "5px",
                      }}
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <button>Delete</button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
