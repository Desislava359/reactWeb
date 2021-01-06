import React, { Component } from 'react'


import FirstGallery from '../albums/fGallery';
import SecondGallery from '../albums/sGallery';
import ThirdGallery from '../albums/tGallery';
import FavoritesGallery from '../albums/favGallery';
import Navigation from './navigation';
import { BrowserRouter, BrowserRouter as Route, Switch } from 'react-router-dom';

class MainContent extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Navigation />
                    
                    <Switch>

                        <Route exact path="/">
                            welome
                        </Route>
                        <Route path="/fGallery">
                            <FirstGallery/>
                        </Route>
                        <Route path="/sGallery">
                            <SecondGallery/>
                        </Route>
                        <Route path="/tGallery" >
                            <ThirdGallery/>
                        </Route>
                        <Route path="/favGallery">
                            <FavoritesGallery/>
                        </Route>
                    
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default MainContent