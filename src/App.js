import logo from './logo.svg';
import './App.css';
import Tarea from "./components/Tarea";
import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";

function App() {
  return (
    <div className="App">
      <div className='aplicacion-tareas'>
        <div className='tareas-lista-principal'>
            <h2>My Tasks</h2>
            <ListaTareas></ListaTareas>
        </div>
      </div>
    </div>
  );
}

export default App;
