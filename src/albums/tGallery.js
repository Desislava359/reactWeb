import React, { Component } from 'react';

import Images from './tImages.json'
import './GalleryStyle.css'

class GalleryT extends Component{
    render(){
        return(
            <div className="fGallery">
                <h3>Third Album</h3>
                {Images.map((imagesDetail) => {
                    return(                   
                        <div className="fgallery">
                            <img src={imagesDetail.url} alt="talternative text"/>
                            <p>{imagesDetail.title}</p>
                        </div>
                    );
                }
                )}
            </div>
        );
    }
}

export default GalleryT