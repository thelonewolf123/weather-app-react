import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';
import * as serviceWorker from './serviceWorker';
import Searchbar from './search-bar/searchbar';

ReactDOM.render( 
  <React.StrictMode>
    <Header/>
    <Searchbar/>
    <div className="container" id="weather_area">
    </div>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();