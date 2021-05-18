import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    const initialState = {
        username: 'Lambda School',
        password: 'i<3Lambd4'
    };

  const [ credentials, setCredentials ] = useState(initialState)
  const [ loading, setLoading ] = useState(false)


  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
        });
    };

    if(loading) return <h3>Loading...</h3>

  const login = e => {
      setLoading(true)
    e.preventDefault();
    //1. make an axios call on the localhost:5000/api/login
    //2. pass in our username and password
    //3. console.log the token that is returned.
    //4. console.log the error if returned
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res=>{
        localStorage.setItem("token", res.data.payload);
        props.history.push('/friends');
        setLoading(false)
    })
      .catch(err=>{
        console.log(err);
      });
  };

    return (
      <div>
          {console.log(credentials)}
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
}

export default Login;