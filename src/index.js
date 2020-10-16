import React from 'react';
import ReactDom from 'react-dom';

/**
 * * NESTED COMPONENTS, REACT TOOLS
 */

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>Hello World</h1>;
const Message = () => {
  return (
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cumque?</p>
  );
};
ReactDom.render(<Greeting />, document.getElementById('root'));
