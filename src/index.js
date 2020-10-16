import React from 'react';
import ReactDom from 'react-dom';

/**
 * * BOOK LIST Add JSX-Javascript
 */

import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

const author = 'by Amish';
const Book = () => {
  const title = 'The Immortals Of Meluha (Hindi)';
  return (
    <article className='book'>
      <img
        src='https://m.media-amazon.com/images/I/81V8qATf6xL._AC_UY327_FMwebp_QL65_.jpg'
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
