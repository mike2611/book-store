import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import FormBook from './FormBook';

const Books = () => {
  const selector = useSelector((state) => state.booksReducer);
  const [books, setBooks] = useState(selector);

  const seeState = () => {
    console.log(books);
  };

  const updateBooks = () => {
    setBooks(selector);
  };

  return (
    <div className="container">
      <Table>
        <tbody>
          {
            books.length !== 0
              ? books.map((book) => (
                <Book
                  key={`${book.idBook}k`}
                  id={book.idBook}
                  title={book.title}
                  author={book.author}
                />
              ))
              : (
                <Book key="1" id="id" title="emptyList" author="emptyList" />
              )
          }
        </tbody>
      </Table>
      <FormBook update={updateBooks} />
      <button type="button" onClick={seeState}>Click</button>
    </div>
  );
};

export default (Books);
