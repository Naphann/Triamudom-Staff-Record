import React, { Component } from 'react';
// import logo from './logo.svg';
import PeopleList from './PeopleList';
import Navbar from './Navbar';

import './Navbar.css';
import './App.css';
import './PeopleList.css';

class App extends Component {
  render() {
    const nameList = [
      {
        name: 'Adam',
        lastname: 'Smith',
        misc: 'misc-1'
      },
      {
        name: 'Arthur',
        lastname: 'Pendragon',
        misc: 'misc-2'
      },
      {
        name: 'Amuro',
        lastname: 'Ray',
        misc: 'misc-3'
      }, {
        name: 'Arthuria',
        lastname: 'Pendragon',
        misc: 'misc-4'
      },
      {
        name: 'Adam',
        lastname: 'Eve',
        misc: 'misc-5'
      }
    ]
    
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <PeopleList nameList={nameList}></PeopleList>
        </div>
      </div>
    )
  }
}

export default App;
