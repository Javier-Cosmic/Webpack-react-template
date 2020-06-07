import React, { useState } from "react";
import '../static/logo192.png';

const App = () => {
  const [task, setTask] = useState({
    title: "Create React App with Webpack",
    done: true,
  });

  const handleClick = () => {
    setTask({
      ...task,
      done: !task.done,
    });
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <h3>{task.done.toString()}</h3>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
