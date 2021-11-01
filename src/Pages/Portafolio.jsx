import React from 'react'
import { Gallery } from '../Components/gallery/Gallery'
import NavBarO from '../Components/navBar/NavBar'
import Styles from './Portafolio.module.css'
import {Footer} from '../Components/footer/Footer'

function Portafolio(props) { 
    const [scrollHeight,setScrollHeight] = React.useState(0);

    const handleScroll = () =>{
      const position =window.scrollY;
      setScrollHeight(position);
    }
  
    React.useEffect(() => {
      window.addEventListener("scroll",handleScroll);  
    },[scrollHeight])
    
    return (
        <div className={Styles.portafolioContainer} >
            <NavBarO isScrolling={scrollHeight}/>  
            <div className={Styles.text}>
              <h1>{props.name}</h1>
            </div>  
            <Gallery name={props.name}/>  
            <Footer />  
        </div>
    )
}

export default Portafolio
