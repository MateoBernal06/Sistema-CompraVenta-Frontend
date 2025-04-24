
import { Carousel } from 'rsuite';
import './styleCarousel.css'

// imagenes
import DragonPresentacion from '../../../assets/photos/DragonPresentacion.jpg'
import VentasEstudiantes from '../../../assets/photos/ventas-estudiantiles.jpg'
import ImagenUno from '../../../assets/photos/imagen_uno.jpg'

export const CarouselLanding = () => (
    <div className='place-carousel'>
        <Carousel autoplay className="custom-slider">
            <img className='imagen-carousel' src={VentasEstudiantes} />
            <img className='imagen-carousel' src={DragonPresentacion} />
            <img className='imagen-carousel' src={ImagenUno} />
        </Carousel>
    </div>
);

