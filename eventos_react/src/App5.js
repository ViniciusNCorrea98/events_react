import './App.css';

function App() {
  

  function handleInput(event){
    const h1 = document.querySelector('h1');
    //Poderia ser feito pegando o input pela DOM, mas para isso, não passariamos o paramentoe utilizariamos input.value
    h1.innerText = event.target.value;
    
  }
  return (
    <div className="App">
      <input type ='text' placeholder='Digite uma mensagem...' onInput={(event) => handleInput(event)}/>
      <h1></h1>
    </div>
  );
}

export default App;