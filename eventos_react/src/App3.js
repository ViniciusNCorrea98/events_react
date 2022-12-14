import './App.css';

function App() {

  function handleAddTasks(){
    const input = document.querySelector('#input');
    const ul = document.querySelector('ul');
    if(!input){
      return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    input.value = '';
  }

  return (
    <div className="App">
      <input type="text" placeholder= 'Adicionar nova tarefa...' id='input'/>
      <button onClick={() => handleAddTasks() }>Clicar</button>
      <ul>

      </ul>
    </div>
  );
}

export default App;