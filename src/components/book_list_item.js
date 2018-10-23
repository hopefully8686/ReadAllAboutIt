import React, { PureComponent } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';

var cellStyle = {
  textAlign: 'left',
  width: '100%',
  minWidth: 300,
};

class BookListItem extends PureComponent {
  render() {
    const { book }= this.props;
    const bookLink = <a href={this.props.book.link}>Read More About It</a>;
    return (
      <Table>
        <TableBody>
          <TableRow
            className="row-item" 
            hover
          >
            <TableCell>
              {<img src={book.imageLink} />}
            </TableCell>
            <TableCell style={cellStyle}>
              {book.title}
              {book.language==="English" ? <IconButton><LanguageIcon /></IconButton> : null}
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
  }
};

export default BookListItem;