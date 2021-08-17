import './App.css';
import React, {Component} from 'react';
import Header from './components/Header';
import Key from './components/Key';

const initialState = {
  keyOne: {
    title: "x",
    description: 'xx',
    status: true
  },
  keyTwo: {
    title: "x",
    description: 'xx',
    status: true
  },
  keyThree: {
    title: "x",
    description: 'xx',
    status: true
  },
  keyFour: {
    title: "x",
    description: 'xx',
    status: true
  },
  keyFour: {
    title: "x",
    description: 'xx',
    status: true
  },
  keyFive: {
    title: "x",
    description: 'xx',
    status: true
  },
  keySix: {
    title: "x",
    description: 'xx',
    status: true
  },
  keySeven: {
    title: "x",
    description: 'xx',
    status: true
  },
  keyEight: {
    title: "x",
    description: 'xx',
    status: true
  },
  keyNine: {
    title: "x",
    description: 'xx',
    status: true
  },
  keyTen: {
    title: "x",
    description: 'xx',
    status: true
  },
  keyEleven: {
    title: "x",
    description: 'xx',
    status: true
  },
  keyTwelve: {
    title: "x",
    description: 'xx',
    status: true
  },
  keyThirteen: {
    title: "x",
    description: 'xx',
    status: true
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState
  }

  loadData = (data) => {
    this.setState({
      country: data.locationInfo.country,
      lat: data.locationInfo.lat,
      lon: data.locationInfo.lon,
      zip: data.locationInfo.zip, 
      city: data.locationInfo.name,
      weatherData: data.weatherData
    })
  }
  onRouteChange = (route)  => {
    if (route === 'newLocation'){
      this.setState({initialState})
    } 
    this.setState({route: route})    
  }
  componentDidMount(){
    fetch(process.env.REACT_APP_SERVER_URL)
    .then(response => console.log('Waking up server: ', response.status));
  }
  render(){
    let alerts = <div><h4 className='text-center'>Weather Alerts</h4><p className="text-center">No active weather alerts</p></div>;
    if (this.state.weatherData.alerts !== null){
      alerts = <Alert weatherData={this.state.weatherData}/>
    }
    return (  
      <div className="App">
        <Header/>
        <Key />
        <Key/>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
      </div>
    );
  } 
}

export default App;
