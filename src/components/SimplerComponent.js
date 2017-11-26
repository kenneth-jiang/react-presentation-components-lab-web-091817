import React from 'react';

const handleClick = () => {
  alert("Hello World!");
}

const SimplerComponent = (props) => {
  return (
    <div
      onClick={props.handleClick}>
      "I am just happy"
    </div>
  )
}

export default SimplerComponent;
