import React from 'react';
import ReactDom from 'react-dom';

/**
 * * BOOK LIST
 */

import './index.css';
const Books = [
  {
    img:
      'https://m.media-amazon.com/images/I/81V8qATf6xL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Immortals Of Meluha',
    author: 'by Amish',
  },
  {
    img:
      'https://m.media-amazon.com/images/I/9138VXjBfPL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Power of Your Subconscious Mind',
    author: 'by Dr. Joseph Murphy',
  },
  {
    img:
      'https://images-eu.ssl-images-amazon.com/images/I/61Nta+jYOPL._AC_SX184_.jpg',
    title: 'Tenali Raman',
    author: 'by Maple Press',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {Books.map((book, index) => {
        //const { img, title, author } = book;
        // return <Book key={index} img={img} title={title} author={author} />;
        return <Book key={index} book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
