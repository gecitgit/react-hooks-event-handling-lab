// Code EyesOnMe Component Here

/*
In the components/EyesOnMe.js file, create a EyesOnMe React component.
In that component, render a button with the text 'Eyes on me'.
On that button, add event handlers that listen for the focus and blur events.
When the focus event fires, use console.log to print out the text 'Good!'.
When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
*/

import React from "react";

function focusHandler(){
    console.log("Good!")
}

function blurHandler(){
    console.log("Hey! Eyes on me!")
}

function EyesOnMe(){
    return(
        <div>
            <p>placeholder text for Eyesontheball</p>
            <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;