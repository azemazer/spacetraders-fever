import { useState } from 'react'
import axios from 'axios';
import { createRoot } from "react-dom/client";
import Nav from './components/nav/Nav';
import { Link } from 'react-router-dom';

function App() {

  const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  return (
    <>
      <Nav />
      <div className="d-flex flex-column justify-content-center align-items-center h-auto mb-3">
        <div>
          <h1>Welcome, Space Traveler.</h1>
        </div>
        <div>
          {/* <button className='btn btn-primary'>Create new account</button> */}
          <Link to={"register"} className='btn btn-primary'>Create new account</Link>
        </div>
        <div>
          {/* <button className='btn btn-primary'>Connect to existing account</button> */}
          <Link to={"login"} className='btn btn-primary'>Connect to existing account</Link>
        </div>
      </div>
    </>
  )
}

export default App
