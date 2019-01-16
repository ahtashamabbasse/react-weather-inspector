import React, { Component } from 'react';
import './../App.css';

const Weather=props=> (
    <div>
        {props.city && props.country && <p>Location :  {props.city},{props.country} </p>}
        {props.temperature && <p>temperature:  {props.temperature} </p>}
        {props.humidity && <p>humidity :  {props.humidity} </p>}
        {props.description && <p>Description :  {props.description} </p>}
        {props.error && <p>{props.error} </p>}
    </div>
)


export default Weather;