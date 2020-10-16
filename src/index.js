import React from 'react';
import ReactDom from 'react-dom';

/**
 * * BOOK LIST
 */

import './index.css';
const Books = [
  {
    id: 1,
    img:
      'https://m.media-amazon.com/images/I/81V8qATf6xL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Immortals Of Meluha',
    author: 'by Amish',
  },
  {
    id: 2,
    img:
      'https://m.media-amazon.com/images/I/9138VXjBfPL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Power of Your Subconscious Mind',
    author: 'by Dr. Joseph Murphy',
  },
  {
    id: 3,
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
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;

  const clickHandler = (e) => {
      console.log(e);
      console.log(e.target);
      alert('hello world');
  }
  const complexExample = (author) => {
    console.log(author);
  }
  return (
    <article className='book' onMouseOver={() => {
        console.log(title);
    }}>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>reference example</button>
      <br />
      <button type='button' onClick={() => complexExample(author)}>more complex example</button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
