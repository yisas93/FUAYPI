import React, { useState } from "react";

export const Noticia = (props) => {
  const [expanded, setExpanded] = useState(false);

  /*const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const textToShow = expanded ? props.text : props.text.slice(0, 100) + "...";*/

  return (
    <div className="">
      <div className="card card-news " >
        <div className="d-flex noticias-fuaypi">
            <span>FUAYPI</span>
            <span>Noticias</span>
        </div>
        <div className="d-flex row card-upper">
            <div className="card-title col-12">
          <h1>{props.title}</h1>
        </div>
        <div className="col-12">
            <div className="subtitle">
                {props.subtitle}
            </div>
        </div>
        </div>
        <div className="row image-text-news">
            <div className="col-12 col-sm-6">
                <div className="card-body">
          <p className="card-text textnews">{props.text}</p>
         {/* <button onClick={toggleExpansion}>
            {expanded ? "Show Less" : "Show More"}
          </button>*/ }
        </div>
            </div>
            <div className="col-12 col-sm-6 " >
                <div className="imagecard">
              <img src={props.image} className="card-img-top" alt="..." />
        </div>
        <div className="subtext" >
            <p>{props.subtext}</p>
            <a className="yt" href={props.link}>{props.link}</a>
        </div>
            </div>
            <div className="col-12">
                <div className="fecha-cont row ">
                    <div className="fecha col-12" >{props.fecha}</div>
                </div>
            </div>
        </div>
        
      
        
        
      </div>
    </div>
  );
};