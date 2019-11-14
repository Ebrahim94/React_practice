import React from 'react'

const Error = (props) =>{
    return(
        <div className = "ui active dimmer">
        <div style = {{color:'red'}} ><i  className="massive exclamation icon"></i><h1>{props.message}</h1></div>
        </div>
    )
}

Error.defaultProps = {
    message:'Sorry, but it seems like you ran into an error!!!'
}
export default Error