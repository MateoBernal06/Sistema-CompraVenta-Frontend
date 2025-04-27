
import { BarNavegation } from "../components/Landing/NavLanding/BarNavegation"
import { CarouselLanding } from "../components/Landing/Carousel/CarouselLanding"
import { ContentLandingPage } from "../components/Landing/ContentLanding/Content"
import { FooterLanding } from "../components/Landing/Footer/FooterLanding"

const LandingPage = () => {
    return(
        <>
            <BarNavegation />
            <CarouselLanding />
            <ContentLandingPage />
            <FooterLanding />
        </>
    )
}

export default LandingPage