import React from 'react';


import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';

import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm/index';
import { TodoHeader } from '../TodoHeader/index';

function App() {

  const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      addTodo,
      setOpenModal,
  } = useTodos();


 
  return (
    <>
      
      <TodoHeader>

          <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          />
          <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />


      </TodoHeader>
     

      
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
             
      <CreateTodoButton setOpenModal={setOpenModal} />

      
      {openModal && (
      <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
      </Modal>)}
    </>
  );
}

export default App;
