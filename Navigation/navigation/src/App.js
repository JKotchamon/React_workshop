import logo from './logo.svg';
import './App.css';
import Navigation from './component/navigation';
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
      <Navigation></Navigation>
    </Router>


  );
}

export default App;
