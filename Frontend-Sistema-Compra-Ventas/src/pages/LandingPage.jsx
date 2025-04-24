
import { BarNavegation } from "../components/ComponentsHome/NavLanding/BarNavegation"
import { CarouselLanding } from "../components/ComponentsHome/Carousel/CarouselLanding"
import { ContentLandingPage } from "../components/ComponentsHome/ContentLanding/Content"
import { FooterLanding } from "../components/ComponentsHome/Footer/FooterLanding"

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