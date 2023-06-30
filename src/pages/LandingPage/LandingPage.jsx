import React from "react";
import { Link } from "react-router-dom";
import './landing.css'

function LandingPage() {
  return (
    <main className="content">
        <div className="bg-container"></div>
        <div className="content">
            <h3> Conquista los reinos de Westeros para cumplir tu objetivo y ganarle a tus oponentes </h3>
            <Link className="play-button" to="/login">
                Iniciar Sesión
            </Link>
        </div>
    </main>
  )
}

export default LandingPage;