import {
  Skeleton,
  Table as MUITable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination, // Importar o TablePagination
} from "@mui/material";

import { Image, LinkPatient, TableContainer, TableWrapper } from "./styles";
import { useState } from "react";

const Table = ({ columns, data, noResults, loading }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handleClick = (row) => {
    window.open(row.link, "_blank");
  };

  return (
    <TableContainer>
      <TableWrapper>
        <MUITable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={`column-${index}`}
                  variant={"head"}
                  width={column.maxWidth ? column.maxWidth : ""}
                  sx={{
                    backgroundColor: "var(--color-primary)",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    color: "#fff",
                    padding: "5px 2px 5px 16px",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    borderLeft: "1px solid #e0e0e0",
                    borderRight: "1px solid #e0e0e0",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData &&
              currentData.length > 0 &&
              currentData.map((row, rowIndex) => (
                <TableRow
                  key={`row-${rowIndex}`}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: "1px solid #e0e0e0",
                    },
                  }}
                >
                  {columns.map((column, colIndex) => (
                    <TableCell
                      key={`column-${colIndex}`}
                      variant={"body"}
                      sx={{
                        alignItems: "center",
                        justifyContent: "flex-start",
                        borderLeft: "1px solid #e0e0e0",
                        borderRight: "1px solid #e0e0e0",
                      }}
                    >
                      {loading ? (
                        <Skeleton
                          animation={"wave"}
                          width={100}
                          height={column.skeletonHeight ?? 16}
                        />
                      ) : (
                        <>
                          {column.key ? (
                            column.render ? (
                              column.render(row[column.key], row)
                            ) : column.key === "title" ? (
                              <LinkPatient onClick={() => handleClick(row)}>
                                {row[column.key]}
                              </LinkPatient>
                            ) : column.key === "thumbnail" ? (
                              <Image src={row[column.key]} alt="capa" />
                            ) : (
                              row[column.key]
                            )
                          ) : (
                            column.render && column.render(null, row)
                          )}
                        </>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            {data && data.length === 0 && noResults && (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  sx={{ textAlign: "center" }}
                >
                  {loading ? (
                    <Skeleton animation={"wave"} height={16} />
                  ) : (
                    <>{noResults}</>
                  )}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </MUITable>

        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableWrapper>
    </TableContainer>
  );
};

export default Table;
