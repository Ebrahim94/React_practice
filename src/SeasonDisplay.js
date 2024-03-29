import React from 'react'
import './SeasonDisplay.css'

const seasonConfig={
    summer:{
        text:'Let us hit the beach',
        iconName:'sun'
    },
    winter:{
        text:'It is cold outside',
        iconName:'snowflake'
    }
};


const getSeason = (lat, month) =>{
    if(month > 2 && month <9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }

}

const SeasonDisplay = (prop) =>{
    const season = getSeason(prop.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]

    return(
    <div className={`season-display ${season}`}>
        <i className ={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className = {`icon-right massive ${iconName} icon`} />
    </div>
    )
}

export default SeasonDisplay