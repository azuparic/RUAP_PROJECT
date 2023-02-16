import React, { Component } from "react";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import ImageRecognition from "./components/ImageRecognition/ImageRecognition";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      prediction: "",
      predictionArray: null
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    const data = {
      Url: this.state.input,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Prediction-Key": "87e04fe8259641db8fdb31b02774cb9e",
        "Ocp-Apim-Subscription-Key": "0a58634f-e883-4d1a-85b7-772a7fce5aef",
      },
      body: JSON.stringify(data),
    };
    fetch(
      "https://ruapproject-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/f143ad69-b4a2-4ec1-8838-9c782e071f9e/classify/iterations/8hours/url",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ 
          prediction: data.predictions[0].tagName,
          predictionArray: data.predictions})
          
      );
     
  };
  render() {
    const { imageUrl, box } = this.state;
    return (
      <div className="App">
        <div className="bg">
        <p className="text_00">American sign language</p>
          <p className="text_01">Prediction result:  {this.state.prediction}</p>
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            
          />
          <div className="resultBox">
            <ImageRecognition imageUrl={imageUrl} />

              {this.state.predictionArray != null ?
                <div className="topResults">
                  <p className="topTitle">TOP RESULTS</p>
                  <div className="top5">
                    <p>1.  {this.state.predictionArray[0].tagName}  {(this.state.predictionArray[0].probability*100).toFixed(2)} %</p>
                    <p>2.  {this.state.predictionArray[1].tagName}  {(this.state.predictionArray[1].probability*100).toFixed(2)} %</p>
                    <p>3.  {this.state.predictionArray[2].tagName}  {(this.state.predictionArray[2].probability*100).toFixed(2)} %</p>
                    <p>4.  {this.state.predictionArray[3].tagName}  {(this.state.predictionArray[3].probability*100).toFixed(2)} %</p>
                    <p>5.  {this.state.predictionArray[4].tagName}  {(this.state.predictionArray[4].probability*100).toFixed(2)} %</p>
                    
                  </div>
                </div>
                :
                <p></p>
              }
              
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
