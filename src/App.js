import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import $ from 'jquery';
import AddGrocery from "./components/AddGrocery"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      groceryList: {}
    };
  }
  getGroceryList(){
    $.ajax({
      url: 'https://shopping-listback.herokuapp.com/groceries',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({groceryList: data});

        console.log(data)
      }.bind(this),
      error: function(xhr, status, err){
        console.log(xhr)
        console.log(status)
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getGroceryList()
  }
  render() {
    return (
      <div className="App">
      <Header/>
      <AddGrocery/>
      <List data={this.state.groceryList}/>
      </div>
    )
    }
}

export default App;
