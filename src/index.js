import React from 'react';
import ReactDom from 'react-dom';

/**
 * * BOOK LIST PROPS
 */

import './index.css';

const firstBook = {
    img: 'https://m.media-amazon.com/images/I/81V8qATf6xL._AC_UY327_FMwebp_QL65_.jpg',
  title: 'The Immortals Of Meluha (Hindi)',
 author: 'by Amish'
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/9138VXjBfPL._AC_UY327_FMwebp_QL65_.jpg',
  title: 'The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)',
  author: 'by Dr. Joseph Murphy',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({img, title, author}) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
