// needed to connect React
import React, { Component } from 'react';
// reads/connect to other files
import './App.css';
import Header from './Header';
import SectionMain from './SectionMain';
import Aside from './Aside';
import Footer from './Footer';
//class function called App
class App extends Component {
//our return which renders our react element
  render() {
    //div is the parent with class name of app
    //parent element contains 4 components, one with the inline style
    return (
      <div className="App">
        <Header backColor="green" width="50%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

//exports to the App file which connects to other files
export default App;
