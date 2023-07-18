import React, {useEffect} from "react";
import { Navbar } from "../components/navbar.jsx";
import { Footer } from "../components/footer.jsx";
import YouTube from "../components/youtube.jsx";

export const Videos=()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const videos = [
        "Zu4WQ0zkPBM",
        "55BZ9JE9TDs",
        "hG3cHsIx8aE",       
        "3pQVCAmhHNE",
        "y-ukhsERocE",
        "SYyVvGz5ArQ"
    ]
    return(
        <div>
            <Navbar
            first="Inicio"
            second="Videos"
            third="Donar"
            fourth="Noticias"
            fifth="Proyectos"
            />
            <div className="container-videos">
                <div className="title-cont-videos row">

                <h1 className="videos-title col-1" >Videos</h1>
                </div>
                
            </div>
            <div className="videos row ">
                {videos.map(video=>(
                    <div className="col-12 col-md-8 col-lg-5 video ">
                        <YouTube videoId={video}/>
                    </div>
                )
                )}
                
            </div>
            <div className="row quote-videos quote-background">
  <span className="col-6 col-sm-12  quote-mark quote-video"><i class="fa-solid fa-quote-right"></i></span>
  <div className="col-8 m-auto">
    <h3 className='frase video-frase'>Donde hay amor, hay vida  </h3>
  </div>
  <div className="col-12 ">
    <h3 className='madre ghandi'>-Ghandi</h3>
  </div>
</div>
            <div className="footer-cont">
                <Footer
                first="•Noticias"
                second="•Donar"
                third="•Videos"
                fourth="•Proyectos"
                fifth="•Politica de Privacidad"
                />
            </div>
        </div>
    )
}