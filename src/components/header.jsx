import React from 'react';
import '../styleshets/header.css'

function Header (){

    return (
        <div>

            {/*   <!-- header inicio --> */}
            <div className="row header gx-0">
                <div className="col-12 col-lg-6">
                    <nav className="navbar" id="header">
                        <div className="logo">
                            <a className="navbar-brand" href="#">
                                <img src="./images/logo.png" alt="Sigilo" />
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                    <nav className="barra navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                <div className="clr">
                <a className="nav-link clr" href="#sigilo">Sigilo</a>
              </div>
              <div className="clr">
                <a className="nav-link clr" href="#conócenos">
                  Conócenos
                  </a>
              </div>
              <div className="clr">
                <a className="nav-link clr" href="#nuestra creación">Juego</a>
              </div>
              <div className="clr">
                <a className="nav-link clr" href="#personajes">Personajes</a>
              </div>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle clr" href="#contacto" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Contacto
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a type="button" data-bs-toggle="modal" data-bs-target="#correo" className="dropdown-item clrx" href="#">Correo</a></li>
                                            <li><a type="button" data-bs-toggle="modal" data-bs-target="#WhatsappEmpresarial" className="dropdown-item clrx" href="#">Número</a></li>
                                            <li><a type="button" data-bs-toggle="modal" data-bs-target="#PQRS" className="dropdown-item clrx" href="#">PQRS</a></li>
                                        </ul>
                                    </li>
                                    <button type="button" className="hola" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Inicio de sesión
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/*   <!-- header final --> */}


        </div>
    )

}

export default Header;