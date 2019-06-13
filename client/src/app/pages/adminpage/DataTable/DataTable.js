import React from "react";
import "./datatable.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { toTitleCase, dateFormatShortDayMonthYearTime } from "../../../utils/";

const DataTable = props => {
  const data = props.data;

  return (
    <div className="datatable margin-bottom-50">
      <h1 className="font--large dark-grey bold">Currently Listed Flights</h1>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Date Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(object => (
              <TableRow key={object.name}>
                <TableCell>{object.id}</TableCell>
                <TableCell>{toTitleCase(object.name)}</TableCell>
                <TableCell>{toTitleCase(object.region)}</TableCell>
                <TableCell>
                  {dateFormatShortDayMonthYearTime(object.date_created)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default DataTable;
