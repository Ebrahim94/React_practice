import React from 'react'

const getSeason = (lat, month) =>{
    if(month > 2 && month <9){
        return lat > 0 ? 'Summer' : 'Winter';
    }else{
        return lat > 0 ? 'Winter' : 'Summer';
    }

}

const SeasonDisplay = (prop) =>{
    const season = getSeason(prop.lat, new Date().getMonth())
    const text = season === 'Winter' ? 'It is cold outside': 'Let us hit the beach'
    const style = {

        position:"absolute",
        left:"50%",
        top:"50%",
        transform:"translate(-50%, -100%)"

    }

    return(
    <div>
        <h1 style={style} >{text}</h1>
    </div>
    )
}

export default SeasonDisplay