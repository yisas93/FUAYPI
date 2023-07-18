import React, {useEffect} from "react";
import { Navbar } from "../components/navbar.jsx";
import { Footer } from "../components/footer.jsx";
import { Noticia } from "../components/noticia.jsx";
import anayansy from "../img/anayansy.jpg"
import gerald from "../img/gerald.jpg"



export const Noticias=()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const noticias =[
        {
            title: "Premio Prensamérica",
            subtitle: "En un emotivo evento en Ciudad de México, Anayansy Saborío, presidenta de la Fundación de Ayudas para Indígenas, recibió una llamada que cambiaría su vida.",
            text: " El director nacional de Prensamerica México, Roberto Godínez Soto, le comunicó que había sido seleccionada para recibir el prestigioso Premio Latinoamericano Doctor Senobio Saldibia 2023 en la categoría de Rescate Humanitario. La activista costarricense, ampliamente reconocida por su labor en favor de las comunidades indígenas de Costa Rica, fue tomada por sorpresa por esta distinción. La ceremonia de premiación, que reunirá a destacados líderes y personalidades de América Latina, se llevará a cabo en noviembre, honrando su invaluable contribución al rescate humanitario y su dedicación a brindar ayuda y esperanza en situaciones de crisis. En un emotivo evento en Ciudad de México, Anayansy Saborío, presidenta de la Fundación de Ayudas para Indígenas, fue sorprendida por la noticia de que recibiría el prestigioso Premio Latinoamericano Doctor Senobio Saldibia 2023 en la categoría de Rescate Humanitario. Su incansable labor en beneficio de las comunidades indígenas de Costa Rica ha sido ampliamente reconocida, y este reconocimiento es un testimonio de su dedicación y compromiso. ",
            image: anayansy,
            subtext: "La ceremonia de premiación se llevará a cabo en noviembre, reuniendo a destacados líderes y personalidades de América Latina, donde se celebrará su valiente sacrificio y su entrega en la salvaguarda de vidas y la esperanza en momentos críticos. Noticia completa:",
            fecha: "Junio/2023",
            link: "https://www.youtube.com/watch?v=SYyVvGz5ArQ"
        },

        {
            title: "Historia de Gerald",
            subtitle:"Anayansy Saborío es una ama de casa que vive en el barrio San José de Alajuela",
            image:gerald,
            text: '"Yo vine a este mundo para ser algo mas que esto. Por eso un día decidí ayudar a los indigenas", comenta. Ella es la fundadora de la Asociación Pro Indígena de Talamanca, con la que lleva ayuda médica, vestido y comida a las comudades más remotas del país. El pasado miércoles, Saborío regresó de Piedra Meza, Talamanca, junto al pequeño Gerald López, quien estaba a punto de morir por una profunda desnutrición. La madre de Gerald apunn no ha cuplido 25 años y tiene 5 hijos. "Ella lloró mucho cuando le dijimos que teníamos que traerlo. Recuerdo que me decía "No quiero matar hijo, no quiero matar hijo"". "No sabemos cuantos chiquitos están en la misma situación, pero son muchos. Nadie cree esto hasta que lo ve", agrega. ' 
        }
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
            <div className="pt-5">
                <div className="title-noticias">
                    <h1>Noticias</h1>
                </div>
                <div className="row mt-5 ">
                    {noticias.map(noticia=>(
                        <div className="col-12 mb-5">
                            <Noticia
                            title={noticia.title}
                            subtitle={noticia.subtitle}
                            text={noticia.text}
                            image={noticia.image}
                            subtext={noticia.subtext} 
                            fecha={noticia.fecha}
                            link={noticia.link}
                            />
                        </div>
                    ))}
                    
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