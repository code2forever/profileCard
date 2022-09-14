import React from "react"

const Card=(props)=>{
    return(
        <section className="card">
        <img className="card--img" src={`../image/${props.imageUrl}`} alt="Nothing to show"/>
        <div className="card--details">
        <div className="card--location"> 
        <img className="card--marker" src="../image/marker.png"/>
        <span className="card--location--country">{props.location}</span>
        <a className="card--maplink"href={`${props.googleMapsUrl}`}>View on Google Maps</a>        
        </div>
        <h1 className="card--place"> {props.title}</h1>
        <div className="card--timeline">{props.startDate}-{props.endDate}</div>
        <p className="card--description">{props.description}</p>
        </div>
        </section>
    )
}

export default Card;