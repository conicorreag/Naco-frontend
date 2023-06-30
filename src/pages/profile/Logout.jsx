import React, {useContext, useState} from 'react';
import './login.css';
import { AuthContext } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogoutButton = () => {
  const {logout, id} = useContext(AuthContext);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
      user_id: id,
    }).then((response) => {
      console.log(response.data.message);
      
    }).catch((error) => {
      console.error('An error occurred while trying to login:', error);
    })
  }

  // llamar a router para decirle que alguine se salio y que se termine el juego

  return (
    <>
        {/* {msg.length > 0 && <div className="successMsg"> {msg} </div>} */}
        <button className="cerrar_sesion" onClick={handleLogout}>
        Cerrar sesión
        </button>
    </>
  );
}

export default LogoutButton;