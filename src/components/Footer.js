import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer col-md-12 col-sm-12 text-center">
            <p className="footerText">Todos los derechos Reservados © Martin Jerez</p>
            <div className="icons">
                <a href="https://www.facebook.com/martin.jerezleal/" rel="noopener noreferrer" target="_blank" className="mr-2"><FaFacebookSquare className="icon-react mb-3" /></a>
                <a href="https://www.instagram.com/martin.jerez.leal/" rel="noopener noreferrer" target="_blank" className="mr-2"><FaInstagram className="icon-react mb-3" /></a>
                <a href="https://ar.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-2"><FaLinkedinIn className="icon-react mb-3" /></a>
                <a href="https://github.com/martincho111986/Buscador-Bebidas" rel="noopener noreferrer" target="_blank" className="mr-2"><FaGithub className="icon-react mb-3" /></a>
            </div>
        </div>
    );
}

export default Footer;