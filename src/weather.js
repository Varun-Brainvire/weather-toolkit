import React from "react";
import Card from 'react-bootstrap/Card'
import './style.css'

function Weather (props) {
    console.log(props)

    const date = new Date()
    const time = date.toDateString()
    const hours = date.getHours()-12
    const min = date.getMinutes()
    // if(hours > 12 ) {

    // }
    console.log(hours)

    return (props.weatherData &&
        <Card className="temp">
            <Card.Body>
            <Card.Title>{time} {hours}:{min} {hours>12 ? "AM" : "PM"}</Card.Title>
            <Card.Title>City : {props.weatherData.name}</Card.Title>    
            <Card.Title>Temperature : {props.weatherData.main.temp}</Card.Title>
            {/* {props && <h3>Feels Like {props.weatherData.feels_like}</h3> } */}
            <Card.Title>Feels Like : {props.weatherData.main.feels_like}</Card.Title>
            <Card.Title>Humidity : {props.weatherData.main.humidity}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Weather;