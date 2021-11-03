import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/booksReducer';

let bookTitle = '';
let bookAuthor = '';

const updateTitle = (e) => {
  bookTitle = e.target.value;
};

const updateAuthor = (e) => {
  bookAuthor = e.target.value;
};

const submitBookToStore = () => {
  const dispatch = useDispatch();
  const newBook = {
    id: uuid(),
    title: bookTitle,
    author: bookAuthor,
  };
  dispatch(addBook(newBook));
};

const FormBook = () => (
  <div>
    <h1>ADD NEW BOOK</h1>
    <input type="text" placeholder="Book Title" onChange={updateTitle} />
    <input type="text" placeholder="Book Author" onChange={updateAuthor} />
    <button type="button" onClick={submitBookToStore}>Add Book</button>
  </div>
);

export default (FormBook);
