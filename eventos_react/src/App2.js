import './App.css';
import {useEffect} from 'react'

function App() {

  useEffect(() => {
    const button = document.querySelector('button');
    const input = document.querySelector('#input');
    const ul = document.querySelector('ul')

    button.addEventListener('click', () => {
      // console.log(input.value);
      if(!input.value){
        return;
      }
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(input.value));
      ul.appendChild(li);

      input.value = '';
    })
  }, [])
  

  return (
    <div className="App">
      <input type="text" placeholder= 'Adicionar nova tarefa...' id='input'></input>
      <button>Clicar</button>
      <ul>

      </ul>
    </div>
  );
}

export default App;