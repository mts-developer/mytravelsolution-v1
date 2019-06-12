import React from "react";
import "./datatable.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  dummyData = (id, name, region) => {
    return { id, name, region };
  };

  rows = [this.dummyData(1, "Christmas Special", "Europe")];

  render() {
    const rows = this.rows;

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
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.region}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default DataTable;
