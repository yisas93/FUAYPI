import React, {useEffect} from "react";
import { Navbar } from "../components/navbar.jsx";
import { Footer } from "../components/footer.jsx";
import { Paypal} from "../components/paypal.jsx"
import { Email } from "../components/email.jsx";
export const Donar=()=>{
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
            <div className="pt-5 row">
                <div className="title-donar col-12">
                <h1>Donar</h1>
                </div>
                <div className="parrafo-donar col-8 m-auto">
                    <p className="mb-5">Cada acto de generosidad cuenta. En FUAYPI, buscamos marcar la diferencia en la vida de personas necesitadas. Con tu donación, podemos brindar esperanza, apoyo y oportunidades a quienes más lo necesitan. Únete a nuestra misión y juntos hagamos del mundo un lugar mejor.</p>
                </div>
                <div className="form">
                    <Email/>
                </div>
                {/*
                <div className="row d-flex" style={{border: "1px solid red"}}>
                    <div className="paypal-cont col-4">
                        <Paypal/>
                    </div>
                    <div className="sinpe-cont col-4">
                        <div>Sinpe</div>
                    </div>
                   <div className="cardnum-cont col-4">
                        <div className="card"></div>
                   </div>
            </div>*/}
                    </div>
                    <div className="row quote-videos quote-background">
  <span className="col-12  quote-mark quote-video"><i class="fa-solid fa-quote-right"></i></span>
  <div className="col-12 col-sm-8 ms-0 ms-sm-5">
    <h3 className='frase video-frase small-donar-frase'>El más pequeño acto de amabilidad vale más que la más grande intención.  </h3>
  </div>
  <div className="col-12 ">
    <h3 className='madre ghandi'>-Oscar Wilde</h3>
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