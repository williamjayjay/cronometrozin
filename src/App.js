import React, { Component } from 'react';
import './style.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      number: 0,
      goOrStop:"INICIAR"
    }

    this.timer = null
    this.go = this.go.bind(this)
    this.clean = this.clean.bind(this)
  }

  go(){
    let state = this.state

    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
      this.state.goOrStop = "INICIAR"

    }else{
      this.timer = setInterval(() => {
        state.number += 0.1
        this.setState(state)
      }, 100); //1000 milisegundos == 1 segundo.
      this.state.goOrStop = "PARAR"
    }

    this.setState(state)
  }

  clean(){
    
    if(this.timer !== null || this.state.number > 0){
      let state = this.state
      clearInterval(this.timer)
      this.timer = null
      state.number = 0

      this.state.goOrStop = "INICIAR"
      this.setState(state)
    }
  }

  render(){
    return(
      <div className="container" >
        <img src={require('./assets/cronometro.png')} className="img" />
        <a className="timer" > {this.state.number.toFixed(1)} </a>
        <div className="areaButton" >
        <a className="button" onClick={this.go} > {this.state.goOrStop} </a>
        <a className="button" onClick={this.clean} >LIMPAR</a>
        </div>
      </div>
    )
  }
}

export default App