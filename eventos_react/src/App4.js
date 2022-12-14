import './App.css';

function App() {
  function handleMouseOver(){
    const h1 = document.querySelector('h1')
    h1.innerText = 'Você colocou o mouse aqui!'
  }

  function handleMouseLeave(){
    const h1 = document.querySelector('h1');
    h1.innerText = 'Você tirou o mouse daqui!';
    
  }
  return (
    <div className="App">
      <strong onMouseOver={() => handleMouseOver()} onMouseLeave={() => handleMouseLeave()}>Passe o mouse aqui...</strong>
      <h1></h1>
    </div>
  );
}

export default App;