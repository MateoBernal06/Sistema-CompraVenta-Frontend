
import './styleContent.css'
import estudianteUno from '../../../assets/images/estudiante-uno.png'
import estudianteDos from '../../../assets/images/estudiante-dos.png'
import { Button } from 'rsuite';

export const ContentLandingPage = () => {
    return (
        <>
            <p className='title-landing'>Vende lo que ya no usas en pocos pasos 🐲</p>
            
            <div className="infoLanding">
                <div className='item-image'>
                    <img className='imagen' src={estudianteUno} alt="Estudiante" loading="lazy"/>
                </div>
                <div className='item-info'>
                    <p className='text-title'>Sistema de compra-venta pensado para estudiantes de la ESFOT</p>
                    <p className='text-description'>
                        Este sistema fue creado para ayudarte a encontrar lo que necesitas dentro 
                        de la comunidad de la ESFOT. Ya sea que busques libros, postres, dispositivos 
                        electrónicos o incluso artículos de segunda mano, nuestra plataforma conecta 
                        a estudiantes de forma segura y rápida, para que puedas comprar o vender sin 
                        complicaciones.
                    </p>
                </div>
            </div>

            <div className="infoLanding">
                <div className='item-info'>
                    <p className='text-title'>No dejes que tus libros acumulen polvo</p>
                    <p className='text-description'>
                        ¿Tienes libros, ropa o apuntes que ya no necesitas? Publícalos en minutos. Este 
                        sistema es ideal para estudiantes que buscan generar ingresos extra y liberar espacio. 
                        Todo dentro de la ESFOT.
                    </p>
                    <Button  color="blue" appearance="primary" className='button'>Registro</Button>
                </div>
                <div className='item-image'>
                    <img className='imagen' src={estudianteDos} alt="Estudiante" loading="lazy"/>
                </div>
            </div>
        </>
    );
};
