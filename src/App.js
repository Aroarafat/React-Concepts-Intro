// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand='apple' price='50000'></MyComponent>
      <MyComponent brand='samsung' price='40000'></MyComponent>
      <MyComponent brand='google' price='30000'></MyComponent>
      <MyComponent brand='xiaomi' price='20000'></MyComponent>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>Users Loaded:{users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='user'>
      <h2>Name:{props.name}</h2>
      <p>Call me:{props.phone}</p>
    </div>
  )
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
