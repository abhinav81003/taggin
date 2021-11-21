import './App.css';
import Header from './components/header/Header';

import {useState} from "react";
import Axios from 'axios';

function App() {
  const [email, setEmail] = useState("");
  const submitEmail = (email) => {
      console.log(email);
  }
  return (
    <div className="App">
      <Header/>
      <div className="logo">
        <div className="section">
          <div className="tagginlogo">
            <div className="taggin">taggin'</div>
            <div className="logohash">#</div>
          </div>
        </div>
        <div className="section">
          <div className="tagline">let your interests find friends</div>
        </div>
        <div className="section">
          <button className="button waitlist"><span>join our waitlist</span></button>
        </div>
      </div>
      <div className="scrollingTexts">
        {/* <Interestsfast text="#acryllicpainting #chess #bmx #discord #pickupsports #soccer #rockclimbing #thrifting"/>
        <Interestsslow text="#collecting #jazzmusic #gardening #esports #videogames #amongus #backpacking #fishing"/>
        <Interests text=""/>
        <Interests text="#synchro #crypto #defi #fintech #entrepreneurship #idk #cooking #veganism"/> */}
      </div>
      <div className = "footer">
        <input className="inputEmail" placeholder="enter email"
              onChange = {
                (event) => {
                  setEmail(event.target.value);
                }}
        />
        <button className="button submit" onClick={()=> submitEmail(email)}><span> submit</span> </button>
      </div>
    </div>
  );
}

export default App;
