import  Styles  from './Footer.module.css'
import instagramIcon from '../../Images/Icons/instagram.png'
import facebookIcon from '../../Images/Icons/facebook.png'
import tiktokIcon from '../../Images/Icons/tiktok.png'



export const Footer = () => {

    return (<div className = {Styles.footerContainer}>
                <div className = {Styles.contacto}>
                    <h1> Contacto </h1>
                    <p> Telefono : +549 2235936659 </p>
                    <p> Mail : matiasfeliz.fotografia@gmail.com</p>
                    <p> Direccion : Cordoba 1747, local 46, primer piso </p>

                </div>
                <div className = {Styles.redes}>
                    <h1> Redes </h1>
                    <div className = {Styles.icons}>
                        <a  href = "https://www.instagram.com/matiasfeliz.fotografia/" target = "_blank"> <img className = {Styles.icon} src = {instagramIcon}/></a>
                        <a  href = "https://www.facebook.com/matiasfeliz.fotografia/" target = "_blank"> <img className = {Styles.icon} src = {facebookIcon}/></a>
                        <a  href = "https://www.tiktok.com/@matiasfeliz.fotografia?" target = "_blank"> <img className = {Styles.icon} src = {tiktokIcon}/></a>
                    </div>
                    
                </div>

            </div>
    )
}