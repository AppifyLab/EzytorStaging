import React, { useState,useContext } from 'react';
import  { CustomStyle , CustomDispatchStyle } from  "../shared/CustomStyle"
import  { MainLayout , MainDispatchLayout } from  "../shared/MainLayout"

function findInJsonById(jdata,id){
   


    var value = null;
    for(let d of jdata){
        if(d.id == id ){
            value = d;
            console.log("yes found opi")
            return value;
        }
        if(Array.isArray(d.content)){
            value =  findInJsonById(d.content,id)
            if(value && value.id ==id) return value;
        }
    }
    return value;

}
const findSaveInJsonById = async  (jdata,id,data) =>{
  
    let newData = [];

    var value = null;
    for(let d of jdata){
        console.log(d.id)
        if(d.id == id ){
            value = d
            d = data ;

            console.log("yes and save found")
            console.log(d.id)
           
           
        }

        if(Array.isArray(d.content)){
            d.content = await  findSaveInJsonById(d.content,id,data)
            
        }

        newData.push(d)

    }
    return newData;

}
const ColorInput =  () =>{
    const [bgColor,sectionId] = React.useContext(CustomStyle);
    const bigData = React.useContext(MainLayout);
    const setBigData = React.useContext(MainDispatchLayout);
    const [setBgColor,setSectionId] = useContext(CustomDispatchStyle);
    const div = {
        id:'level4-4-2-1',
        src:'./assets/images/w1.svg',
        style:{},
        h4:'Up to Date',
        p:'pleasures to secure other greater pleasures, or else he endures '
    }
    const [isFound,setIsFound] = React.useState(div);
    const handleChange = async (e) => {
        let tcolor = {...bgColor};
        tcolor.color = e.target.value
        setBgColor(tcolor);
        if(isFound && isFound.style) {

            const dp = {...isFound};
            dp.style = {
                color : e.target.value
            }
            setIsFound(dp)
            const tbigData = [...bigData];

            console.log('dpdpd');
            console.log(dp);
            var newData = await findSaveInJsonById(tbigData,sectionId,dp);
            console.log('tbigData');
            console.log(newData);
            setBigData(newData)
        }
        
    }
    return (
      
            
        <div>
            {  console.log("From Color Input Component")}
            <input value={bgColor.color} onChange={handleChange} type="color" /> 
        </div>
      );
}

export default ColorInput;