
import { Carousel } from 'rsuite';
import './styleCarousel.css'

// imagenes
import ImagenUno from '../../../assets/photos/imagen-uno.webp'
import ImagenDos from '../../../assets/photos/imagen-dos.webp'
import ImagenTres from '../../../assets/photos/imagen-tres.webp'
import ImagenCuatro from '../../../assets/photos/imagen-cuatro.webp'
import ImagenCinco from '../../../assets/photos/imagen-cinco.webp'

export const CarouselLanding = () => (
    <>
        <Carousel autoplay autoplayInterval={5000} className="custom-slider">
            <img className='imagen-carousel' loading="lazy" alt="Imagen Uno" src={ImagenUno} />
            <img className='imagen-carousel' loading="lazy" alt="Imagen Dos" src={ImagenDos} />
            <img className='imagen-carousel' loading="lazy" alt="Imagen Tres" src={ImagenTres} />
            <img className='imagen-carousel' loading="lazy" alt="Imagen Cuatro" src={ImagenCuatro} />
            <img className='imagen-carousel' loading="lazy" alt="Imagen Cinco" src={ImagenCinco} />
        </Carousel>
    </>
);

