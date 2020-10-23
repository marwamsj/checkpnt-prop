import React from 'react';
import './App.css';
import Head from './profile/Head/Head';
import Profile from './profile/Profile/Profile';


function App() {
  const me1 = {width:"200px", height:"200px", borderRadius:"100px", margin: "2% 43% 0 43%"};
  const handleName = name => alert (name);
  return (
    <div className="App">
      <Head/>
      <p className='titre'>Account Profile</p>
     <Profile fullname='Marwa JMAIEL' bio ='Love traveling and do crochet' profession='Web developer' handleName={handleName}>
     <img style={me1} src='/me.JPG' alt='isme' /></Profile>
    </div>
  );
}

export default App;
