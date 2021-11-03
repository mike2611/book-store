import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import Book from './Book';
import FormBook from './FormBook';

const Books = () => {
  const [books] = useState(
    [
      { idBook: 0, title: 'Example Book 1', author: 'Example Author' },
      { idBook: 1, title: 'Example Book 2', author: 'Example Author' },
      { idBook: 2, title: 'Example Book 3', author: 'Example Author' },
    ],
  );
  return (
    <div className="container">
      <Table>
        <tbody>
          {books.map((book) => (
            <tr key={book.idBook}>
              <Book key={book.idBook} title={book.title} author={book.author} />
            </tr>
          ))}
        </tbody>
      </Table>
      <FormBook />
    </div>
  );
};

export default (Books);
