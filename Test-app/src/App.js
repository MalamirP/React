import './App.css';
import React from 'react'

function App() {
  // const number = 1;
  // React.useEffect(() => {
  //   console.log("Effect function ran")
  // }, [number])

  const [user, setUser] = React.useState({
    name: '',
    lastName: '',
    email: '',
    city: ''
  });
  console.log(user);
  const number = 2;

  function handleChange(event) {
    const { name, lastName, email, city } = event.target
    setUser(user => {
      return {
        ...user,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div className="App">
      <h1>Second branch</h1>
      <input type='text'
        name='name'
        onChange={handleChange}
        placeholder='name'
        value={user.name}
      />
      <input type='text'
        name='lastName'
        placeholder='lastName'
        value={user.lastName}
        onChange={handleChange}

      />
      <input type='text'
        name='email'
        placeholder='email'
        value={user.email}
        onChange={handleChange}
      />
      <input type='text'
        name='city'
        placeholder='city'
        value={user.city}
        onChange={handleChange}
      />
      <button
      >Sumbit</button>
      <h1>Second branch</h1>
      <input type='text'
        name='name'
        onChange={handleChange}
        placeholder='name'
        value={user.name}
      />
      <input type='text'
        name='lastName'
        placeholder='lastName'
        value={user.lastName}
        onChange={handleChange}

      />
      <input type='text'
        name='email'
        placeholder='email'
        value={user.email}
        onChange={handleChange}
      />
      <input type='text'
        name='city'
        placeholder='city'
        value={user.city}
        onChange={handleChange}
      />
      <button
      >Sumbit</button>
    
    </div>
  );
}

export default App;
