import './App.css';
import { Navbar } from './components/navbar.jsx';
import portada1 from "../src/img/portada1.jpg"
import portada2 from "../src/img/portada2.jpg"
import YouTube from './components/youtube.jsx';
import teresa from "./img/teresa.jpg"
function App() {
  return (
    <div className="App">

        <Navbar />
        <div className="carousel-cont pt-5">
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
<div className="middlepage row mt-4">
  <div>
    <div className="col">
    <h2 className='quienes-somos-title'>
      Quiénes Somos?
    </h2>
    </div>
    <div className="col-8 parrafo mt-5">
    <p className='quienes-somos'>
    En FUAYPI, estamos comprometidos a marcar una diferencia significativa en la vida de las personas necesitadas. Nuestra fundación nace del deseo profundo de ayudar y brindar esperanza a aquellos que enfrentan desafíos y dificultades
    </p>
    </div>
  </div>
</div>
<div className="row mt-5">
  <div className="col-12 col-sm-5 m-auto">
    <h2 className='misionvision-title'>Mision</h2>
    <p className='misionvision'>En [nombre de la fundación], nuestra misión es brindar ayuda y esperanza a aquellos que más lo necesitan. Nos comprometemos a ser un apoyo confiable y compasivo para las personas vulnerables, trabajando incansablemente para mejorar su calidad de vida y promover su bienestar integral. A través de nuestros programas y proyectos, buscamos abordar desafíos sociales apremiantes y marcar una diferencia duradera en las comunidades que servimos. Nuestro enfoque se basa en valores como la igualdad, la dignidad y la solidaridad, y trabajamos en estrecha colaboración con socios y colaboradores para lograr un impacto sostenible y significativo.</p>
  </div>
  <div className="col-12 col-sm-5 m-auto mt-5 mt-sm-0">
    <h2 className='misionvision-title'>Vision</h2>
    <p className='misionvision'>Nuestra visión en [nombre de la fundación] es construir un mundo en el que todas las personas tengan acceso a oportunidades y recursos necesarios para llevar una vida plena y próspera. Nos esforzamos por crear una sociedad inclusiva y justa, donde la compasión y la empatía sean los pilares fundamentales. A través de nuestra labor, buscamos inspirar a otros a unirse a nuestra causa y promover un cambio positivo en la sociedad. Visualizamos un futuro en el que la desigualdad y la injusticia sean superadas, y en su lugar, prevalezca la igualdad de oportunidades y la dignidad humana. Trabajamos cada día con el firme propósito de lograr esta visión y hacer del mundo un lugar mejor para todos.</p>
  </div>
  </div>
  <div className="row quote-background">
  <span className="col-12 mt-5 quote-mark"><i class="fa-solid fa-quote-right"></i></span>
  <div className="col-8 m-auto">
    <h3 className='frase'>Por cada gota de dulzura que alguien da, hay una gota menos de amargura en el mundo.  </h3>
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
          <div className="col-12 col-sm-6 mb-4">
          <YouTube videoId={"_Xb6Ifv9IIU"}/>
          </div>
          <div className="col-12 col-sm-6">
          <YouTube videoId={"Zu4WQ0zkPBM"}/>
          </div>
          <div className="col-12 col-sm-6">
          <YouTube videoId={"_Xb6Ifv9IIU"}/>
          </div>
          <div className="col-8 col-sm-6">
          <YouTube videoId={"Zu4WQ0zkPBM"}/>
          </div>
        </div>
    </div>
  );
}

export default App;
