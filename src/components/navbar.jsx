import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fuaypi from "../img/fuaypi.jpg"

export const Navbar=(props)=>{
  const navigate = useNavigate()
  const [page, setPage]=useState("page")

  const handlePageChange=(pag)=>{
     const page = setPage(pag)
      
  }
  const handleLanguage=()=>{
    
  }
    return(
        <div className="contnav">
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <div className="logonavbar d-none d-sm-block">FUAYPI</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li className="me-auto">
        <div className="logonavbar d-block d-sm-none">FUAYPI</div>
        </li>
        <li class="nav-item me-auto">
          <Link class="nav-link active grow-on-hover" aria-current="page" to={props.link1}>{props.first}</Link>
        </li>
        <li class="nav-item me-auto">
          <Link onClick={()=>setPage("videos")} class="nav-link grow-on-hover"  to={props.link2}>{props.second}</Link>
        </li>
        <li class="nav-item me-auto">
          <Link onClick={()=>setPage("donar")} class="nav-link"  to={props.link3}>{props.third}</Link>
        </li>
        <li class="nav-item me-auto">
          <Link onClick={()=>setPage("noticias")} class="nav-link "  to={props.link4}>{props.fourth}</Link>
        </li>
        <li class="nav-item me-auto" >
          <Link onClick={()=>handlePageChange("proyectos")} class={`nav-link ${page === "proyectos" ? " active":""} `}  to={props.link5}>{props.fifth}</Link>
        </li>
        <li className="me-auto">
        <div class="dropdown idioma">
  <button class="btn btn-drop dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Idioma/Language
  </button>
  <ul class="dropdown-menu">
    
    <li><Link class="dropdown-item" to={"/"}>Español</Link></li>
    <li><Link class="dropdown-item" to={"/home"}>English</Link></li>
  </ul>
</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}