import React, {useEffect} from "react";
import { Navbar } from "../components/navbar.jsx";
import { Footer } from "../components/footer.jsx";
import { Timer } from "../components/timer.jsx";

export const Projects=()=>{
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
            />
            <div className="pt-5">
                <h1>proyectos</h1>
            </div>
            <div className="row">
                <div className="col-8 m-auto">
                   <div className="timer-container">
                <Timer/>
                
            </div> 
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