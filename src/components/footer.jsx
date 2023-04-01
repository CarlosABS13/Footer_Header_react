import React from 'react';
import '../styleshets/footer.css'

function Footer (){

    return(
        <div>
            <div className="footer d-flex flex-column justify-content-center align-items-center">
                <div>
                    <a href="#header" className="logof">
                        <img src="./images/logo.png" className="logof" alt="SIGILO" />
                    </a>
                </div>
                <p className="fs-6 fw-semibold">Términos y condiciones.</p>
                <p className="fs-6 fw-semibold">Derechos reservados.</p>
                <div>
                    <a href="https://es-la.facebook.com/" target="_blank" className="logos nav-item">
                        <img src="./images/facebook.png" alt="Facebook" className="logos" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="logos">
                        <img src="./images/instagram.png" alt="Instagram" className="logos" />
                    </a>
                    <a href="https://co.pinterest.com/" target="_blank" className="logos">
                        <img src="./images/pinterest.png" alt="Pinterest" className="logos" />
                    </a>
                    <a href="https://www.tiktok.com/" target="blank" className="logos">
                        <img src="./images/tiktok.png" alt="Tik-Tok" className="logos" />
                    </a>
                    <a type="button" data-bs-toggle="modal" data-bs-target="#WhatsappEmpresarial" className="logos">
                        <img src="./whatsapp.png" alt="Whatsapp" className="logos" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;