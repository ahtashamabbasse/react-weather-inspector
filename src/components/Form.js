import React, { Component } from 'react';
import './../App.css';

const Form=props=>(
    <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name={'city'} placeholder={'City Name'}/>
            <input type="text" name={'country'} placeholder={'Country Name'}/>
            <input type={'submit'} value={'Get Weather'}/>
        </form>

    </div>
)

export default Form;
