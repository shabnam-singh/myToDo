import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
   
  return (
    <>
        
           <h1 id='h1'>{props.title}</h1>
           <b>{props.data}</b> 
           <input type='text' id='inp'/>
           <br/>

           {props.show?"You Passed True":"False"}
            
            
            </>

  )
}

//Setting Default values for props
Header.defaultProps={
    title:"Your Title come Here",
    data:"Default Value",
    show:false
}


//Restricting type of comming props
Header.propTypes={
    title:PropTypes.string,
    data:PropTypes.string,
    show:PropTypes.bool
}