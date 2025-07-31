import './styleFooter.css'
import Logo from '../../../assets/logos/logo-project.png'

export const FooterLanding = () => {
    return (
        <footer className="footer-landing">
            <div className='redes'>
                <img src={Logo} alt="Logo" className="footer-logo" />
                <p>
                    copyright © 2025 Dragon Ya
                </p>
                <p>
                    Desarrollado por Mateo Bernal
                </p>
            </div>

        </footer>
    );
};
