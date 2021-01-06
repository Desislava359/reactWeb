import React from 'react';
 
import { BrowserRouter, NavLink } from 'react-router-dom';
import './MainStyle.css'
 
const Navigation = () => {
    return (
        <BrowserRouter>

         <div className="albums"> 
            <div className="responsive">
                <div className="galleries">
                    <NavLink to="/fGallery" target="_blank"><img src="https://www.w3schools.com/css/img_5terre.jpg" alt="fBasic"/></NavLink>
                    <p>First album</p>
                </div>
            </div>

            <div className="responsive">
                <div className="galleries">
                    <NavLink to="/sGallery" target="_blank"><img src="https://www.w3schools.com/css/img_forest.jpg" alt="sBasic"/></NavLink>
                    <p>Second Album</p>
                </div>
            </div>

            <div className="responsive">
                <div className="galleries">
                    <NavLink to="/tGallery" target="_blank"><img src="https://www.w3schools.com/css/img_lights.jpg" alt="tBasic"/></NavLink>
                    <p>Third Album</p>
                </div>
            </div>

            <div className="responsive">
                    <div className="galleries">
                    <NavLink to="/favGallery" target="_blank"><img src="https://cdn.the-scientist.com/assets/articleNo/66864/aImg/35078/foresttb-m.jpg" alt="tBasic"/></NavLink>
                    <p>Favorites</p>
                    </div>
            </div> 
        </div>

       </BrowserRouter>
    );
}
 
export default Navigation;