import '../styles/components/pages/ContactoPage.css';
import React, {useState} from 'react';
import axios from 'axios';


const ContactoPage = (props) => {

  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState ('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    })); 
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response =  await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false){
      setFormData(initialForm)
    }
  }

    return(
        <main class="holder1">
        <div class="columna left">
          <h2>Contacto Rapido</h2>
          <form action="" method="" onSubmit={handleSubmit} class="formulario">
            <p>
              <label for=""></label>
              <input type="text" name='nombre' value={formData.nombre} onChange={handleChange} placeholder="Nombre" />
            </p>
            <p>
              <label for=""></label>
              <input type="text" name='email' value={formData.email} onChange={handleChange} placeholder="Email" />
            </p>
            <p>
              <label for=""></label>
              <input type="text" name='telefono' value={formData.telefono} onChange={handleChange} placeholder="Telefono" />
            </p>
            <p>
              <label for="comentario"></label>
              <textarea
                name="mensaje"
                id="comentario"
                cols="30"
                rows="10"
                placeholder="Comentario"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </p>
            {sending ? <p>Enviando...</p>: null}
            {msg ? <p>{msg}</p> : null}
            <p class="acciones"><input type="submit" value="Enviar" /></p>
          </form>
        </div>
        <div class="columna right">
          <h2>Otras vias de contacto</h2>
          <p>Tambien se pueden comunicar con nosotros ....</p>
          <ul>
            <li>Telefono: 4444-8494</li>
            <li>Email: workit@gmail.com</li>
            <li>Facebook:</li>
            <li>Twitter:</li>
            <li>Skype:</li>
          </ul>
        </div>
      </main>
    );
} 

export default ContactoPage;