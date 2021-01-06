import React, { Component } from 'react';

import Images from './fImages.json'
import './GalleryStyle.css'

class GalleryF extends Component{
    render(){
        return(
            <div className="fGallery">
                <h3>First Album</h3>
                {Images.map((imagesDetail) => {
                    return(                   
                        <div className="fgallery">
                            <img src={imagesDetail.url} alt="salternative text"/>
                            <p>{imagesDetail.title}</p>
                        </div>
                    );
                }
                )}
            </div>
        );
    }

}

export default GalleryF