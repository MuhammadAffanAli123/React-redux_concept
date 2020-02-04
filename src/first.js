import React, { Component } from 'react' 
import {connect} from 'react-redux'
import Scrool from './first'
import './App.css'
import {anotheraction , anotheraction1} from './actions/action1'

 
 class App1 extends Component {
  constructor(props){
    super(props)
    this.state={
      text: "",
      name:props
    }
    
  }

  Text = (e)=>{
    this.setState({
      text:e
    })
    
  }
  render () {
    const {text,name} = this.state
    console.log(this.state.name.myAge,"name")
    const array=this.state.name.myAge.map((item)=>{
      return<h1>{item}</h1>
      })
    return (
      <div className="App">
        <h1>My Data is given Below </h1>
        <h1>My Name Is  {this.props.mynames} </h1>
        <h1>My Age Is  {this.props.myAge} </h1>
        <button onClick={() =>{this.props.Changename()}}>Change name</button>
        <button onClick={() =>{this.props.Changename1()}}>Change wish</button>
        
      {/* < Scrool text={(name)=>{this.Text(name)}} /> */}


      </div>
    )
  }
}

const mapStateToProps = (state)=>{
return {
  mynames: state.name,
  myAge:state.wish,
}
}

const mapDispatchToProps =(dispatch)=>{
  return {
    Changename:()=> dispatch(anotheraction()),
    Changename1:()=> dispatch(anotheraction1())
  }
}

export default   connect( mapStateToProps , mapDispatchToProps )(App1);