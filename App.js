import './App.css';
import OutraLista from './OutraLista';

function App() {


const meusItens = ['React','Vue','Angular'];

    return (
    <div className="App">
      <h1> Renderizando Listas</h1>
      <OutraLista itens={meusItens}/>
    </div>
  );
}

export default App;
