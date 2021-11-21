import './App.css';
import Header from './components/header/Header';
import {useState} from "react";
import Axios from 'axios';

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const submitEmail = (email) => {
      Axios.post("https://fierce-mountain-79115.herokuapp.com/insert", 
        {email: email}
      ).then(function () {
				setSubmitted(true);
			})
			.catch(function () {
				alert("Could not submit email. Please try again");
			});
    }

  return (
    <div className="App">
      <Header/>
      <div className="logo">
        <div className="section">
          <div className="tagginlogo">
            <div className="logohash">#</div>
            <div className="taggin">taggin'</div>
          </div>
        </div>
        <div className="section">
          <div className="tagline">find events based on your interests</div>
        </div>
        <div className="section">
          <button className="button waitlist"><span>join USC private beta</span></button>
        </div>
      </div>
      <div className="scrollingTexts">
        {/* <Interestsfast text="#acryllicpainting #chess #bmx #discord #pickupsports #soccer #rockclimbing #thrifting"/>
        <Interestsslow text="#collecting #jazzmusic #gardening #esports #videogames #amongus #backpacking #fishing"/>
        <Interests text=""/>
        <Interests text="#synchro #crypto #defi #fintech #entrepreneurship #idk #cooking #veganism"/> */}
      </div>
      <div className = "footer">
        <input className="inputEmail" placeholder="Enter Email"
              onChange = {
                (event) => {
                  setEmail(event.target.value);
                }}
        />
        <button className="button submit" onClick={()=> submitEmail(email)}> Submit </button>
       
      </div>
      <div className="Thankutext" style={{display: submitted? 'flex' : 'none'}}> Thanks for submitting! Welcome to the Taggin Family :) </div>
    </div>
  );
}

export default App;
