import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';


const app = new Clarifai.App({
  apiKey : '6b5d41347943417797bc9c035593ae1c'
});

const particlesOptions = {
  particles: {
    number: {
      value: 175,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: input});
    app.models
       .predict(
        Clarifai.COLOR_MODEL,
        "https://samples.clarifai.com/face-det.jpg")
        .then(
          function(response){
            console.log(response);
          },
          function(err){

          }
        );
  }

  render() {
    return ( 
    <div className="App">
        <Particles className="particles"
        params = {
          particlesOptions
        }
        /> 
        <Navigation / >
        <Logo/>
        <Rank / >
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/> 
            <FaceRecognition />
      </div>
  );
}
}

export default App;