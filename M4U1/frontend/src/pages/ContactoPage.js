import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return(
        <main class="holder1">
        <div class="columna left">
          <h2>Contacto Rapido</h2>
          <form action="" method="" class="formulario">
            <p>
              <label for=""></label>
              <input type="text" placeholder="Nombre" />
            </p>
            <p>
              <label for=""></label>
              <input type="text" placeholder="Email" />
            </p>
            <p>
              <label for=""></label>
              <input type="text" placeholder="Telefono" />
            </p>
            <p>
              <label for="comentario"></label>
              <textarea
                name=""
                id="comentario"
                cols="30"
                rows="10"
                placeholder="Comentario"
              ></textarea>
            </p>
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