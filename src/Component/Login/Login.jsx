import { useState, useEffect  } from 'react'
import './Login.css';

import imgmed9 from '../home/imgmed9.png';
//import { createClient } from '@supabase/supabase-js';

  

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  const [data, setData] = useState('');



//..................................

const readGoogleSheet = () => {
    // Sort results by id in descending order, take two
    // and return the age as an integer.

    fetch("https://sheetdb.io/api/v1/7cipkax9v91kr")
      .then((response) => response.json())
      .then((data) => {
        // Construir una cadena de texto con los valores de la hoja de cálculo
         const text = data.map(row => ` Email: ${row.Email}, Clave: ${row.Clave}`).join('\n');
         
         

         setText2(data.map(({ Email }) => Email))
         setText3(data.map(({ Clave }) => Clave))
        
         
          setData(text);
    
        
      });
  };

//------------------------------------------

useEffect(() => {

    readGoogleSheet();
    
     
  }, []);

//------------------------------------------


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != "" && email != "") {
        
    
    for (let i = 0; i < text2.length; i++) {
        if (email === text2[i] && password ===  text3[i] ) {
        
            window.location.href = "https://doctorgpt.live/";
            alert("Consulte con prudencia y no deje de comunicarse con su personal de salud")
          //break;
        } else {
            alert("No esta registrado")
        }
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
    
    <div className="logo-container">
        <img src={imgmed9} className="App-logo" alt="logo" />
        </div>

    <div className="container">

    <div className='card2'>
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