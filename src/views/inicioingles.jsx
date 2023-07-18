import '../App.css';
import { useEffect } from 'react';
import { Navbar } from '../components/navbar.jsx';
import portada1 from "../img/portada1.jpg"
import portada2 from "../img/portada2.jpg"
import YouTube from '../components/youtube.jsx';
import {Footer}  from "../components/footer.jsx"
import fuaypi from "../img/fuaypi.jpg"
function AppIngles() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="App">
        <Navbar
        first="Home"
        second="Videos"
        third="Donate"
        fourth="News"
        fifth="Projects"
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
      <img src={fuaypi}  style={{maxWidth: "100vh"}}/>
    </div>
</div>
<div className="middlepage row  ">
  <div>
    <div className="col">
    <h2 className='quienes-somos-title'>
      Our Story
    </h2>
    <div className="row">
      <div className="col mt-5">
        <YouTube videoId={"avk5v3TLET0"}/>
      </div>
    </div>
    </div>
    <div className="col-8 parrafo mt-5">
      <span className='fuaypi-frase d-grid'>
      "This is a legacy of love and solidarity."
      </span>
       <span className='anayansy'>-Anayansy Saborío President & Founder of FUAYPI</span>
    <p className='quienes-somos'>
   
    It all began with Anayansy's deep desire to make a difference in the lives of indigenous communities in Talamanca. With determination and passion, Anayansy brought together neighbors, churches, and government entities to form the Talamanca Indigenous Aid Association (APIT). However, they soon realized that a broader and more sustainable approach was needed to achieve lasting impact.
      </p>
      <p className='quienes-somos'>

      In the year 2022, APIT evolved and officially became the Indigenous Aid Foundation (FUAYPI). This new nonprofit organization aims to address the challenges faced by indigenous communities and work closely with local leaders, community members, and strategic allies to achieve meaningful change.
      </p>
      <p className='quienes-somos'>

      FUAYPI is committed to providing comprehensive support to indigenous communities in key areas such as education, health, economic development, and cultural preservation. By implementing innovative projects and programs, the foundation aims to empower indigenous communities and promote their self-determination.
      </p>
<p className='quienes-somos'>

With a long-term vision and a community-based approach, FUAYPI has become a beacon of hope for indigenous communities in Talamanca. Through collaboration and solidarity, the foundation aims to build a more prosperous and equitable future for all.

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
  <div className="col-12 col-sm-5 m-auto">
    <h2 className='misionvision-title'>Mission</h2>
    <p className='misionvision'>At [foundation name], our mission is to provide aid and hope to those who need it most. We are committed to being a reliable and compassionate support for vulnerable individuals, tirelessly working to improve their quality of life and promote their overall well-being. Through our programs and projects, we aim to address pressing social challenges and make a lasting difference in the communities we serve. Our approach is rooted in values such as equality, dignity, and solidarity, and we work closely with partners and collaborators to achieve sustainable and meaningful impact.</p>
  </div>
  <div className="col-12 col-sm-5 m-auto mt-5 mt-sm-0">
    <h2 className='misionvision-title'>Vision</h2>
    <p className='misionvision'>Our vision at [foundation name] is to build a world where all people have access to the opportunities and resources necessary to lead a fulfilling and prosperous life. We strive to create an inclusive and just society where compassion and empathy are the fundamental pillars. Through our work, we seek to inspire others to join our cause and promote positive change in society. We envision a future where inequality and injustice are overcome, and instead, equal opportunities and human dignity prevail. We work diligently every day with the firm purpose of achieving this vision and making the world a better place for everyone.</p>
  </div>
  </div>
  <div className="row quote-background">
  <span className="col-12 mt-5 quote-mark"><i class="fa-solid fa-quote-right"></i></span>
  <div className="col-8 m-auto">
    <h3 className='frase'>"I am nothing more than a small pencil in the hand of God's writing." </h3>
  </div>
  <div className="col-6 ms-auto">
    <h3 className='madre '>-Mother Teresa of Calcutta</h3>
  </div>
</div>
      <div className="row mt-5 mb-5">
        <div className="col-12">
          <h1>Our Work</h1>
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
            first="•News"
            second="•Donate"
            third="•Videos"
            fourth="•Projects"
            fifth="•Privacy Policy"
            />
        </div>
    </div>
  );
}

export default AppIngles;
