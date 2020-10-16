import React from 'react';
import ReactDom from 'react-dom';

/**
 * * BOOK LIST Add CSS
 */
// CSS
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
    return(
        <article className='book'>
            <Image />
            <Title />
            <Author />
        </article>
    );
}
const Image = () => <img src="https://m.media-amazon.com/images/I/81V8qATf6xL._AC_UY327_FMwebp_QL65_.jpg" alt="" />;
const Title = () => <h1>The Immortals Of Meluha (Hindi)</h1>;
const Author = () => <h4>by Amish</h4>;

ReactDom.render(<BookList />, document.getElementById('root'));
