import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  
  const [data, setData] = useState(
    {
      name: "",
      email: "",
      age: ""
    }
  );

  const getValues = (e) => {
    e.preventDefault();
    setData({
      name: e.target[0].value,
      email: e.target[1].value,
      age: e.target[2].value
    });
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  }

  
  
  return (
    <>
    <form  onSubmit={getValues} className='container mt-5'>
      <input type="text" placeholder='Enter Your Name' className='form-control'/><br /><br />
      <input type="email" placeholder='Enter Your Email' className='form-control'/><br /><br />
      <input type="age" placeholder='Enter Your Age' className='form-control'/><br /><br />
      <input type="submit" className='btn btn-primary w-100'/><br />
    </form><br />
    <h1>Fetch Data</h1><br />
    <p>{data.name}</p>
    <p>{data.email}</p>
    <p>{data.age}</p>

    </>
  )
}

export default App