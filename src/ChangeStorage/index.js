import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeStorage({sincronize}) {
  const { show, toggleShow } = useStorageListener(sincronize);


  if (show) {
      return (
        
<div className="ChangeAlert-bg"> 
          

          <div className="ChangeAlert-container">
        
          
              <p>prce que hubo cambios en otra pestaña o ventana</p>
              <p>¿Quiees sincronizar los ToDos?</p>
            <button
              className="TodoForm-button TodoForm-button--add"
              onClick={() => toggleShow()}>
                  
               yes!
              </button>
        
</div>
          </div>
      );
  } else {
    return null;
  }
}



export { ChangeStorage};
