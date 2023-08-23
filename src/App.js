import React, { useState } from "react";
import Greet from "./components/Greet";
import Counter from "./components/counter";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NewApp from "./NewApp";

const App = () => {
  const [status, setStatus] = useState("About to send");
  function updateBtn() {
    setStatus("Done");
  }
  return (
    <div>
      <h1>{status}</h1>
      <button onClick={updateBtn}>Send</button>
      <Greet name="Korode" age="20" sex="male" />
      <Greet name="bayo" age="10" sex="male" />
      <Greet name="tolu" age="30" sex="female" />
      <Counter />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
      <NewApp />
    </div>
  );
};

export default App;
