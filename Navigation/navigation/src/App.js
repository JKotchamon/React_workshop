import logo from './logo.svg';
import './App.css';
import Navigation from './component/navigation';
import {BrowserRouter as Router , Switch,Route} from "react-router-dom"
import Home from './component/page/home'
import Product from './component/page/Product';
import Member from './component/page/member';


function App() {
  return (
    <div>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/member" component={Member}></Route>
          <Route path="/Product" component={Product}></Route>
        </Switch>
      </Router>
    </div>



  );
}

export default App;
