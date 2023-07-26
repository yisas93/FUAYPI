import React from "react";
import fuaypi from "../img/fuaypi.jpg"
import { Link } from "react-router-dom";




export const Footer=(props)=>{
    return(
        <div className="footer">
           <div className="row inner-footer">
            <div className="col-12 col-sm-6 col-md-3">
                    <img src={fuaypi} alt="" style={{width: "200px"}}/>
            </div>
                <div className="col-12 col-sm-6 col-md-3 d-grid list-footer mb-3 mb-md-0">
                    <Link to={props.link1}><div className="contact footer-item">
                    {props.first}
                    </div></Link>
                   <Link to={props.link2}> <span className="contact footer-item">
                   {props.second}
                    </span></Link> 
                    <Link to={props.link3}><span className="contact footer-item">
                    {props.third}
                    </span></Link>
                   <Link to={props.link4}> <span className="contact footer-item">
                   {props.fourth}
                    </span></Link>
                    <Link to={props.link5}><span className="contact footer-item">
                    {props.fifth}
                    </span></Link>
                </div>
            <div className="col-12 col-sm-6 col-md-3 list-footer mt-4">
                <div className="mb-0 mb-md-3 contact">•506 5050 5050</div>
                <div className="contact">•contacto@fuaypi.org</div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                    <h1>
                    <a href="https://www.facebook.com/profile.php?id=100094635593163&mibextid=ZbWKwL"><i class="fa-brands fa-square-facebook me-1 logos-contact"></i></a>  
                   <a href="https://api.whatsapp.com/send?phone=50686131039"> <i class="fa-brands fa-square-whatsapp me-1 logos-contact"></i></a>
                  {/*  <a href=""> <i class="fa-brands fa-cc-paypal logos-contact"></i></a>*/}
                    </h1>
            </div>
           </div>
            <div className="row mt-5">
                <div className="col-12 low-footer">
                    <div className="fuaypi-lowfooter">
                    © 2023 FUNDACIÓN FUAYPI
                    </div>
                </div>
            </div>
        </div>
    )
}