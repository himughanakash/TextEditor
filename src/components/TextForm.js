import React, {useState} from 'react'

export default function TextForm(props) {
    const handleClick = ()=> {
        // console.log("UpperCase Clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

    const handleLoClick = ()=>{
        // console.log("LowerCase clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case", "success");
    }

    const handleOnChange =  (event)=>{
        // console.log("I'm on change")
        setText(event.target.value)
    }

    const handleClearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text is cleared", "success");
    }

    const[text, setText] = useState('');
    // text = "new text"; // wrong way to change the state as you can only change the state using a function not like a variable
    // setText("new Text"); // Crct way
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className = "mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className = "btn btn-primary mx-1" onClick = {handleClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length}, Average time to read</p>
            <h2>Preview</h2>
        </div>
        </>
    )
}
