import React from 'react';
import { SubHeading } from '../../components';
import {AppWrap} from '../../wrapper';

import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" >
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1> 
      <p className="p__opensans" style={{margin: '2rem 0'}}>Tasty food prepared by the top chefs. We also have great cocktails and fine wine to go with that</p>   
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header image" />
    </div>
  </div>
);

export default AppWrap(Header, 'home');
