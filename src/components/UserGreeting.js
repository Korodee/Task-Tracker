import React, { useState } from "react";

function UserGreeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle</button>
      {isLoggedIn ? <div>Welcome Korode</div> : <div>Welcome Guest</div>}
    </div>
  );
}

export default UserGreeting;
