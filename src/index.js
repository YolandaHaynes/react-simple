//needed to connect to react
import React from 'react';
//needed to connect to reactdom's
import ReactDOM from 'react-dom';
// connects us to the index
import './index.css';
// connects the main App component to the app file
import App from './App';
//allows us to use the cache to save the date
import registerServiceWorker from './registerServiceWorker';

//renders the divs, etc to the dom from the app component
ReactDOM.render(<App />, document.getElementById('root'));
//runs the function
registerServiceWorker();
