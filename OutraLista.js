function OutraLista ({itens}){
   return (
     <>
        <h3>  Lista de coisas boas: </h3>
        {itens.map((item) => (
                <p>{item}</p>
        ))}


<h3>  Lista de coisas boas com index: </h3>
        {itens.length > 0 ? (
           itens.map((item, index) => <p key={index}>{item}</p>)
        ) : (
           <p> Não há itens na lista</p> 
        )}        
     </>
   )
}

export default OutraLista

