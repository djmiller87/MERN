import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Tab from "./components/Tab"


function App() {
    const tabArray = [ 
        {tab: "Tab 1 is now showing"},
        {tab: "Tab 2 is now taking over"},
        {tab: "Tab 3 is our final player"}
      ];

    const [tab, setTab] = useState(tabArray[0].tab);

    
  return (
    <div className="App">
      <h1> Here we go!</h1>
      <Tab tab = {tab} setTab ={setTab} tabArray={tabArray}/>
    </div>
  );
}

export default App;
