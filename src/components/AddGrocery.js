import React, { Component } from 'react';

class AddGrocery extends Component {
    render() {
      return (
        <form action="https://shopping-listback.herokuapp.com/groceries" method="post">
        <input name ="name" type="text" placeholder="Name"/>
        <br/>
        <input name = "price" type="text" placeholder="Price"/>
        <br/>
        <input type="submit" placeholder="Submit"/>
      </form>
    )}
}
export default AddGrocery