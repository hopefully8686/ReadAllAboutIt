import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

var cellStyle = {
  textAlign: 'left',
  width: '100%',
  minWidth: 300,
};

const BookListItem = ({ link, title, author, img }) => {
  const bookLink = <a href={link}>Read More About It</a>;
  return (
    <Table>
      <TableBody>
        <TableRow
          className="row-item" 
          hover
        >
          <TableCell>
            {img}
          </TableCell>
          <TableCell style={cellStyle}>
            {title}
          </TableCell>
          <TableCell style={cellStyle}>
            {author}
          </TableCell>
          <TableCell style={cellStyle}>
            {bookLink}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default BookListItem;