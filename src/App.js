import './App.css';
import React, {Component} from 'react';
import Header from './components/Header';
import Key from './components/Key';

const initialState = {
  currentParty: 'democrat',
  keyOne: {
    title: "Incumbent-party Mandate",
    description: 'After the midterm elections, the incumbent party holds more seats in the U.S. House of Representatives than it did after the previous midterm elections.',
    status: true
  },
  keyTwo: {
    title: "Nomination Contest",
    description: 'There is no serious contest for the incumbent-party nomination.',
    status: true
  },
  keyThree: {
    title: "Incumbency",
    description: 'The incumbent-party candidate is the sitting president.',
    status: true
  },
  keyFour: {
    title: "Third Party",
    description: 'There is no significant third-party or independent campaign.',
    status: true
  },
  keyFive: {
    title: "Short-Term Economy",
    description: 'The economy is not in recession during the election campaign.',
    status: true
  },
  keySix: {
    title: "Long-Term Economy",
    description: 'Real annual per-capita economic growth during the term equals or exceeds mean growth during the two previous terms.',
    status: true
  },
  keySeven: {
    title: "Policy Change",
    description: 'The incumbent administration effects major changes in national policy.',
    status: true
  },
  keyEight: {
    title: "Social Unrest",
    description: "There is no sustained social unrest during the incumbent's term.",
    status: true
  },
  keyNine: {
    title: "Scandal",
    description: 'The incumbent administration is untainted by major scandal.',
    status: true
  },
  keyTen: {
    title: "Foreign or military failure",
    description: 'The incumbent administration suffers no major failure in foreign or military affairs.',
    status: true
  },
  keyEleven: {
    title: "Foreign or military success",
    description: 'The incumbent administration achieves a major success in foreign or military affairs.',
    status: true
  },
  keyTwelve: {
    title: "Incumbent Charisma",
    description: 'The incumbent-party candidate is charismatic or a national hero.',
    status: true
  },
  keyThirteen: {
    title: "Challenger Charisma",
    description: 'The challenging-party candidate is not charismatic or a national hero.',
    status: true
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState
  }

  // loadData = (data) => {
  //   this.setState({
  //     country: data.locationInfo.country,
  //     lat: data.locationInfo.lat,
  //     lon: data.locationInfo.lon,
  //     zip: data.locationInfo.zip, 
  //     city: data.locationInfo.name,
  //     weatherData: data.weatherData
  //   })
  // }

  render(){
    return (  
      <div className="App">
        <Header/>
        <Key keyData={this.state.keyOne}/>
        <Key keyData={this.state.keyTwo}/>
        <Key keyData={this.state.keyThree}/>
        <Key keyData={this.state.keyFour}/>
        <Key keyData={this.state.keyFive}/>
        <Key keyData={this.state.keySix}/>
        <Key keyData={this.state.keySeven}/>
        <Key keyData={this.state.keyEight}/>
        <Key keyData={this.state.keyNine}/>
        <Key keyData={this.state.keyTen}/>
        <Key keyData={this.state.keyEleven}/>
        <Key keyData={this.state.keyTwelve}/>
        <Key keyData={this.state.keyThirteen}/>
      </div>
    );
  } 
}

export default App;
