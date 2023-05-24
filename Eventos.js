import { useState } from "react";
import Button from "./Button";

function Evento ({ valor })
{
   function meuEvento(){
    alert(name);
}



const [name, setName] = useState('Valor Inicial')

  return(
    <form>
    <div>
       <p>Clique para disparar um evento</p>      
       <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
       <Button event={meuEvento} text="Primeiro Evento"/>
       {name &&(
        <div> 
            <p>Clique para disparar um evento {name}</p>      
        </div>

   )   }

    </div>
    </form>




)
}


export default Evento