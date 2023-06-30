import React from "react";
import './about-us.css'

function AboutUs() {
  console.log("renderizando");
  return (
    <main className="content1">
      <div clasName="bg-container1">
        <h1>Creadoras del juego</h1>
        <section align="center">
          <div class="container1" align="center">
            <article class="card">
              <div class="foto1" align="center">&nbsp;</div>
              <h3> M. Constanza Correa</h3>
              <p> Estudiante de 4º año de Ingeniería Civil</p>
              <p> Major Ingeniería de Software</p>
              <p> Fan de Game of Thrones </p> 

            </article>

            <article class="card">
              <div class="foto2" align="center">&nbsp;</div>
              <h3> M. Ignacia Correa</h3>
              <p> Estudiante de 4º año de Ingeniería Civil</p>
              <p> Major Ingeniería de Software</p>  
              <p> Amante de los juegos de mesa </p>    
            </article>
          </div>
        </section>
      </div>
    </main>
    
  )
}

export default AboutUs;