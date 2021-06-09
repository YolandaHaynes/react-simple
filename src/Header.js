//needed to connect to react
import React, { Component } from 'react';
//read the footer.css file
import './Header.css';

//class function called Header
class Header extends Component {
  //how the page will render
  render() {

    //creating a variable of style to allow easy changing for inline styles from the app.js
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor
    }
  //render function which shows the an header element with the name of 'Header'

    return (
        <header style={style} className="Header-main">
        </header>

    );
  }
}
//export the file and gives instructions in the Header
export default Header;


//document.querySelector("header").style.backgroundColor = "red"
