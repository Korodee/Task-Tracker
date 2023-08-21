import React from "react";

const Greet = (props) => {

  return (
    <h1>
      Hello {props.name} I am {props.age} years old and i am a {props.sex}
    </h1>
  );
};

export default Greet;
