import './App.css';
import {useState} from "react";
import Axios from 'axios'
function App() {
  const [email, setEmail] = useState("");
  const submitEmail = (email) => {
      console.log(email);
  }
  return (
    <div className="App">
      <div className="hashlogo">#</div>
      <div className="logocontainer">
        <div className="taggin">taggin'</div>
        <div className="hash">#</div>
      </div>
      <div className="tagline">let your interests find friends</div>
      <div className="waitlist Rectangle join">join our waitlist</div>
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
