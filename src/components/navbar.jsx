import React from "react";


export const Navbar=()=>{
    return(
        <div className="contnav">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Videos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Donar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Noticias</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Proyectos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}