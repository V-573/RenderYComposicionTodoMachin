import './TodoCounter.css';
import React from 'react';

function TodoCounter({ completedTodos, totalTodos,}) {
 
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
