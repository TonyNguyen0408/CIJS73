import { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return(
    <div className='App'> 
      <Count count={count}/>
      <Button increment={increment} decrement={decrement}/>     
    </div>
  );
}

export default App;

function Count(props) {
  console.log(props)
  return <div className='value'>COUNT = {props.count}</div>
}

