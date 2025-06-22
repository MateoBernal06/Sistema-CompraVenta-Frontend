import './styleFooter.css'
import Logo from '../../../assets/logos/logo-project.png'

export const FooterLanding = () => {
    return (
        <footer className="footer-landing">
            <div className='redes'>
                <img src={Logo} alt="Logo" className="footer-logo" />
                <p>
                    Copyright © 2025 DragonYa
                </p>
                <ul className='footer-list'>
                    <li>Aspectos legales</li>
                    <li>Política de privacidad</li>
                    <li>Términos y condiciones</li>
                    <li>Administrar las cookies</li>
                </ul>
            </div>

        </footer>
    );
};
