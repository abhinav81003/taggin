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
          <div className="waitlist Rectangle join">join our waitlist</div>
        </div>
      </div>
      <div className = "footer">
        <input className="inputEmail" placeholder="Enter Email"
              onChange = {
                (event) => {
                  setEmail(event.target.value);
                }}
        />
        <button className="submitButton" onClick={()=> submitEmail(email)}> Submit </button>
      </div>
    </div>
  );
}

export default App;
