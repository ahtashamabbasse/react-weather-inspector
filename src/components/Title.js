import React, { Component } from 'react';
import './../App.css';

class Title extends Component {
    render() {
        return (
            <div>
                <h1 className={"title-container__title"}>Weather Finder</h1>
                <p className={'title-container__subtitle'}>Find out the Temperature, conditions and more...</p>
            </div>
        );
    }
}

export default Title;
