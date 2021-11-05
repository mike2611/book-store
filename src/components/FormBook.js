import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksReducer';

const FormBook = (props) => {
  const [classInactive, setActive] = useState(true);
  const { arrayIds } = props;
  const [inputs, setInputs] = useState(
    {
      title: ' ',
      category: 'Horror',
    },
  );

  const changeInputs = (e) => {
    setInputs({
      ...inputs, [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    if (arrayIds.includes(`${inputs.title}id`)) {
      setActive(false);
    } else {
      setActive(true);
      const newBook = {
        idBook: `${inputs.title}id`,
        title: inputs.title,
        category: inputs.category,
      };
      dispatch(addBook(newBook));
      setInputs({
        title: ' ',
        category: 'Horror',
      });
    }
  };

  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <input type="text" placeholder="Book Title" name="title" value={inputs.title} onChange={changeInputs} />
      <select name="category" value={inputs.category} onChange={changeInputs}>
        <option>Horror</option>
        <option>Romance</option>
        <option>Fiction</option>
        <option>Historical</option>
        <option>Thriller</option>
      </select>
      <p className={classInactive ? 'd-none' : null}> You cant add a book that already exists in the table.</p>
      <button type="button" onClick={submitBookToStore}>Add Book</button>
    </div>
  );
};

FormBook.propTypes = {
  arrayIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default (FormBook);
