//needed to connect to react
import React, { Component } from 'react';
//read the aside.css file
import './Aside.css';

//class function called Aside
class Aside extends Component {
  //how the page will render
  render() {
    //render function which shows the an aside element with the name of 'Aside'
    return (
        <aside className="Aside">
        </aside>

    );
  }
}

//export the file and gives instructions in the Aside

export default Aside;
