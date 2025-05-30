import './BarNavegation.css'
import Logo from '../../../assets/logos/logo-project.png'


export const BarVerification = () => {
    return(
        <>
            <nav className="bar-navegation">
                <div className='logo-project'>
                    <img src={Logo} alt="Logo" className='logo'/>
                </div>
            </nav>
        </>
    )
}