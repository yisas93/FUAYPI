import React from "react";
import emailjs from "emailjs-com"


export const Email=()=>{
    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm("service_4l029ol", "template_kn74a8a", e.target, "KeLKw4a3-Mqtcw0do")
        .then ((result)=>{
            console.log(result.text)
        }, (error)=>{
            console.log(error.text)
        })
        e.target.reset()
    }
    return(
        <div className="email row d-grid d-sm-flex justify-content-center" >
            <div className="col-12 col-sm-7 form-container">
               <form onSubmit={sendEmail}  className="row form-inner" >
                <h1 className=" col-11 col-sm-12 m-auto">
                    Contactanos
                </h1>
                <div className="col-11 col-sm-12 m-auto d-flex">
                    <input type="text" placeholder="name" name="name"  className="input-form me-2"/>
                    <input type="email" placeholder="email" name="email"  className="input-form"/>
                </div>
                
               <div className="col-11 col-sm-12 m-auto ">
                <input type="text" placeholder="subject" name="subject" className="input-form"/>
               </div>
                <div className="col-11 col-sm-12 m-auto textarea-holder">
                    <textarea className="textarea" name="message" placeholder="message" cols="37" rows="8">

                    </textarea>
                </div>
                <div className="col-11 col-sm-12 m-auto">
                    <input type="submit" className="btn btn-info" value="send Message" />
                </div>
            </form> 
            </div>
            <div className="col-12 col-sm-5 side-form" >
                <h1 className="mb-3">FUAYPI</h1>
                <div className="row d-grid ">
                    <div className="col d-flex form-icon-cont">
                        <div className="icon-form d-flex align-items-center justify-content-cente">
                            <i class="fa-brands fa-whatsapp me-2"></i>
                        </div>
                        <div className="icon-text">
                            <span className="icon-text-inner">Telefono:</span>  5050 5050
                        </div>
                    </div>
                    <div className="col d-flex form-icon-cont">
                        <div className="icon-form d-flex align-items-center justify-content-cente">
                        <i class="fa-regular fa-paper-plane me-2"></i>
                        </div>
                        <div className="icon-text">
                            <span className="icon-text-inner">Email:</span> contacto@fuaypi.org
                        </div>
                    </div>
                    <div className="col d-flex form-icon-cont">
                        <div className="icon-form d-flex align-items-center justify-content-cente">
                        <i class="fa-brands fa-facebook me-2"></i>
                        </div>
                        <div className="icon-text">
                            <span className="icon-text-inner">Facebook:</span> @fuaypi
                        </div>
                    </div>
                   
                </div>
            </div>
            
        </div>
    )
}