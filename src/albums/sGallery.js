import React, { Component } from 'react';

import Images from './sImages.json'
import './GalleryStyle.css'

class GalleryS extends Component{
    render(){
        alert("hello");
        return(
            <div className="fGallery">
                <h3>Second Album</h3>
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

export default GalleryS