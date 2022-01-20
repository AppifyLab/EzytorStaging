// import './themes/assets1/css/glide.core.min.css';
// import './themes/assets1/css/style.css';
// import './themes/assets1/css/bootstrap.min.css';
import React, { useState,useContext } from 'react';
import RenderCard from './RenderCard'
import ColorInput from './inputComponents/ColorInput'

import * as theme1 from './themes/theme3'

import  { MainLayout , MainDispatchLayout } from  "./shared/MainLayout"



function HtmlSaver() {

    const bigData = React.useContext(MainLayout);
    
    return ( 
        <div>
           <ColorInput />
            {bigData.map(config => RenderCard(config))}
        </div>
     );
}

export default HtmlSaver;
