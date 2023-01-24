// Code Keypad Component Here
import React from "react";

/*
In the components/Keypad.js file, create a Keypad React component.
In that component, render an input with the right type.
On that input, add an event handler that listens for the change event.
When that event fires, use console.log to print out the text 'Entering password...'.

*/
function handleChange(){
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div>
            <p>Here's some text inside of the Keyboard component</p>
            <form>
                <input type="password" onChange={handleChange} />
            </form>
        </div>
    )
}


//make a React component with onChange inside of it?


export default Keypad;