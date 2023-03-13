import React,{Component} from "react";
import { connect } from 'react-redux';
import './App.css'

class App extends Component{
  render(){
    return (
      <div>
        Count : {this.props.count}
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  console.log(state)
  return {
    count : state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment : () => 
    dispatch({
      type: "INCREMENT",
      value: 10
    }) ,
    decrement: () => 
    dispatch({
      type: "DECREMENT",
      value: 10
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);