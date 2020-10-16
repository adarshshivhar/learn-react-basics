import React from 'react';
import ReactDom from 'react-dom';

/**
 * * JSX Rules
 * * return single element
 * * div / section / article or Fragment
 * * use camelCase for html attribute
 * * className instead of class
 * * close every element
 * * formatting
 */

function Greeting() {
  return (
    <div className=''>
      <h3>Hello World</h3>
      <ul>
        <li>
          <a href='#'>hii</a>
        </li>
      </ul>
      <img src='' alt='' />
      <input type='text' name='' id='' />
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById('root'));
