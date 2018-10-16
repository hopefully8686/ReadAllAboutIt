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

const BookListItem = ({book, onBookSelect}) => {
  const bookLink = <a href={book.link}>Read More About It</a>;
  return (
    <Table>
      <TableBody>
        <TableRow
          className="row-item" 
          onClick={() => onBookSelect(book)}
          hover
        >
          <TableCell>
            <img src={book.imageLink} />
          </TableCell>
          <TableCell style={cellStyle}>
            {book.title}
          </TableCell>
          <TableCell style={cellStyle}>
            {book.author}
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