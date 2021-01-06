import React, { Component } from 'react'


import fGallery from '../albums/fGallery'
import sGallery from '../albums/sGallery'
import tGallery from '../albums/tGallery'
import favGallery from '../albums/favGallery'
import Navigation from './navigation'
import { BrowserRouter, BrowserRouter as Route, Switch } from 'react-router-dom';

class MainContent extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <BrowserRouter>
                            <Route path="/fGallery" component={fGallery}></Route>
                            <Route path="/sGallery" component={sGallery}></Route>
                            <Route path="/tGallery" component={tGallery}></Route>
                            <Route path="/favGallery" component={favGallery}></Route>
                        </BrowserRouter>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default MainContent