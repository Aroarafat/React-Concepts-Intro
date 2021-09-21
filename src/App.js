// import logo from './logo.svg';
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
  const myStyle = {
    backgroundColor: 'skyblue',
    border: '4px solid blue',
    margin: '20px',
    padding: '10px',
    borderRadius: '25px'
  }
  return (
    <div style={myStyle}>
      <h1>Brand-Name:{props.brand}</h1>
      <p style={{ color: 'white', fontWeight: 'bold' }}>Price:{props.price}</p>
    </div>
  )
}
export default App;
