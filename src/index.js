import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation';
import './style.css';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
    	<Router>
      	<Navigation />
      	<Footer />
    	</Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));