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
        "Prediction-Key": "f0cd698630434b328c06a4afb7ca7425",
        "Ocp-Apim-Subscription-Key": "74116e3f-03cc-4d9a-9688-b6b282a6b7f7",
      },
      body: JSON.stringify(data),
    };
    fetch(
      "https://customvisionasl-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/f95a81dc-71ed-45c1-a0f6-00f77762ddc2/classify/iterations/asl_model02/url",
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