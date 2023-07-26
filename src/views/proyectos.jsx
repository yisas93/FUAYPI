import React, {useEffect} from "react";
import { Navbar } from "../components/navbar.jsx";
import { Footer } from "../components/footer.jsx";
import { Timer } from "../components/timer.jsx";

export const Proyectos=()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return(
        <div>
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
            <div className="pt-5">
                <h1 className="mt-5 d-flex justify-content-center">Proyectos</h1>
            </div>
            <h2 className="d-flex justify-content-center mt-3">
            Preparando el Futuro: Proyectos en Desarrollo
            </h2>
            <div className="row">
                <div className="col-12 col-md-8 col-lg-5 d-flex justify-content-center m-auto">
                  <p className="parrafo-proyecto">
            En la Fundación Fuaypi, estamos dedicados a transformar vidas y fortalecer comunidades. Actualmente, estamos en proceso de planificación y diseño de proyectos innovadores. ¡Estamos ansiosos por compartir nuestras ideas contigo pronto!
            </p>  
                </div>
            </div>
            
            <div className="row">
                <div className="col-8 m-auto">
                {/*   <div className="timer-container">
               <Timer/>
                
            </div> */ } 
                </div>
            </div>
            <div className="row quote-videos quote-background">
  <span className="col-12  quote-mark quote-video"><i class="fa-solid fa-quote-right"></i></span>
  <div className="col-8 ms-5">
    <h3 className='frase video-frase'>El hombre sabio no acumula sus propios tesoros. Cuanto más da a los demás, más tiene para sí mismo.  </h3>
  </div>
  <div className="col-4 ms-auto ">
    <h3 className='madre '>-Lao Tzu</h3>
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
    )
}