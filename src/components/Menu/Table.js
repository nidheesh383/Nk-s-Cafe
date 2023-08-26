import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import "./Menu.css";

const TableComp = ({ Data }) => {
  const styles = {
    tableRow: {
      textAlign: "left",
      background: "none",
      boxShadow: "inset 0px 4px 3px -2px rgba(0,0,0,.06)",
      borderWidth: "0 1px 1px 0",
    },
    dishName: {
      fontSize: "26px",
      lineHeight: "32px",
      fontWeight: "500",
      letterSpacing: "0px",
      fontFamily: '"Cormorant Garamond", Helvetica, Arial, sans-serif',
    },
    price: {
      borderRight: "0",
      background: "none",
      width: "20%",
      color: "#b08f3e",
      fontSize: "30px",
      fontFamily: '"Cormorant Garamond"',
      boxShadow: "inset 0px 4px 3px -2px rgba(0,0,0,.06)",
      borderWidth: "0 0 1px 0",
      padding: "20px",
      textAlign: "center",
      borderStyle: "solid",
      verticalAlign: "middle",
    },
  };
  const { row = [], title = "" } = Data ?? {};
  return (
    <div className="w-full h-full pt-40 md:grid md:grid-cols-2 md:gap-6">
      <div className="md:flex md:flex-col md:justify-center md:items-center">
        <h2 className="text-center text-4xl text-darkBrown mt-14 leading-10 font-nid tracking-normal">
          {title}
        </h2>
        <div
          style={{
            margin: "0 auto 20px auto",
          }}
        ></div>
        <div className="w-24 h-px bg-darkGoldenBrown mx-auto mt-0"></div>
      </div>
      <div>
        <TableContainer className="mt-20">
          <Table>
            <TableBody>
              {row.map((item) => (
                <TableRow key={item.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    className="css-1ex1afd-MuiTableCell-root"
                  >
                    {item.name}
                  </TableCell>
                  <TableCell style={styles.tableRow}>
                    <h4 style={styles.dishName}>{item.dish}</h4>
                    <p className=" text-sm text-darkBrown mt-5">
                      {item.content}
                    </p>
                  </TableCell>
                  <TableCell style={styles.price}>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default TableComp;
