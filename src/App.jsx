import './App.css';
import { useEffect } from 'react';
import { Navbar } from './components/navbar.jsx';
import portada1 from "../src/img/portada1.jpg"
import portada2 from "../src/img/portada2.jpg"
import YouTube from './components/youtube.jsx';
import {Footer}  from "./components/footer.jsx"
import fuaypi from "./img/fuaypi.jpg"
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
        <Navbar 
        first="Inicio"
        second="Videos"
        third="Donar"
        fourth="Noticias"
        fifth="Proyectos"
        link1="/"
        link2="/videos"
        link3="/donar"
        link4="/noticias"
        link5="/proyectos"
        />


       {/* <div className="carousel-cont pt-5">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="100000">
      <img src={portada1} class="d-block w-100" alt="..." style={{maxHeight: "800px"}}/>
    </div>
    <div class="carousel-item image2cont" data-bs-interval="100000" >
      <img src={portada2} class="d-block w-100 image2" alt="..." style={{maxHeight: "800px"}}/>
    </div>
    <div class="carousel-item" data-bs-interval="100000" >
      <img src={portada1} class="d-block w-100" alt="..." style={{maxHeight: "800px"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>*/ }
<div className="pt-5">
    <div className="imgfuaypi">
      <img src={fuaypi} className='fuaypi-portada' style={{maxWidth: "100vh"}}/>
    </div>
</div>
<div className="middlepage row  ">
  <div>
    <div className="col">
    <h2 className='quienes-somos-title'>
      Nuestra Historia
    </h2>
    <div className="row">
      <div className="col mt-5">
              <YouTube videoId={"_Xb6Ifv9IIU?si=58l__5uac9zRVprL"}/>
            </div>
    </div>
    </div>
    <div className="col-8 parrafo mt-5">
      <span className='fuaypi-frase d-grid'>
      "Esto es un legado de amor y solidaridad" 
      </span>
       <span className='anayansy'>-Anayansy Saborío Presidenta y Fundadora de FUAYPI</span>
    <p className='quienes-somos'>
   
    Todo comenzó con el profundo deseo de Anayansy de marcar la diferencia en la vida de las comunidades indígenas de Talamanca. Con determinación y pasión, Anayansy reunió a vecinos, iglesias y entidades gubernamentales para formar la Asociación Pro Ayuda Indígenas de Talamanca (APIT). Sin embargo, pronto se dieron cuenta de que se necesitaba un enfoque más amplio y sostenible para lograr un impacto duradero.
      </p>
      <p className='quienes-somos'>

En el año 2022, la APIT evolucionó y se convirtió oficialmente en la Fundación de Ayuda para Indígenas (FUAYPI). Este nuevo organismo sin fines de lucro tiene como objetivo abordar los desafíos que enfrentan las comunidades indígenas y trabajar en estrecha colaboración con líderes locales, miembros de la comunidad y aliados estratégicos para lograr un cambio significativo.
      </p>
      <p className='quienes-somos'>

FUAYPI se compromete a brindar apoyo integral a las comunidades indígenas en áreas clave como educación, salud, desarrollo económico y preservación cultural. Mediante la implementación de proyectos y programas innovadores, la fundación busca empoderar a las comunidades indígenas y promover su autodeterminación.
      </p>
<p className='quienes-somos'>

Con una visión a largo plazo y un enfoque basado en la participación comunitaria, FUAYPI se ha convertido en un faro de esperanza para las comunidades indígenas de Talamanca. A través de la colaboración y la solidaridad, la fundación tiene como objetivo construir un futuro más próspero y equitativo para todos.

</p>

    
    </div>
  </div>
</div>

 <div className="carousel-cont ">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="100000">
      <img src={portada1} class="d-block w-100" alt="..." style={{maxHeight: "800px"}}/>
    </div>
    <div class="carousel-item image2cont" data-bs-interval="100000" >
      <img src={portada2} class="d-block w-100 image2" alt="..." style={{maxHeight: "800px"}}/>
    </div>
    <div class="carousel-item" data-bs-interval="100000" >
      <img src={portada1} class="d-block w-100" alt="..." style={{maxHeight: "800px"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>


<div className="row mt-5">
  <div className="col-10 col-sm-5 m-auto">
    <h2 className='misionvision-title'>Mision</h2>
    <p className='misionvision'>En FUAYPI, nuestra misión es brindar ayuda y esperanza a aquellos que más lo necesitan. Nos comprometemos a ser un apoyo confiable y compasivo para las personas vulnerables, trabajando incansablemente para mejorar su calidad de vida y promover su bienestar integral. A través de nuestros programas y proyectos, buscamos abordar desafíos sociales apremiantes y marcar una diferencia duradera en las comunidades que servimos. Nuestro enfoque se basa en valores como la igualdad, la dignidad y la solidaridad, y trabajamos en estrecha colaboración con socios y colaboradores para lograr un impacto sostenible y significativo.</p>
  </div>
  <div className="col-10 col-sm-5 m-auto mt-5 mt-sm-0">
    <h2 className='misionvision-title'>Vision</h2>
    <p className='misionvision'>Nuestra visión en FUAYPI es construir un mundo en el que todas las personas tengan acceso a oportunidades y recursos necesarios para llevar una vida plena y próspera. Nos esforzamos por crear una sociedad inclusiva y justa, donde la compasión y la empatía sean los pilares fundamentales. A través de nuestra labor, buscamos inspirar a otros a unirse a nuestra causa y promover un cambio positivo en la sociedad. Visualizamos un futuro en el que la desigualdad y la injusticia sean superadas, y en su lugar, prevalezca la igualdad de oportunidades y la dignidad humana. Trabajamos cada día con el firme propósito de lograr esta visión y hacer del mundo un lugar mejor para todos.</p>
  </div>
  </div>
  <div className="row quote-background">
  <span className="col-12 mt-5 quote-mark"><i class="fa-solid fa-quote-right"></i></span>
  <div className="col-8 m-auto">
    <h3 className='frase'>No soy más que un pequeño lápiz en la mano de la escritura de Dios.  </h3>
  </div>
  <div className="col-6 ms-auto">
    <h3 className='madre '>-Madre Teresa de Calcuta</h3>
  </div>
</div>
      <div className="row mt-5 mb-5">
        <div className="col-12">
          <h1>Nuestro Trabajo</h1>
        </div>
      </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-5 mb-sm-4">
          <YouTube videoId={"_Xb6Ifv9IIU"}/>
          </div>
          <div className="col-12 col-sm-6 mb-5 mb-sm-0">
          <YouTube videoId={"Zu4WQ0zkPBM"}/>
          </div>
          <div className="col-12 col-sm-6 mb-5 mb-sm-0">
          <YouTube videoId={"_Xb6Ifv9IIU"}/>
          </div>
          <div className="col-12 col-sm-6 mb-5 mb-sm-0">
          <YouTube videoId={"Zu4WQ0zkPBM"}/>
          </div>
        </div>
        <div className="footer-cont">
            <Footer
            first="•Noticias"
            second="•Donar"
            third="•Videos"
            fourth="•Proyectos"
            fifth="•Politica de Privacidad"
            link1="/noticias"
                link2="/donar"
                link3="/videos"
                link4="/proyectos"
                link5="/"
            />
        </div>
    </div>
  );
}

export default App;
