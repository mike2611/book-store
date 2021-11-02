import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Book from './Book';


const Books = () => {
  const [books] = useState(
    [
      { idBook: 0,title: 'Book 1 Title',progress: '80%'},
      { idBook: 1,title: 'Book 2 Title',progress: '60%'},
      { idBook: 2,title: 'Book 3 Title',progress: '50%'},
    ]
  );
  return (
    <div className='container'>
      <Table>
        <tbody>
          {books.map(() => 
            <tr>
              <Book/>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  ) 
}

export default (Books);