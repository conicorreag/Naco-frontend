import React from "react";
import './game.css';
import baratheonImage from '../../../public/assets/baratheon.png';
import targarianImage from '../../../public/assets/targarian.png';
import starkImage from '../../../public/assets/stark.png';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { AttackContext } from './Context/AttackContext';
import { ButtonContext } from './Context/ButtonContext';
import ButtonA from "../../components/buttons/ButtonA";
import ButtonM from "../../components/buttons/ButtonM";
import ButtonN from "../../components/buttons/ButtonN";
import ButtonR from "../../components/buttons/ButtonR";
import ButtonV from "../../components/buttons/ButtonV";
import VITE_BACKEND_URL from "../../config.js";

function Board() {
    const { id, username } = useContext(AuthContext);
    const { 
        territories,
        setNum1,
        setNum2,
        setKingdom_attacked,
        result_num, setResult_num,
        result_goal, setResult_goal,
        turn,
        atacando, 
        setAtacando,
        msg, setMsg
        } = useContext(AttackContext);
    // const { buttonsList, setButtonsList, crear_botones} = useContext(ButtonContext);
    const [buttonsList, setButtonsList]  = useState([
        <ButtonV id={1} handleClick={handleClick}/>,
        <ButtonN id={2} handleClick={handleClick}/>,
        <ButtonM id={3} handleClick={handleClick}/>,
        <ButtonA id={4} handleClick={handleClick}/>,
        <ButtonA id={5} handleClick={handleClick}/>,
        <ButtonA id={6} handleClick={handleClick}/>,
        <ButtonR id={7} handleClick={handleClick}/>,
        <ButtonR id={8} handleClick={handleClick}/>,
        <ButtonM id={9} handleClick={handleClick}/>,
        <ButtonM id={10} handleClick={handleClick}/>,
        <ButtonN id={11} handleClick={handleClick}/>,
        <ButtonN id={12} handleClick={handleClick}/>,
        <ButtonV id={13} handleClick={handleClick}/>,
        <ButtonV id={14} handleClick={handleClick}/>,
        <ButtonA id={15} handleClick={handleClick}/>,
        <ButtonR id={16} handleClick={handleClick}/>,
        <ButtonM id={17} handleClick={handleClick}/>,
        <ButtonA id={18} handleClick={handleClick}/>,
        <ButtonN id={19} handleClick={handleClick}/>,
        <ButtonR id={20} handleClick={handleClick}/>,
        <ButtonA id={21} handleClick={handleClick}/>,
        <ButtonV id={22} handleClick={handleClick}/>,
        <ButtonR id={23} handleClick={handleClick}/>,
        <ButtonV id={24} handleClick={handleClick}/>,
        <ButtonN id={25} handleClick={handleClick}/>,
        <ButtonM id={26} handleClick={handleClick}/>,
        <ButtonN id={27} handleClick={handleClick}/>,
        <ButtonM id={28} handleClick={handleClick}/>,
        <ButtonR id={29} handleClick={handleClick}/>,
        <ButtonV id={30} handleClick={handleClick}/>
        ]);
    

    
    
    useEffect(() => {
        handleTerritories();
    });

    // Maneja los territorios
    const handleTerritories = () => {
        console.log("----Territorios----", territories);
        console.log("---Botones----", buttonsList);
        const updatedButtonsList = [...buttonsList]; // Crear una copia de la lista de botones
        for (let j = 0; j < territories.length; j++) {
            const shield_j = territories[j].shieldId;
            updatedButtonsList[j] = React.cloneElement(updatedButtonsList[j], { escudo: handleImgShield(shield_j) });
        
        }
        setButtonsList(updatedButtonsList); // Actualizar el estado con la lista de botones actualizada
    }
    
    
    
    // Entrega la ruta del escudo
    const handleImgShield = (shield_id) => {
    if (shield_id === 2) {
        return baratheonImage;
    } else if (shield_id === 1) {
        return starkImage;
    } else if (shield_id === 3) {
        return targarianImage;
    }
    }
    
    
    // Maneja los escudos en los territorios
    useEffect(() => {
    // if (territories) {
    //     if (territories !== undefined && territories !== null && territories !== "null") {
    //         if (buttonsList === undefined || buttonsList === null || buttonsList === "null") {
    //             crear_botones(handleClick);
    //         }
        console.log("----Territorios----", territories);
        console.log("---Botones----", buttonsList);
        const updatedButtonsList = [...buttonsList]; // Crear una copia de la lista de botones
        for (let j = 0; j < territories.length; j++) {
            const shield_j = territories[j].shieldId;
            updatedButtonsList[j] = React.cloneElement(updatedButtonsList[j], { escudo: handleImgShield(shield_j) });
        
        }
        setButtonsList(updatedButtonsList); // Actualizar el estado con la lista de botones actualizada
        
    
    }, [territories]);


    // Maneja atacar
    function handleClick(id_button) {
        axios.post(`${VITE_BACKEND_URL}/attack/`, {
            attacker: parseInt(id),
            territory_attacked_id: parseInt(id_button),
        })
        .then((response) => {
            if (response.data.propio === true) {
                // atacó su propio territorio
                setAtacando(false);
                setMsg("No puedes atacar a tu propio territorio");
            } 
            else if (response.data.vecino === false){
                // no atacó a un vecino
                setAtacando(false);
                setMsg("No puedes atacar a un territorio que no es vecino");
            }
            else {
                // atacó a un vecino
                setAtacando(true);
                setNum1(response.data.num1);
                setNum2(response.data.num2);
                setResult_num(response.data.result_num);
                setKingdom_attacked(response.data.kingdom_attacked_name);
                setResult_goal(response.data.result_goal);
            }
        })
        .catch((error) => {
        console.log(error);
        });
    }


    // Maneja si los botones se pueden apretar
    useEffect(() => {
        console.log(".------turno-----");
        console.log("botones:", buttonsList);
        let updatedButtonsList = [...buttonsList];
        if (turn !== username) {
        for (let j = 0; j < updatedButtonsList.length; j++) {
            updatedButtonsList[j] = React.cloneElement(updatedButtonsList[j], { disabled: true, className: 'button-disabled' });
        }
        setButtonsList(updatedButtonsList);
        } else {
        for (let j = 0; j < updatedButtonsList.length; j++) {
            updatedButtonsList[j] = React.cloneElement(updatedButtonsList[j], { disabled: false, className: '' });
        }
        setButtonsList(updatedButtonsList);
        }
    }, [turn]);

    return (
        <div className="column center">
            <div className="grid">
              {(buttonsList !== undefined && buttonsList !== null && buttonsList !== "null") ? (
                buttonsList.map((button, index) => (
                  <React.Fragment key={index}>
                    {button}
                  </React.Fragment>
                ))
              ) : (
                null // Llamar a la función crear_botones() si buttonsList está vacío
              )}
            </div>
        </div>
    )
}

export default Board;