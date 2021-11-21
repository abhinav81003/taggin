import './App.css';
import Header from './components/header/Header';

function App() {
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
    </div>
  );
}

export default App;
