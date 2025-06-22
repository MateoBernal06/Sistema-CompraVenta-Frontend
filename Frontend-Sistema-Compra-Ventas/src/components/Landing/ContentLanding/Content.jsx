
import './styleContent.css'
import estudianteDos from '../../../assets/images/estudiante-dos.png'
import Stat from 'rsuite/Stat';
import { FaBook } from "react-icons/fa"; 
import { IoSearchSharp } from "react-icons/io5";
import { FaBox } from "react-icons/fa";
import HStack from 'rsuite/HStack';
import StatGroup from 'rsuite/StatGroup';

export const ContentLandingPage = () => {
    return (
        <>
            <div className='description-landing'>
                <Stat bordered className='stat-item' icon={<FaBox color="black" style={{ fontSize: 30 }} />}>
                    <Stat.Value>Comparte tus habilidades</Stat.Value>
                    <Stat.Label>Ofrece clases, diseño, reparación y otros servicios.</Stat.Label>
                </Stat>

                <Stat bordered className='stat-item' icon={<FaBook color="black" style={{ fontSize: 30 }} />}>
                    <Stat.Value>Vende lo que ya no usas</Stat.Value>
                    <Stat.Label>Publica libros, gadgets, ropa y más que ya no necesitas.</Stat.Label>
                </Stat>

                <Stat bordered className='stat-item' icon={<IoSearchSharp color="black" style={{ fontSize: 30 }} />}>
                    <Stat.Value>Descubre oportunidades cerca</Stat.Value>
                    <Stat.Label>Compra a otros estudiantes de forma segura y directa.</Stat.Label>
                </Stat>
            </div>
            
            <p className='title-landing'>Vende lo que ya no usas en pocos pasos</p>
            <StatGroup className='description-porcentjes'> 
                <Stat className='stat-item-porcentajes'>
                    <Stat.Label><b>Servicios ofrecidos</b></Stat.Label>
                    <HStack spacing={10}>
                        <Stat.Value>400</Stat.Value>
                        <Stat.Trend>+8%</Stat.Trend>
                    </HStack>
                </Stat>
                <Stat className='stat-item-porcentajes'>
                    <Stat.Label><b>Usuarios registrados</b></Stat.Label>
                    <HStack spacing={10}>
                        <Stat.Value>500+</Stat.Value>
                        <Stat.Trend>+10%</Stat.Trend>
                    </HStack>
                </Stat>

                <Stat className='stat-item-porcentajes'>
                    <Stat.Label><b>Compras fallidas</b></Stat.Label>
                    <HStack spacing={10}>
                        <Stat.Value>15</Stat.Value>
                        <Stat.Trend indicator="down">5%</Stat.Trend>
                    </HStack>
                </Stat>

                <Stat className='stat-item-porcentajes'>
                    <Stat.Label><b>Artículos disponibles</b></Stat.Label>
                    <HStack spacing={10}>
                        <Stat.Value>800+</Stat.Value>
                        <Stat.Trend>+7%</Stat.Trend>
                    </HStack>
                </Stat>
                <Stat className='stat-item-porcentajes'>
                    <Stat.Label><b>Transacciones exitosas</b></Stat.Label>
                    <HStack spacing={10}>
                        <Stat.Value>500</Stat.Value>
                        <Stat.Trend>+10%</Stat.Trend>
                    </HStack>
                </Stat>
            </StatGroup>

            <div className="infoLanding">
                <div className='item-image'>
                    <img className='imagen' src={estudianteDos} alt="Estudiante" loading="lazy"/>
                </div>
                <div className='item-info'>
                    <p className='text-title'>Dragon Ya</p>
                    <p className='text-description'>
                        Dragon Ya es una plataforma creada para ayudarte a encontrar lo que necesitas dentro 
                        de la comunidad de la ESFOT. Ya sea que busques libros, postres, dispositivos 
                        electrónicos o incluso artículos de segunda mano, nuestra plataforma conecta 
                        a estudiantes de forma segura y rápida, para que puedas comprar o vender sin 
                        complicaciones.
                    </p>
                </div>
            </div>

        </>
    );
};
