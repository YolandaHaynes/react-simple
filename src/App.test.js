// needed to connect React
import React from 'react';
// needed to connect reactdom
import ReactDOM from 'react-dom';
//needed to connect to the app file
import App from './App';

//to check it the element div was created and is able to render without errors
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
