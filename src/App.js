// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent brand='apple' price='50000'></MyComponent>
      <MyComponent brand='samsung' price='40000'></MyComponent>
      <MyComponent brand='google' price='30000'></MyComponent>
      <MyComponent brand='xiaomi' price='20000'></MyComponent>
    </div>
  );
}


function MyComponent(props) {
  console.log(props);
  const [points, setPoints] = useState(1);
  const myStyle = {
    backgroundColor: 'skyblue',
    border: '4px solid blue',
    margin: '20px',
    padding: '10px',
    borderRadius: '25px'
  }
  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints)
  }
  return (
    <div style={myStyle}>
      <h1>Brand-Name:{props.brand}</h1>
      <p style={{ color: 'white', fontWeight: 'bold' }}>Price:{props.price},I have points:{points}</p>
      <button onClick={handleAddPoints}>Add-Points</button>
    </div>
  )
}
export default App;
