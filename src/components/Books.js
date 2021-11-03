import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import Book from './Book';
import FormBook from './FormBook';

const Books = () => {
  const [books] = useState(
    [
      { idBook: 0, TitleBook: '' },
      { idBook: 0, TitleBook: '' },
      { idBook: 0, TitleBook: '' },
    ],
  );
  return (
    <div className="container">
      <Table>
        <tbody>
          {books.map((book) => (
            <tr key={book.idBook}>
              <Book key={book.idBook} />
            </tr>
          ))}
        </tbody>
      </Table>
      <FormBook />
    </div>
  );
};

export default (Books);
