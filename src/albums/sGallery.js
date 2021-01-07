import React, { Component } from 'react';

import Images from './sImages.json';
import './GalleryStyle.css';

class GalleryS extends Component{
    render(){
        return(
            <div className="photosContent">
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