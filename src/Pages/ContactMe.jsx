import React, { Component } from 'react'
import NavBarO from '../Components/navBar/NavBar'
import Styles from './ContactMe.module.css'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { Footer } from '../Components/footer/Footer';
import map from '../Images/map.png';


export const ContactMe = () => {

    const coords = {
        lat: 51.5258541,
        lng: -0.08040660000006028
      };
      const params = {v: '3.exp', key: 'AIzaSyATws37HqR7E9OEJCqajG--Qj0CynGiFkk'};

    return( 
            <div className={Styles.contactMeContainer}>
                <NavBarO />
                <div className={Styles.contact}>
                    <div className={Styles.form} >
                        <form>
                            <div className={Styles.formAttribute}> 
                                <label> Nombre </label><br/>
                                <input  />
                            </div>
                            <div className={Styles.formAttribute}> 
                                <label> Mail </label><br/>
                                <input size="55"/>
                            </div>
                            <div className={Styles.formAttribute}> 
                                <label> Mensaje </label><br/>
                                <textarea rows="10" cols="55" />
                            </div>
                            <button>Enviar</button>
                        </form>
                    </div>
                    <div className={Styles.mediosContacto}>
                        <p>Tambien podes contactarme por:</p>
                        <p>Direccion : : Cordoba 1747, local 46, primer piso</p>
                        <p>Telefono : +549 2235936659</p>
                        <p>Mail : matiasfeliz.fotografia@gmail.com</p>
                    </div>

                </div>
                <div className="map">
                    <Gmaps
                    width={'100%'}
                    height={'200px'}
                    lat={coords.lat}
                    lng={coords.lng}
                    zoom={12}
                    loadingMessage={'Be happy'}
                    params={params}
                    googleMapUrl ="https://maps.googleapis.com/maps/api/js?v=3.exp$key=$AIzaSyATws37HqR7E9OEJCqajG--Qj0CynGiFkk"
                    >
   
              </Gmaps> 
                </div>
                
            <Footer />
            
            </div>
        )
    
}

export default ContactMe
