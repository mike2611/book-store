/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/booksReducer';

const FormBook = (props) => {
  const { update } = props;
  const [inputs, setInputs] = useState(
    {
      title: ' ',
      author: ' ',
    },
  );

  const changeInputs = (e) => {
    setInputs({
      ...inputs, [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      idBook: uuid(),
      title: inputs.title,
      author: inputs.author,
    };
    dispatch(addBook(newBook));
    update();
  };
  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <input type="text" placeholder="Book Title" name="title" value={inputs.title} onChange={changeInputs} />
      <input type="text" placeholder="Book Author" name="author" value={inputs.author} onChange={changeInputs} />
      <button type="button" onClick={submitBookToStore}>Add Book</button>
    </div>
  );
};

export default (FormBook);
