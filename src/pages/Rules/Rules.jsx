import React from "react";
import {useContext, useState} from 'react'
import { Link } from "react-router-dom";
import './rules.css'
import RulesButton from "./RulesButton";
import CompButton from "./CompButton";
import fichasImage from '../../../public/assets/fichas.jpg';
import mapaImage from '../../../public/assets/mapa.png';
import vecinosImage from '../../../public/assets/regla_vecinos.jpg';
import dadosImage from '../../../public/assets/dados.jpg';

function Rules() {
	
	const [showRules, setShowrules] = useState(false);
	const [showComp, setShowComp] = useState(false);
	
	const toggleComp = () => {
		setShowComp(!showComp);
	  }

	const toggleRules = () => {
		setShowrules(!showRules);
	}

  return (
    <main className="content3">
        <div className="bg-container3">
            <div id="top-rules">
                <h1>Instrucciones</h1>
            </div>
        
            <div id="bottom-rules">
                <div id="bottom-left">
					<div id="top-bottom">
						<CompButton onClick={toggleComp} label={showComp ? "Ocultar Componentes" : "Mostrar Componentes"}/>
					</div>
                    <div id="bottom-bottom">
                        <div class="comp">
							{showComp && <h5>Fichas</h5>}
							{showComp && <img src={fichasImage} className="fichasImage" alt="Tablero"/>}
						</div>
                        <div class="comp">
							{showComp && <h5>Tablero</h5>}
							{showComp && <img src={mapaImage} className="mapaImage" alt="Tablero"/>}
						</div>
                    </div>
                </div>
                <div id="bottom-right">
                    <div id="top-bottom">
                        <RulesButton onClick={toggleRules} label={showRules ? "Ocultar Reglas" : "Mostrar Reglas"}/>
					</div>
                    <div id="bottom-bottom">
						<div class="comp">
							{showRules && <h5>Solo se puede atacar a vecinos.</h5>}
							{showRules && <img src={vecinosImage} className="vecinosImage" alt="Vecinos"/>}
						</div>
						<div class="comp">
							{showRules && <h5>El que obtenga un mayor número gana.</h5>}
							{showRules && <p>*En caso de empate se entregan nuevos números.*</p>}
							{showRules && <img src={dadosImage} className="dadosImage" alt="Dados"/>}
						</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Rules;