import React, { Component } from 'react';
import './../App.css';

const Form=props=>(
    <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name={'city'} placeholder={'City Name'}/>
            <input type="text" name={'country'} placeholder={'Country Name'}/>
            <button className={''} type={'submit'}>Get Weather</button>
        </form>

    </div>
)

export default Form;
