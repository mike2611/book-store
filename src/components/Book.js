import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksReducer';

const removeBookToStore = (id) => {
  const dispatch = useDispatch();
  dispatch(removeBook(id));
};

const Book = (props) => {
  const { key, title, author } = props;
  return (
    <>
      <td>
        {key}
      </td>
      <td>
        {title}
      </td>
      <td>
        {author}
      </td>
      <td>
        <button type="button" className="btn btn-primary" onClick={removeBookToStore(key)}>REMOVE</button>
      </td>
    </>
  );
};

Book.propTypes = {
  key: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default (Book);
