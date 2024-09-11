import React from "react";

import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm/index";
import { TodoHeader } from "../TodoHeader/index";
import { ChangeStorage} from "../ChangeStorage";

function App() {
  const {
    // //ESTADOS
    // loading,
    // error,
    // searchedTodos,
    // totalTodos,
    // completeTodo,
    // openModal,
    // completedTodos,
    // searchValue,
    
    
    // //ACTUALIZADORES DEL ESTADO
    // setOpenModal,
    // addTodo,
    // deleteTodo,
    // setSearchValue,
    // sincronizeTodos,

    states, stateUpdaters,
  } = useTodos();


  const {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    openModal,
  } = states; 


  const {
 setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    sincronizeTodos,
  }= stateUpdaters

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          // loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
        />
      </TodoHeader>

      <TodoList
        // envio propiedades:
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        //envio render functions:

        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>NO HAY RESULTAQDOS PARA {searchText}</p>
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {/* 
        Lo siguiente tambien funciona pero comentando desde render. lo siguiente seria un children y lo anterior un render prop
        {todo => (

 <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />

        )}  */}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeStorage sincronize={sincronizeTodos} />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}

export default App;
