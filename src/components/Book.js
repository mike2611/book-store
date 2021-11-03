import PropTypes from 'prop-types';

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
        <button type="button" className="btn btn-primary">REMOVE</button>
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
