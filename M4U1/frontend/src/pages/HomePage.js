import '../styles/components/pages/Homepage.css';

const HomePage = (props) => {
    return(
        <main class="holder1">
        <div class="columnas">
            <div class="left">
                <img src="img/fabricantes.jpg" width="100%" alt="HomeImg"/>
            </div>
            <div class="right">
                <div class="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex laborum beatae voluptatibus? Quis
                        veritatis quibusdam qui, reprehenderit ea perspiciatis voluptatum rem consequuntur. Ipsum quidem
                        autem tempore ratione error alias veniam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto alias minus eveniet corporis
                        dignissimos, dolor praesentium. Autem aspernatur repudiandae in suscipit, debitis temporibus
                        veritatis animi a ea labore eum architecto!</p>

                </div>
                <h2>Testimonios</h2>
                <div class="testimonios">
                    <span class="autor">Juan Perez - Toyota</span>
                    <br/>
                    <span class="cita"> Simplemente excelente!</span>
                </div>
            </div>
        </div>
    </main>
        
    );
} 

export default HomePage;