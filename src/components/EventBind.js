import React, { useState } from "react";

const EventBind = () => {
  const [message, setMessage] = useState("Hello");
  function clickHandler() {
    setMessage("Goodbye");
  }
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default EventBind;
