import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksReducer';

const Book = (props) => {
  const dispatch = useDispatch();

  const removeBookToStore = (e) => {
    dispatch(removeBook(e.target.value));
  };

  const { id, title, author } = props;
  if (id === 'id' && title === 'emptyList' && author === 'emptyList') {
    return (
      <tr>
        <td>
          <h4 className="text-center">Add a New Book</h4>
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>
        {title}
      </td>
      <td>
        {author}
      </td>
      <td>
        <button type="button" className="btn btn-primary" value={id} onClick={removeBookToStore}>REMOVE</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default (Book);
