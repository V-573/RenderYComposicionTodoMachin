import React from 'react';
import './TodoForm.css';


function TodoForm({  addTodo,
      setOpenModal,}) {
   

    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
       
        setOpenModal(false);
    };

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            
            />
            <div className='TodoForm-buttonContainer'>
                <button 
                    onClick={onCancel}
                    type='button'
                className="TodoForm-button TodoForm-button--cancel">
                Cancelar
                </button>
                <button 
                     type='submit'
                    className="TodoForm-button TodoForm-button-add"
                >Añadir</button>
            </div>
        </form>
    );

}
export { TodoForm };