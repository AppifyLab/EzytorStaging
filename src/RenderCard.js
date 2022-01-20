import React from "react";

import SvgContainer from './componentElements/SvgContainer'
import WhyCard from './componentElements/WhyCard'
import RenderComplexCard from './RenderComplexCard'
import IdGenerator from './IdGenerator'



function renderer(config) {
  if(config.cmType == 'complex'){
    return RenderComplexCard(config)
  }
  var configProperty = {
    style: config.style,
    key:IdGenerator()
  };
  if(config.class){
    configProperty.className = config.class
  }
  if(config.props){

    var propKeys = Object.keys(config.props);
    for(let d of propKeys){
        if(config.props[d]){
          configProperty[d]= config.props[d]
        }
    }
  }

 
  if(config.component == 'svg'){
    return  React.createElement(SvgContainer, config.props,null)
  }
  if(config.component == 'WhyCard'){
    return  React.createElement(WhyCard, {key:IdGenerator(),data:config.content},null)
  }


  return React.createElement(
    config.component,
    configProperty,
    config.content &&
      ( config.type == "section"  ? config.content.map(c => renderer(c)) : config.content ) 
  );
}

export default renderer;