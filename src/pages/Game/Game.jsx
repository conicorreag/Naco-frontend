import React from "react";
import './game.css';
import baratheonImage from '../../assets/baratheon.png';
import targarianImage from '../../assets/targarian.png';
import starkImage from '../../assets/stark.png';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { AttackContext } from './Context/AttackContext';
import Board from "./Board.jsx";
import VITE_BACKEND_URL from "../../config.js";


function Game() {
  const { id, username, enjuego, setEnjuego } = useContext(AuthContext);
  const { territories, setTerritories, num1, num2, result_num,
    kingdom_attacked, turn, setTurn, winner, setWinner, atacando, setAtacando, 
    msg, setMsg } = useContext(AttackContext);
  const [num_territories, setNum_territories] = useState(0);
  const [num_territories_missing, setNum_territories_missing] = useState(0);
  const [goal, setGoal] = useState("");
  // const [msg, setMsg] = useState("");
  const [shield_id, setShield_id] = useState(0);
  // const [board, setBoard] = useState(false);
  const [repartido, setRepartido] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupWinnerOpen, setIsPopupWinnerOpen] = useState(false);
  // const [primeraRenderizacion, setPrimeraRenderizacion] = useState(true);

 

  // Llamamos board
  useEffect(() => {
    axios.post(`${VITE_BACKEND_URL}/board`, {
      user_id: parseInt(id)
    })
    .then((response) => {
      console.log("---Board----");
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);


  // LLamamos repartir
  useEffect(() => {
    const interval = setInterval(() => {
      if (repartido === false){
        axios.get(`${VITE_BACKEND_URL}/repartir/${id}`)
        .then((response) => {
          console.log("---Repartir----")
          if (response.data.playing) {
            clearInterval(interval);
            setEnjuego(true);
            localStorage.setItem('enjuego', enjuego);
            setTurn(response.data.turn);
            setNum_territories(response.data.num_territories);
            setNum_territories_missing(response.data.num_territories_missing);
            setShield_id(response.data.shield.id);
            setGoal(response.data.goal);
            setTerritories(response.data.territories);
            setRepartido(true);
          } 
          })
          .catch((error) => {
            console.log(error);
          });
        }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    
  }, []);


  // Llamamos a update
  useEffect(() => {
    if (enjuego === true){
      // const interval2 = setInterval(() => {
        axios.get(`${VITE_BACKEND_URL}/update/${id}`)
        .then((response) => {
          if (response.data.playing) {
            if (response.data.turn !== turn){
              setTurn(response.data.turn);
            }
            if (num_territories !== response.data.num_territories){
              setNum_territories(response.data.num_territories);
            }
            if (num_territories_missing !== response.data.num_territories_missing){
              setNum_territories_missing(response.data.num_territories_missing);
            }
            if (territories !== response.data.territories){
              setTerritories(response.data.territories);
              // setCambioTerritories(true);
              // console.log("---cambio terrritorios----", cambioTerritories);
            }
          }
          else {
            // clearInterval(interval2);
            setEnjuego(false);
            localStorage.setItem('enjuego', enjuego);
            if (response.data.winner != null){
              setWinner(response.data.winner);
              
            }
            else {
              handleLogout();
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
      // }, 1000);
    
    // return () => {
    //   clearInterval(interval2);
    // };
  }
  });


  // Entrega la ruta de la imagen del escudo
  const handleImgShield = (shield_id) => {
    if (shield_id === 2) {
      return baratheonImage;
    } else if (shield_id === 1) {
      return starkImage;
    } else if (shield_id === 3) {
      return targarianImage;
    }
  }


  // Maneja cuando alguien es atacado
  // useEffect(() => {
  //   if (primeraRenderizacion) {
  //     setPrimeraRenderizacion(false);
  //     return;
  //   }

  //   if (turn !== username) {
  //     setAtacando(false);
  //     setMsg("Te han atacado!")
  //   }
  // }, [num_territories]);


  // Maneja cuando alguien gana
  useEffect(() => {
    if (winner != null) {
      console.log("winner", winner);
      setIsPopupWinnerOpen(true);
      setEnjuego(false);
      localStorage.setItem('enjuego', enjuego);
      setWinner(null);
    }
  }, [winner]);

  const handleLogout = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleClosePopupWinner = () => {
    setIsPopupWinnerOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAtacando(false);
    }, 5000);

    return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte

  }, []);



  



  

  return (
    <main className="content2">
      {(enjuego === "false" || enjuego === false) && <div><p>Esperando a otros jugadores </p></div>}
      {(enjuego === "true" || enjuego === true)&& 
        <div className="container">
          <div className="column left">
            <div className="top_left">
              <h4>Tu casa es</h4>
              <div className="escudo" >
                <img src={handleImgShield(shield_id)} alt="escudo" className="escudo-image" />
              </div>
            </div>
            <div className="center1">
              <h4>Objetivo</h4>
              <p>Conquista el {goal} para ganar!</p>
            </div>
            <div className="bottom">
              <div className="reino_arriba">
                <h4>Reinos</h4>
              </div>
              <div className="reino_abajo">
                <div className="reino1">
                  <div className="reino_abajo_izq">
                    <div className="color1"></div>
                  </div>
                  <div className="reino_abajo_drch">
                    <p>Reino del Norte</p>
                  </div>
                </div>
                <div className="reino2">
                  <div className="reino_abajo_izq">
                    <div className="color2"></div>
                  </div>
                  <div className="reino_abajo_drch">
                    <p>Reino de la Roca</p>
                  </div>
                </div>
                <div className="reino3">
                  <div className="reino_abajo_izq">
                    <div className="color3"></div>
                  </div>
                  <div className="reino_abajo_drch">
                    <p>Reino de la Tormenta</p>
                  </div>
                </div>
                <div className="reino4">
                  <div className="reino_abajo_izq">
                    <div className="color4"></div>
                  </div>
                  <div className="reino_abajo_drch">
                    <p>Reino del Valle</p>
                  </div>
                </div>
                <div className="reino5">
                  <div className="reino_abajo_izq">
                    <div className="color5"></div>
                  </div>
                  <div className="reino_abajo_drch">
                    <p>Reino de los Ríos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Board/>
          <div className="column right">
            <div className="top_right">
              <h4>Estadísticas</h4>
              <br></br>
              <p><strong>Turno:</strong> {turn}</p>
              <br></br>
              <p><strong>Territorios conquistados:</strong> {num_territories} </p>
              <br></br>
              <p><strong>Territorios faltantes:</strong> {num_territories_missing} </p>
            </div>
            { atacando && 
              <div className="atacar">
                <div className="atacar1">
                  <p>Atacando al {kingdom_attacked}!</p>
                </div>
                <div className="atacar2">
                  <div className="atacar_izq">
                    <p>Tu número</p>
                  </div>
                  <div className="atacar_drch">
                    <p>Número atacado</p>
                  </div>
                </div>
                <div className="atacar3">
                  <div className="atacar_izq">
                    <p>{num1}</p>
                  </div>
                  <div className="atacar_drch">
                    <p>{num2}</p>
                  </div>
                </div>
                { result_num && 
                  <div className="atacar4">
                    <p>Ganaste el territorio!</p>
                  </div>
                }
                { !result_num && 
                  <div className="atacar4">
                    <p>Te han derrotado!</p>
                  </div>
                }
              </div>
            }
            { !atacando && 
              <div className="atacar">
                <div className="atacar_msg">
                  <p>{msg}</p>
                </div>
              </div>
            }
          </div>
        </div>
      }

      {isPopupOpen && (
        <div className="popup">
          <h3 className="popup__message">Alguien cerró sesión </h3>
          <br></br>
          <button className="popup__button" onClick={handleClosePopup}>Iniciar otro juego</button>
        </div>
      )}

      {isPopupWinnerOpen && (
        <div className="popup">
          <h3 className="popup__message">El ganador es {winner}!! </h3>
          <br></br>
          <button className="popup__button" onClick={handleClosePopupWinner}>Iniciar otro juego</button>
        </div>
      )}
        
    </main>
  )
}

export default Game;