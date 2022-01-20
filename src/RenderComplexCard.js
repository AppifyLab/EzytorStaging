import React from "react";
import IdGenerator from './IdGenerator'
import SvgContainer from './componentElements/SvgContainer'

function RenderComplexCard(config) {
    var configProperty = {
        style: config.style,
        key:IdGenerator()
      };
      if(config.class){
        configProperty.className = config.class
      }
    var content = [];
    config.content.map(c => {
      console.log(c.component,'component')
      if(c.component == ''){
        content.push(c.content)
      }
      else {
        var cProperty = {
          style: c.style,
          key:IdGenerator()
        };
        if(c.class){
          cProperty.className = c.class
        }
    
        var element
        if(c.component == 'svg'){
            var props = {
                svgProps:c.props.svgProps,
                pathProps:c.props.pathProps,

            }
          element = React.createElement(SvgContainer, c.props,null)
        }
        else {

          element = React.createElement(c.component, cProperty,c.content)
        }
        content.push(element)
      }
    })

    
   
    return React.createElement(config.component,  configProperty, content)
    
}

export default RenderComplexCard;