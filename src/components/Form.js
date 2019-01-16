import React, { Component } from 'react';
import './../App.css';

class Form extends Component {
    render() {
        return (
            <div>
                <p>form</p>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name={'city'} placeholder={'City Name'}/>
                    <input type="text" name={'country'} placeholder={'Country Name'}/>
                    <input type={'submit'} value={'Get Weather'}/>
                </form>

            </div>
        );
    }
}

export default Form;
