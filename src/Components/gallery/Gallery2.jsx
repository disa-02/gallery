import React from 'react'
import Styles from './Gallery.module.css'
import { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import dataExterior from '../../Images/Exterior/exterior.json'
import dataModa from '../../Images/Moda/moda.json'
import dataRetrato from '../../Images/Retrato/retrato.json'




export const Gallery = (props) => {

       let imagesPath
       let data
       if (props.name === "Retrato"){
        console.log("retrato");
        imagesPath = "Retrato"
        data = dataRetrato


       }
       if (props.name === "Moda"){
        console.log("Moda")
        imagesPath = "Moda"
        data = dataModa


       }
       if (props.name === "Exterior"){
        console.log("Exterior")
        imagesPath = "Exterior"
        data = dataExterior

       }



       data.map((d) => {
        console.log(d.name)

       })



       

        const [model,setModel] = useState(false);
        const [tempImgSrc,setTempImgSrc] = useState('');
        const getImage = (imageSource) => {
            setTempImgSrc(imageSource)
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
                {data.map((d) => {
                    let imageSource = "/gallery/Images/" + imagesPath + "/" + d.name
                    console.log(imageSource)
                    return  <div className={Styles.pics} onClick = { () => getImage(imageSource)}>
                        <img className = {Styles.image} src={imageSource} alt="no carga"/>
                    </div>
                })}



            </div>
           
        </div>
        </>
    )
}
