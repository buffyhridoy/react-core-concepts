// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

const products = [
  { name: 'Photoshop', price: '$90.99' },
  { name: 'Illustrator', price: '$60.99' },
  { name: 'PDF Reader', price: '$6.99' },
  { name: 'Premiere El', price: '$249.99' }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        {
          products.map(pd => <Product product={pd}></Product>)

        }

        {
          products.map(pd => <li>{pd.name}</li>)
        }

      </header>
    </div>
  );
}

function Product(props) {

  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }

  const { name, price } = props.product;

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
