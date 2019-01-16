import React, {Component} from 'react';
import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "d49a0ac97d35d587a28ede11aaa55626"

class App extends Component {

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const url=`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`
        const todayWeatherApi = await fetch(url);
        const todayWeather = await todayWeatherApi.json();
        console.log(todayWeather)
    };

    render() {
        return (
            <div>
                <Title/>
                <Form getWeather={this.getWeather}/>
                <Weather/>
            </div>
        );
    }
}

export default App;
