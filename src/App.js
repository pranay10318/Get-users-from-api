import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [users, setUser] = useState([]);

  const loadusers = async () => {
    console.log("before fetch");
    const response = await fetch("https://api.github.com/users");
    //i have not used the api you have mentioned as it was not in correct json format
    const jsonResponse = await response.json();
    setUser(jsonResponse);
  };

  return (
    <div className="app">
      <h1>Fectching data from api</h1>
      <div className="btn">
        <button onClick={loadusers}>GET DATA</button>
      </div>
      <div className="fetch-container">
        {users.map(({ id, login, node_id, avatar_url }) => (
          <div className="fetch-card" key={id}>
            <b>Login</b>&nbsp;&nbsp;:{login}
            <br />
            <b>Node_id</b>:&nbsp;&nbsp;{node_id}
            <br />
            <b>Avatar_url</b>&nbsp;&nbsp;:{avatar_url}
          </div>
        ))}
      </div>
      {console.log("users " + users.length)}
    </div>
  );
}

export default App;
