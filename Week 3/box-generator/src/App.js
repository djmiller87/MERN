import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

// imports removed for brevity
function App(props) {
    const [currentBoxes, setCurrentBoxes] = useState([]);


return (
    <div className='mx-auto col-6'>
        {/* We pass in our function that will take in a string and update our state in our App component */}
        <BoxForm currentBoxes={currentBoxes} setCurrentBoxes={setCurrentBoxes} />
        {/* We pass our state getter from our App component down to MessageDisplay through props
          for displaying its value */}
        {
            currentBoxes.map((oneBox) => {
                return <BoxDisplay boxColor={oneBox.boxColor} />
            })
        }
    </div>
);
}

export default App;
