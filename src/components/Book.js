import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksReducer';

const Book = (props) => {
  const dispatch = useDispatch();

  const removeBookToStore = (e) => {
    dispatch(removeBook(e.target.value));
  };

  const {
    id,
    title,
    category,
  } = props;

  if (id === 'id' && title === 'emptyList' && category === 'emptyList') {
    return (
      <tr>
        <td>
          <h4 className="text-center">Add a New Book</h4>
        </td>
      </tr>
    );
  }
  return (
    <tr className="bg-white bookContainer d-flex flex-column flex-md-row justify-content-around mb-3">
      <td>
        <div>
          <p className="bookCategory mb-0">{category}</p>
          <h1 className="bookTitle">{title}</h1>
          <h2 className="bookAuthor">Author Name</h2>
          <ul className="bookActions d-flex">
            <li className="me-2">Comment</li>
            <li className="me-2">|</li>
            <li className="me-2">
              <button type="button" className="booksBtnRemove" value={id} onClick={removeBookToStore}>Remove</button>
            </li>
            <li className="me-2">|</li>
            <li className="me-2">Edit</li>
          </ul>
        </div>
      </td>
      <td className="mt-2">
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <div className="bookProgress me-4 d-none d-md-block" />
            <div className="text-center ms-2">
              <h1 className="bookProgressNumber">75%</h1>
              <p className="bookStatus">Completed</p>
            </div>
          </div>
          <div className="bookDivisor mx-2 mx-md-5 mt-1" />
          <div className="d-flex flex-column align-items-center">
            <p className="bookChapterTitle my-0">CURRENT CHAPTER</p>
            <p className="bookCurrentChapter">Chapter 17</p>
            <button type="button" className="booksUpdateProgress">
              UPDATE
              <span className="d-none d-md-inline"> PROGRESS </span>
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default (Book);
