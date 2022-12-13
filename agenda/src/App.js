import { useEffect, useState } from 'react';
import { initialValues } from './components/InitialValues';
import { FormNewContact } from './components/FormNewContact';
import './css/App.css';

function App() {

  const {getContacts} = initialValues();
  const [contacts, setContacts] = useState([]);
  
  let mostrar = true;
  let form = document.getElementById('form');
  let contactos = document.getElementById('contactos');

  const ocultar = () => {

    if(mostrar){
      mostrar = false;
      contactos.style.display = 'none';
      form.style.display = 'block';
    }else{
      mostrar = true;
      contactos.style.display = 'block';
      form.style.display = 'none';
      getContacts().then((data) => {
        setContacts(data);
      });
    }
  }

  useEffect(() => {
    getContacts().then((data) => {
      setContacts(data);
    })
  })

  return (
    <div className="App">

      <div id="top">
        <h2>Contactos</h2>
        <button onClick={() => ocultar()}>Crear contacto</button>
      </div>

      <div id='contactos'>
        {contacts.map(contact => (
          <div key={JSON.stringify(contact)} className='contenedor'>
            <h3>Contacto</h3>
            <input defaultValue={contact.nombre}></input>
            <input defaultValue={contact.apellido}></input>
            <input defaultValue={contact.telefono}></input>
          </div>
        ))}
      </div>
      
      <div id='form'>
        <FormNewContact/>
      </div>
    </div>
  );
}

export default App;