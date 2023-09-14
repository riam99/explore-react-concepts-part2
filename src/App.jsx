import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('Button Clicked');
  }

  const handleClick2 = () =>{
    alert('Button 2 Clicked');
  }

  const addToFour = (num) =>{
    alert(num + 4);
  }

  return (
    <>
      <h3>React Concepts 2</h3>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('3rd Button Clicked')}}>Click 3</button>
      <button onClick={() => addToFour(4)}>Click 4</button>
    </>
  )
}

export default App
