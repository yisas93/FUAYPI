import React, {useEffect} from "react";
import { Navbar } from "../components/navbar.jsx";
import { Footer } from "../components/footer.jsx";
import YouTube from "../components/youtube.jsx";

export const VideosEn=()=>{
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
            first="Home"
            second="Videos"
            third="Donate"
            fourth="News"
            fifth="Projects"
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
              first="•News"
              second="•Donate"
              third="•Videos"
              fourth="•Projects"
              fifth="•Privacy Policy"
              link1="/news"
              link2="/donate"
              link3="/videosen"
              link4="/projects"
              link5="/"
                />
            </div>
        </div>
    )
}