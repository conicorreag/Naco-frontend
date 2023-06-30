import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import axios from 'axios';
import './login.css';
import { Link } from "react-router-dom";
import VITE_BACKEND_URL from "../../config.js";


function Login() {
  const { token, setToken, id, setId, username, setUsername } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (token != null && token != "null") {
      setMsg(`Bienvenid@ ${username}!`);
    }
    else{
      setMsg("");
    }
  }, [token]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post(`${VITE_BACKEND_URL}/login`, {
        mail: email,
        password: password
      }).then((response) => {
        console.log('Login successful');
        setError(false);
        setId(parseInt(response.data.id));
        setUsername(response.data.username);
        localStorage.setItem('id', id);
        localStorage.setItem('username', username)
        // Recibimos el token y lo procesamos
        // toda la logica del token esta en el authcontext
        const access_token = response.data.access_token;
        localStorage.setItem('token', access_token);
        setToken(access_token);
        console.log("Se seteo el token: ", token);
      }).catch((error) => {
        console.error('An error occurred while trying to login:', error);
        setError(true);// aquí puede haber más lógica para tratar los errores
      })

  };


  return (
    <main className="content3">
        <div className="bg-containerlogin">
            <div className="Login">
            {(token != "null" && token != null) && <div className="successMsg"> {msg} </div>}

            {error && <div className="error">Hubo un error con el Login, por favor trata nuevamente.</div>}
            {(token === "null" || token === null) && (
              <form onSubmit={handleSubmit}>
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
                  <input type="submit" value="Enviar" />
              </form>
            )}

            <div className='boton'>
              {(token != "null" && token != null) &&
                <Link className="play-button" to="/game">
                  Comenzar a jugar
                </Link>
              }
            </div>
            </div>
            
        </div>
    </main>
  );
}

export default Login;