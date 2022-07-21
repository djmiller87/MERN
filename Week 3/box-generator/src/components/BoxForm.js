import React, { useState } from 'react';

const BoxForm = (props) => {

        const { currentBoxes, setCurrentBoxes } = props;

        const [boxColor, setBoxColor] = useState("");
        const handleSubmit = (e) => {
                e.preventDefault();
                // what should we do with the message?

                const newBox = {
                        boxColor
                }
                setCurrentBoxes([...currentBoxes, newBox]);
                setBoxColor('')
        };
        return (
                <div className="form-control">
                        <form onSubmit={handleSubmit} >
                                <h1>Set new box color</h1>
                                <input
                                        placeholder="Enter a color here"
                                        onChange={(e) => setBoxColor(e.target.value)}
                                        value={boxColor}
                                ></input>
                                <input type="submit" value="Add Box"/>
                        </form>
                </div>
        );
};
export default BoxForm;
