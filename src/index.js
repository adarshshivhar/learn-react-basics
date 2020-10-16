import React from 'react';
import ReactDom from 'react-dom';

/**
 * * BOOK LIST
 */

import './index.css';

//Named Export it should be same
import { data } from './books';
//Default Export it should not be same as we declare in creating function
import SpecificBook from './Book';

function BookList() {
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        //const { img, title, author } = book;
        // return <Book key={index} img={img} title={title} author={author} />;
        return <SpecificBook key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
