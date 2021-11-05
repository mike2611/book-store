import axios from 'axios';

const booksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Sq5zZOTiTd4kDo4VMfMD/books';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

let initialState = [];

export const getBooks = () => async (dispatch) => {
  try {
    const response = await axios.get(booksURL);
    const booksList = Object.values(response.data);
    dispatch({
      type: GET_BOOKS,
      payload: booksList,
    })
  } catch (error) {
    console.log(error);
  }
};

export const addBook = (book) => async (dispatch) => {
  try {
    await fetch(booksURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: book.idBook ,title: book.title, category: book.category }),
    });
    dispatch({
      type: ADD_BOOK,
      payload: [book],
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeBook = (bookId) => async (dispatch) => {
  try {
    await fetch(booksURL+`/${bookId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application',
      }
    });
    dispatch({
      type: REMOVE_BOOK,
      payload: bookId,
    });
  } catch (error) {
    console.log(error);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => `${book[0].title}id`!== action.payload);
    default:
      return state;
  }
};

export default (reducer);
