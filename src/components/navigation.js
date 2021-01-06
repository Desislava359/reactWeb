import React from 'react';
 
import {  Link } from 'react-router-dom';
import './MainStyle.css'
 
const Navigation = () => {
    return (
        <div>
            <div className="albums">
                <div className="responsive">
                    <div className="galleries">
                        <Link to="/fGallery"><img src="https://www.w3schools.com/css/img_5terre.jpg" alt="fBasic" /></Link>
                        <p>First album</p>
                    </div>
                </div>

                <div className="responsive">
                    <div className="galleries">
                        <Link to="/sGallery"><img src="https://www.w3schools.com/css/img_forest.jpg" alt="sBasic" /></Link>
                        <p>Second Album</p>
                    </div>
                </div>

                <div className="responsive">
                    <div className="galleries">
                        <Link to="/tGallery"><img src="https://www.w3schools.com/css/img_lights.jpg" alt="tBasic" /></Link>
                        <p>Third Album</p>
                    </div>
                </div>

                <div className="responsive">
                    <div className="galleries">
                        <Link to="/favGallery"><img src="https://cdn.the-scientist.com/assets/articleNo/66864/aImg/35078/foresttb-m.jpg" alt="tBasic" /></Link>
                        <p>Favorites</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Navigation;