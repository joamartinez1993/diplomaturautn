import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from './NovedadItem';
import '../styles/components/pages/NovedadesPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';



const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState ([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading (true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return(
       <section className='holder1'>
           <h1>Novedades</h1>
           <hr />
           <Table responsive>
                <thead>
                    <th scope="col">Titulo</th>
                    <th scope="col">Subtitulo</th>
                    <th scope="col">Imagen</th>
                    <th scope="col" class="text-center">Cuerpo</th>
                </thead>

           {loading ? (
               <p>Cargando...</p>
           ) : (
               
               novedades.map(item => ( // <NovedadItem key={item.id}
                //  title = {item.titulo}  subtitle = {item.subtitulo}
                // imagen={item.imagen} body={item.cuerpo} />)

                <tbody>
              <tr key={item.id}>
               <td>{item.titulo}</td>
               <td>{item.subtitulo}</td>
               <td><img className='img' alt='' src={item.imagen}/></td>
               <td>{item.cuerpo}</td>
           </tr> 
           </tbody>
           
           ))

           )}
    </Table>
         
           </section>
    );
} 

export default NovedadesPage;