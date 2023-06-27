/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    console.log("On change");
   setText(event.target.value);
  }
  const [text, setText]=useState('Enter text here');

  // to change the text we have to use a function(updation)
//text="newText" wrong way to change the state
//setText("new text");correct way to change the state
  return (
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
