import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/booksReducer';
import Book from './Book';
import FormBook from './FormBook';

const Books = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const books = selector;

  const idArray = books.map((book) => (
    `${book[0].title}id`
  ));

  return (
    <div className="container mt-5">
      <Table>
        <tbody>
          {
            books.length !== 0
              ? books.map((book) => (
                <Book
                  key={`${book[0].title}key`}
                  id={`${book[0].title}id`}
                  title={book[0].title}
                  category={book[0].category}
                />
              ))
              : (
                <Book key="key" id="id" title="emptyList" category="emptyList" />
              )
          }
        </tbody>
      </Table>
      <FormBook arrayIds={idArray} />
    </div>
  );
};

export default (Books);
