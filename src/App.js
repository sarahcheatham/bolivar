import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      weatherData: []
    }
  }
  componentDidMount(){
    const lat = 29.447705;
    const lng = -94.658790;
    let options = {
      headers: {
        'Authorization': 'a3e150ac-76c6-11e9-bf86-0242ac130004-a3e151a6-76c6-11e9-bf86-0242ac130004'
      }
    }
    fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}`, options) 
    .then(response => response.json())
    .then(weatherData => this.setState({ weatherData: weatherData.hours[0] }))
  }
  render(){
    // console.log(this.state.weatherData.waveHeight)
    return (
      <div className="App">
        <h1>Bolivar Peninsula</h1>
      </div>
    );
  }
}


export default App;
