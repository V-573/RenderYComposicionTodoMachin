import React from "react";

function useLocalStorage(itemName, initialValue) {

  
 

  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
  const {
    item,
loading,
error,
    sincronizedItem,
  } = state;

  const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSincronize = () => dispatch({
    type: actionTypes.sincronize,
    });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        
        onSuccess(parsedItem);
        // setItem(parsedItem);
        // setLoading(false);
        // setSincronizedItem(true);
      } catch (error) {
        // setLoading(false);
        onError(error);


        // setError(true);
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    onSave(newItem);
    // setItem(newItem);
  };

  const sincronizeItem = () => {

    onSincronize();
    // setLoading(true);
    // setSincronizedItem(false);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

 const initialState = ({initialValue})=>({
    item: initialValue,
    loading: true,
    error: false,
    sincronizedItem: true,
}); 
  
const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.sincronize]: { 
    ...state,
    sincronizedItem: false,
    loading:true,
  },
    [actionTypes.save]: { 
    ...state,
   item: payload,
  }

});

const reducer = (state, action) =>{
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
