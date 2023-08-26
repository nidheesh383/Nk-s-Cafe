import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import "./Contact.scss";

const ScheduledTable = ({ Data }) => {
  const { row = [] } = Data ?? {};
  return (
    <div>
      <TableContainer>
        <Table>
          <TableBody>
            {row.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <h4
                    style={{
                      background: "none",
                      color: "#b08f3e",
                      fontSize: "16px",
                      fontFamily: '"Cormorant Garamond"',
                      textAlign: "center",
                    }}
                  >
                    {item.date}
                  </h4>
                </TableCell>
                <TableCell
                  style={{
                    background: "none",
                    color: "#b08f3e",
                    fontSize: "16px",
                    fontFamily: '"Cormorant Garamond"',
                    textAlign: "center",
                  }}
                >
                  {item.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScheduledTable;
