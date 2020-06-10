import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from 'react';

import {sound1} from './audio/clap.wav';
import {sound2} from './audio/subkick.wav';


function App() {

    console.log(sound1)
    console.log(sound2)

    // let [words,setWords] = useState("asdf") DELETE if working
    let [cycleNumber, setCycleNumber] = useState(0)
    let [pattern, setPattern] = useState("")
    let soundSelect = ["boom", "bap"]
    let [outCome, setOutcome] = useState(soundSelect[0])
    let [speed, updateSpeed] = useState(1000)

    let [power, setPower] = useState(true); // if power is true, app runs, if false, nothing 
    let [show, setShow] = useState(false)
    const info = `<h1>8658</h1>
    <h2>Random Binary Sample Playback</h2>
    <p>This project is a React JS single page application designed to use to play slightly randomized sounds from a selection of two samples to replicate simple metal chugging breakdowns, which will be executed based on user input of binary code stored as an array (ie 001 would produce chug chug screech)</p>
    <p>It is also an attempt at thinking through intuitive design interfacing, simple program logic, and cataloging the expected breakdown of a simple program.</p>
    <ul>
        <li>Page Design: user inputs 0's and 1's into input form (text should convert into a random zero or one)</li>
        <li>program will read this and, for each element in the array, play the sound associated (boom or bap, or chug or screech)</li>
        <li>there should be a power button that dictates if the machine is on</li>
        <li>number should show in panel</li>
        <li>page element summary: title, power, input, current number</li>
    </ul>`
    const [intervalNumber, setIntervalNumber] = useState(0)

    const [current,setCurrent] = useState(pattern)
    const issues = ['making the "info" section appear without html tags- used dangerouselySetInnerHTML', 'need to get info from form, use e.target.value to send it']

//https://medium.com/paul-jaworski/turning-off-autocomplete-in-chrome-ee3ff8ef0908#:~:text=tl%3Bdr%20Add%20a%20hidden,you%20wish%20to%20disable%20autocomplete.

const make0or1 = (input) => {
    setPattern(input)
    }

const PlaySound = props => {
    console.log("sound1");
 return (
  <div>
      <h1>Speaker</h1>
 <audio ref="audio_tag" src={sound1} controls autoPlay/>
 </div>  )  
}

const Clock = props => {
  const [date, setDate] = React.useState(new Date());

 //Replaces componentDidMount and componentWillUnmount
 React.useEffect(() => {
  var timerID = setInterval( () => tick(), speed );
  return function cleanup() {
      clearInterval(timerID);
    };
 });

   function tick() {
    setDate(new Date());
   }

   return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    );
}

const CyclingThing = props => {
    
    
    useEffect(() => {
        var current = setInterval(()=> tick(), speed);
        return function cleanup() {
            clearInterval(current)
        }
    });
    
function tick() {
    PlaySound();
    setCycleNumber(cycleNumber < pattern.length -1 ? cycleNumber+1 : 0)
    if (pattern[cycleNumber] === undefined) {
        console.log("it is undefined, enter something")
        setOutcome(soundSelect[0])
    } else if (pattern[cycleNumber] == "0") {
        
        console.log("equals zero")
        setOutcome(soundSelect[0])    
    } else 
    {
        console.log("it is not undefined")
        setOutcome(soundSelect[1])
    }
    // if (pattern[cycleNumber] === undefined) return 1
    // if (pattern[cycleNumber] !== undefined) return 0
}

return (
    <>
<p>This is current pattern value: {pattern[cycleNumber]}</p>
<p>{outCome}</p>
</>
)

}

  return (
<div>
    <div>
    <button onClick={() => {setShow(!show)}}>{ show ? <p dangerouslySetInnerHTML={{__html: info}}></p>: "Project Info"}</button>
        </div>

    <button onClick={() => {setPower(!power)}}>Power: {power ? "ON" : "OFF"}</button>
    <input value={pattern} onChange={ e => {make0or1(e.target.value)}}/>
    <input type="number" value={speed} onChange={ e => {updateSpeed(e.target.value)}}/>
    <p>this is the current pattern: {pattern}</p>
    <CyclingThing />
    <button onClick={()=> {console.log(pattern)}}>click to update i hope</button>
    <button onClick={()=> {setPattern("whatever")}}>setpattern</button>
    

</div>
  );
}



export default App;
