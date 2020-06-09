import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState({
    title: "React App with Webpack",
    done: true,
  });

  const changeState = () => {
    setTask({
      ...task,
      done: !task.done,
    });
  };

  return (
    <>
      <h1>{task.title}</h1>
      <button onClick={changeState}>Cambiar estado</button>
      {task.done === true 
        ? <p>Activado</p>
        : <p>Desactivado</p>
      }
    </>
  );
};

export default App;
