import './App.css';
import {useEffect} from 'react'

function App() {

  useEffect(() => {
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
      console.log('o botão foi clicado....')
    })
  }, [])
  

  return (
    <div className="App">
      <button>Clicar</button>
    </div>
  );
}

export default App;
