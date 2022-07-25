import React from 'react';

const Tab = (props) => {
    const {tab, setTab, tabArray} = props;


        return(
    <div>
        
        <h1>Here is your info.</h1>
        <div>
            <button onClick = {() => setTab(tabArray[0].tab)}>Tab 1</button>
            <button onClick={() =>setTab(tabArray[1].tab)}>Tab 2</button>
            <button onClick={() =>setTab(tabArray[2].tab)}>Tab 3</button>
        </div>
            <p> {tab}</p>
        
    </div>
    )
}
export default Tab;