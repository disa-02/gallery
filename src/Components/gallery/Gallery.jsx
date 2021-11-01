import React from 'react'
import Styles from './Gallery.module.css'
import { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';


export const Gallery = (props) => {
    function importAll(r) {
        console.log("importAll")
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
       }
       let images = []
       if (props.name === "Retrato"){
        console.log("retrato");
        images = importAll(require.context('../../Images/Retrato', true, /\.(png|jpe?g|svg)$/));
       }
       if (props.name === "Moda"){
        console.log("Moda")
        images = importAll(require.context('../../Images/Moda', true, /\.(png|jpe?g|svg)$/));
       }
       if (props.name === "Exterior"){
        console.log("Exterior")
        images = importAll(require.context('../../Images/Exterior', true, /\.(png|jpe?g|svg)$/));
       }
       console.log("aaa")


       const imagesName = [];
       Object.values(images).map( (i) => {
           console.log("imagesName")
           let arr = i.default.split(".");
           let name = arr[0].split("/")[3];
           let format = arr[2]
           imagesName.push(name + "." + format)
           
           return "A"
           
       })
       

        const [model,setModel] = useState(false);
        const [tempImgSrc,setTempImgSrc] = useState('');
        const getImage = (img) => {
            setTempImgSrc(img);
            setModel(true);
    
       }


       

    return (
        <>
        <div className={model ? Styles.open : Styles.model}>
            <img src={tempImgSrc} alt=""/>
            <CloseIcon onClick={() => setModel(false) } />
        </div>

        <div className = {Styles.galleryContainer}>
            <div className = {Styles.imagess}>
                {imagesName.map((im) => 
                    <div className={Styles.pics} onClick={() => getImage(images[im].default)}>
                        <img className = {Styles.image} src={images[im].default} alt="no carga"/>
                    </div>
                )}
            </div>
           
        </div>
        </>
    )
}
