import { useState, useEffect  } from 'react'
import "./Servicio.css";
import Select from 'react-select'
import Airtable from 'airtable';


import imgmed11 from './imgmed11.jpg';
import imgmed5 from './imgmed5.jpg';

var base = new Airtable({apiKey: 'keya5qgyPsbOfOg9Z'}).base('appxdB6VTyBNOjQJ7');

const Servicio = () => {

    const [nombre, setNombre] = useState('');
    const [pago, setPago] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [option, setOption] = useState('');
    const [option2, setOption2] = useState('');
    
    const options = [
        { value: 'Domicilio', label: 'Consulta a domicilio' },
        { value: 'Online', label: 'Consulta Online' },
        { value: 'Fisioterapia', label: 'Fisioterapia'},
        { value: 'GPTmed', label: 'Acceso a GPTMED' }
      ]

    const options2 = [
        { value: 'Efectivo', label: 'Efectivo' },
        { value: 'Transferencia', label: 'Transferencia' },
        { value: 'Pago movil', label: 'Pago movil'}
      ]

    //---------------------------------------------------------

    const PostAirTable = () => {

      base('Table 1').create([
        {
          "fields": {Nombre: nombre,
            Telefono: telefono,
            Email: email,
            Pago: option2,
            Servicio: option,
        }

        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });

  };


    //---------------------------------------------------------

    const Enviar = async (event) => {
        //event.preventDefault();

    if (nombre != "" && email != "" && telefono != "" && option != "" && option2 != "") {
        PostAirTable();
    }

        try {
            
          alert('Enviado');
    
        } catch (error) {
            console.error(error);
            alert('No ha podido enviar la informacion');
        }
    
    
      };

    //---------------------------------------------------------

    const handleSubmit = (event) => {
      event.preventDefault();
      Enviar();
      //alert('hola');

      /*
      if (option==="Domicilio") {
        setMonto("50")
  
        
      } else if (option==="Online") {
        setMonto("25")

      } else if (option==="Fisiotrapia") {
            setMonto("40")

        } else {
         
          alert('No selecciono una alternativa');
        } */
      
    };

    //-----------------------------------select

    const find = ({ value }) => {
    
        console.log(value);
        setOption(value);
      };

      const find2 = ({ value }) => {
    
        console.log(value);
        setOption2(value);
      };
  
    
    return (
  
      <form onSubmit={handleSubmit}>
      <div>
          
          <main>    
  
          <section id="Servicio">
          <div className='container'>
  
            <div className="card2">
            <div className="serv">
              <h1>{"Servicios"}</h1>
            </div>
              <img src={imgmed5} className="App-logo" alt="logo"/>
              <div className="card3">
              <h2>{"Atención a domicilio "}</h2>
              <h3>{"Costo 50$ "}</h3>
              <p>{"La atención médica a domicilio nos permite llevar nuestros servicios médicos directamente a ti, evitando la necesidad de desplazarte a una clínica u hospital. Ya sea que necesites una consulta médica, evaluación de síntomas, seguimiento de tratamientos o cuidados médicos especializados, nuestro equipo estará disponible para atenderte en tu hogar."}</p>
              </div>
              <div className="card3">
              <h2>{" Atención Online "}</h2>
              <h3>{"Costo 25$ "}</h3>
              <p>{"La atención médica online nos permite brindarte servicios de consulta médica, evaluación de síntomas, seguimiento de tratamientos y recetas médicas, entre otros. A través de una conexión segura y confidencial, podrás tener acceso a nuestros médicos desde cualquier lugar, utilizando dispositivos electrónicos como computadoras, tablets o teléfonos móviles."}</p>
              </div>
              <div className="card3">
              <h2>{"Fisioterapia"}</h2>
              <h3>{"Costo 40$ "}</h3>
              <p>{"Nuestros fisioterapeutas altamente calificados y experimentados están capacitados para evaluar y tratar una amplia variedad de condiciones, desde lesiones deportivas hasta dolencias crónicas. Al llevar la fisioterapia a la comodidad del hogar de nuestros pacientes, buscamos facilitar su proceso de recuperación y mejorar su movilidad y bienestar físico."}</p>
              </div>
              
            </div>
  
          </div>
          </section>
  
          <section id="Serv">
          <div className='container'>
  
         <div className="card2">
          <div className="serv">
          <h2>{"Solicitud de servicio"}</h2>
            </div>
              <img src={imgmed11} className="App-logo" alt="logo"/>
              <div className="card3">
              
           <div className='card3'>
            <label>
            Nombre:
            </label>
            <div>
             <input  type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
             </div>
            <label>
            Teléfono o whatsapp:
            </label>
            <div>
             <input  type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <label>
            Email:
            </label>
            <div>
             <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            
            <div className='caja'>
            
            <label>
            Tipo de pago:
            </label>
            <Select options={options2} 
             onChange={(e) => find2(e)}/>

            <label>
            Servicio a solicitar:
            </label>
            <Select options={options} 
             onChange={(e) => find(e)}/>
            
             </div>

             <button className="boton" type="submit">Enviar solicitud</button  >

             

              

            </div>
              
            </div>
            </div>
            </div>
            

          </section>
          
        </main>
        </div>
        
      
      </form>
    );
  };
  
  export default Servicio;
  