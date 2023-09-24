import { useState, useEffect  } from 'react'
import './Login.css';
import Airtable from 'airtable';

import imgmed9 from './imgmed9.png';


var base = new Airtable({apiKey: 'keya5qgyPsbOfOg9Z'}).base('appxdB6VTyBNOjQJ7');

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [recordCorreo, setRecordCorreo] = useState('');
  const [recordClave, setRecordClave] = useState('');

  const [entro, setEntro] = useState('');



//..................................



const readAirTable = () => {

  base('Table 1').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }


    records.forEach(function(record) {
      
     // console.log('Retrieved', record.get('Nombre'));
         
    });

    setRecordCorreo(records.map(record => record.fields.Email));
    setRecordClave(records.map(record => record.fields.Clave));
    

});


};


//------------------------------------------

useEffect(() => {

  readAirTable();
    
     
  }, []);

//------------------------------------------


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != "" && email != "") {
        
    
    for (let i = 0; i < recordCorreo.length; i++) {
        if (email === recordCorreo[i] && password ===  recordClave[i] ) {
        
            window.location.href = "https://doctorgpt.live/";
            alert("Consulte con prudencia y no deje de comunicarse con su personal de salud")
          //break;
          setEntro(true)
        } else {
            setEntro(false)
        }
      }

      if (entro=== false) {

        alert("No esta registrado")
      }


    }else{
        alert("Te falto llenar un campo")
    }
    
/*

    let validCredentials1 = false;
    
    for (let i = 0; i < CorreoD.length; i++) {
      
      if (email === CorreoD[i] && password === clave[i]) {
        validCredentials1 = true;
        
        break;
        
      }
      
    
    }


    if (validCredentials1===true ) {


      window.location.href = '/Consulta' ;
      
    } else {
      alert('Correo electrónico o contraseña incorrectos');
    }

    */
  };

  

  useEffect(() => {

    //getCorreoD();
    //getClave();
     
  }, []);

  
  return (
    
    <form onSubmit={handleSubmit}>
    
    <div className="container">
        <img src={imgmed9} className="App-logo" alt="logo" />
        </div>

    <div className="container">

    <div className='card'>
            <label>
            Correo electrónico:
            </label>
            <div>
             <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
             </div> 

             <label>
             Contraseña:
            </label>
            <div>
            <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
             </div> 
             <button className="boton" type="submit">Iniciar sesión</button  >

    </div> 
      

    </div> 


    </form>
    
  );

}

export default Login