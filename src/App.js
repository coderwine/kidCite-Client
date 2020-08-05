import React, {useState} from 'react';
import './App.css';

//Components
import Menubar from './components/Nav/Appbar';
import Landing from './components/Landing/Landing';

function App() {

 
  return (
    <div className="App">
      <Landing />
      <Menubar className="menuBar" />
    </div>
  );
  
}

export default App;

//************TESTING INFORMATION *************/
const testQuotes = [
  {
    title: 'What is Green?',
    description: '',
    date: '06-20-2020',
    randomQuestion: 'Why is green even a thing?',
    possAnswer: 'Because Blue got Yellow\'d at',
    refKid: 10,
    id: 1
  },
  {
    title: 'An Event Two',
    description: 'Some random event that happened on this day that simply feels huge',
    date: '07-10-2020',
    randomQuestion: '',
    possAnswer: '',
    refKid: 20,
    id: 2
  },
  {
    title: 'Yup, Sounds Right',
    description: 'Information that is being displayed',
    date: '08-05-2020',
    randomQuestion: 'I don\'t understand why trees grow to be so tall',
    possAnswer: '',
    refKid: 30,
    id: 3
  },
]

const testKids = [
  {
    firstName: 'Peter',
    lastName: 'Parker',
    dob: '08-01-1962',
    id: 10
  },
  {
    firstName: 'Kurt',
    lastName: 'Wagner',
    dob: '05-15-1975',
    id: 20
  },
  {
    firstName: 'Bruce',
    lastName: 'Wayne',
    dob: '03-30-1939',
    id: 30
  },
]