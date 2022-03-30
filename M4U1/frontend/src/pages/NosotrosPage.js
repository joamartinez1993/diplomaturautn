import '../styles/components/pages/Nosotrospage.css';
// import Card from'react-bootstrap/Card';
// import CardGroup from'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const NosotrosPage = (props) => {
    return(
        <main class="holder1">

        <div class="historia">
            <h2>Historia</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi deserunt reprehenderit nesciunt ipsam quasi. Ratione quisquam consectetur accusamus dolorum et magni pariatur ea quasi, rem sunt odit soluta porro voluptatibus!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti eius id placeat at accusamus aliquid, voluptate, voluptates consectetur ea necessitatibus beatae nostrum doloribus temporibus voluptatum deserunt eum ab dolores?
            </p>
            
          

        </div>
        <div class="row row-cols-1 row-cols-md-5 g-4">
            <div class="col">
              <div class="card h-100">
                <img src="img/nosotros/nosotros1.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Juan Gomez</h5>
                  <h6 class="card-title">Gerente General</h6>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, nam in tenetur consequatur voluptates impedit? Tempore, nostrum molestias, dignissimos neque sed, aliquam assumenda hic nobis quod asperiores repellendus? Sed, impedit.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="img/nosotros/nosotros2.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Diana Reyes</h5>
                  <h6 class="card-title">Gerente Comercial</h6>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum amet consectetur tempora atque eum, in dignissimos dolore dicta perferendis, voluptatem adipisci dolorem incidunt sequi nisi molestias itaque sint odit id.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="img/nosotros/nosotros3.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Roberto zaptos</h5>
                  <h6 class="card-title">Gerente de Sistemas</h6>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque placeat unde cumque. Vel repellendus, dolor incidunt corrupti delectus est aut veritatis voluptate culpa cupiditate tenetur harum unde facere dolore.</p>
                </div>
              </div>
            </div>
            <div class="col">
                <div class="card h-100">
                  <img src="img/nosotros/nosotros4.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Sandra Mastropiero</h5>
                    <h6 class="card-title">Gerente de Marketing</h6>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque accusamus et quaerat, inventore reiciendis ducimus, nostrum perferendis recusandae omnis quisquam porro eveniet consequuntur molestiae eaque aspernatur unde minima! Itaque.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="img/nosotros/nosotros5.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Luciano Figuero</h5>
                    <h6 class="card-title">Gerente Logistica</h6>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error placeat velit tempora sed totam voluptatum ut incidunt. Aliquid, praesentium nostrum culpa cum at maxime iste illo impedit quae quibusdam delectus!</p>
                  </div>
                </div>
              </div>
          </div>
    </main>
    //     <main>
    // {/* <CardGroup>
    //     <Card>
    //         <Card.img variant="top" src="img/nosotros/nosotros1.jpg" />
    //         <Card.Body>
    //             <Card.Title> Card Title</Card.Title>
    //             <Card.Text>
    //                 Lorem ipsum
    //             </Card.Text>
    //         </Card.Body>
    //     </Card>
    // </CardGroup>
    // </main> */}
    );
} 

export default NosotrosPage;