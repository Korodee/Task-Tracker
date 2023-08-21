import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [parentName] = useState("Parent");
  const [childName] = useState("Child");

  const greetParent = () => {
    const message = `Hello ${parentName} from ${childName}`;
    alert(message);
  };

  return (
    <div>
      <ChildComponent greetHandler={greetParent} />
    </div>
  );
};

export default ParentComponent;
