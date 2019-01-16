import React, {Component} from 'react';
import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "d49a0ac97d35d587a28ede11aaa55626"

class App extends Component {
    state = {
        city: undefined,
        country: undefined,
        temperature: undefined,
        description: undefined,
        humidity: undefined,
        error: undefined,
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const url = `https://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
        console.log(url)
        const todayWeatherApi = await fetch(url);
        const todayWeather = await todayWeatherApi.json();
        console.log(todayWeather)
        if (city !== "" && country !== "") {
            this.setState({
                city: todayWeather.name,
                country: todayWeather.sys.country,
                temperature: todayWeather.main.temp,
                humidity: todayWeather.main.humidity,
                description: todayWeather.weather[0].description,
                error: '',

            })
            console.log(this.state)

        } else {
            this.setState({
                city: undefined,
                country: undefined,
                temperature: undefined,
                humidity: undefined,
                description: undefined,
                error: 'Please Enter The required Fields',
            })
        }


    };

    render() {
        return (
            <div>
                <Title/>
                <Form getWeather={this.getWeather}/>
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}


                />
            </div>
        );
    }
}

export default App;
