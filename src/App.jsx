import { useState } from 'react';
import './App.css';
import { LineaDeTiempo } from './LineaDeTiempo/LineaDeTiempo';


function App() {
   const [show, setShow] = useState(false);

   const setVisibility = (val) => {
     console.log(val);
     console.log(show);
     setShow(val);
   }
   if(show){
      return <LineaDeTiempo mostrar={show} setVisibility = {setVisibility}/>;
   } else{ 
  return (
     <div className="container">


      <div className="contBoxShadow">
         <h1 className="h1">
            Bienvenido a un viaje en el tiempo
         </h1>
        <p className="parrafo">
            Listo para el vieaje, ¡Pues Comencemos!
        </p>
        <div className="btnCont">
         <button className="boton" onClick={() => setVisibility(true)}>
            Iniciar
         </button>
        </div>
        
      </div>
     </div>
  );
}
}

export default App;
