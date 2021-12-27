import { useState } from 'react';
import { Link } from 'react-router-dom'
import Style from "./Dropdown.module.css"

const Dropdown = () => {

  const [showMenu,setShowMenu] = useState(false);

  
  const  showMenuu=(event)=> {
    event.preventDefault();
    
      setShowMenu(!showMenu);
  
  }

    return (
      <div className={Style.dropdownContainer}>
        <button className={Style.button} onClick={showMenuu}>
          Portfolio
        </button>
        
        

             {/*showMenu ||*/ <div className={Style.menu}>
                <Link to="/portfolio/retrato" className={Style.menuItem}> Personas </Link>
                <Link to="/portfolio/moda" className={Style.menuItem}> Moda </Link>
                <Link to="/portfolio/exterior" className={Style.menuItem}> Exterior </Link>
              </div>} 
  
        
      </div>
    );
  }

export default Dropdown

