import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const [msg_error, setMsg_error] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
        username: username,
        mail: email,
        password: password
      })
      .then((response) => {
        console.log('Registro exitoso! Ahora puedes volver y loguearte');
        setError(false);
        setMsg('Registro exitoso! Ahora puedes volver y loguearte');
      })
      .catch((error) => {   
        setError(true);
        setMsg('');
        console.log("ENTRO ERROR!!!!!");
        if (error.response && error.response.data.exists) {
          setMsg_error('Ya existe un usuario con ese mail.');
        } else {
          setMsg_error("Ya existe un usuario con ese nombre.");
        };
      });
    }

  return (
    <div className="bg-containerlogin">
    <div className="Login">
      {msg.length > 0 && <div className="successMsg"> {msg} </div>}

      {error && <div className="error">{msg_error}</div>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input 
            type="text" 
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
  );
}

export default Signup;