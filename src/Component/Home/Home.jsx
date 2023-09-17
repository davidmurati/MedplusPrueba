import React, { useEffect } from "react";
import "./home.css";


import imgmed13 from './imgmed13.jpg';
import imgmed2 from './imgmed2.jpg';
import imgmed12 from './imgmed12.jpg';
import imgmed3 from './imgmed3.jpg';
import imgmed5 from './imgmed5.jpg';
import imgmed9 from './imgmed9.png';
import imgmed6 from './imgmed6.jpg';

const Home = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar las credenciales del usuario aquí
  };

  
  return (

    <form onSubmit={handleSubmit}>
    <div>
      <div className="logo-container">
        <img src={imgmed9} className="App-logo" alt="logo" />
        <h1>Mediplus</h1>
        </div>
        
        <main>    
        <p>Bienvenido a la app de salud Mediplus, estamos para ayudarlo</p>

        <section id="Nosotros">
        <div className='container'>

          <div className="card2">
            <h2>{"Nosotros"}</h2>
            <img src={imgmed12} className="App-logo" alt="logo"/>
            <div className="card3">
            <h2>{"Quienes somos "}</h2>
            <p>{"Somos una empresa de servicios médicos a domicilio y online comprometida con el bienestar y la comodidad de nuestros pacientes. Nuestro equipo está conformado por profesionales de la salud altamente cualificados y dedicados, que trabajan de manera colaborativa para brindar una atención integral y personalizada."}</p>
            </div>
            <div className="card3">
            <h2>{"Misión"}</h2>
            <p>{"Nuestra misión es proporcionar servicios médicos integrales y de alta calidad a nuestros pacientes en la comodidad de su hogar, utilizando tecnología de vanguardia para ofrecer atención médica online. Nos esforzamos por brindar diagnósticos precisos, tratamientos efectivos y un enfoque cálido y humano, adaptándonos a las necesidades individuales de cada paciente. Nuestro objetivo es mejorar la calidad de vida de las personas, promoviendo la salud y el bienestar en la comunidad a la que servimos."}</p>
            </div>
            <div className="card3">
            <h2>{"Visión"}</h2>
            <p>{"Ser reconocidos como líderes en brindar servicios médicos de calidad, accesibles y confiables, tanto a nivel presencial como online, siendo la primera opción para las personas que requieren atención médica personalizada en la comodidad de su hogar."}</p>
            </div>
            
          </div>

        </div>
        </section>

        <section id="Serv">
        <div className='container'>


          <div className="card">
            <img src={imgmed6} className="App-logo1" alt="logo"/>
            <div className="link">
            <a  href="/Servicio"> Atención a domicilio </a>
            <p>{"Realizamos consultas, curas y más en la comodidad de tu hogar"}</p>
            </div>

            
          </div>

          <div className="card">
            <img src={imgmed13} className="App-logo1" alt="logo"/>
            <div className="link">
            <a  href="/Servicio"> Atención Online </a>
            <p>{"Comunicate con nuestro personal via plataformas digitales para realizar tus consultas médicas"}</p>
            </div>
            
          </div>

          <div className="card">
            <img src={imgmed3} className="App-logo1" alt="logo"/>
            <div className="link">
            <a  href="/Servicio"> Fisioterapia </a>
            <p>{"Haz terapias con nuestro personal capacitado para recuperarte de tus lesiones"}</p>
            </div>
            
          </div>

          </div>
        </section>
        
      </main>
      </div>
      
    
    </form>
  );
};

export default Home;
