import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './PrimarySections/Header/Header';
import Home from './Home/Home';
import Root from './Root';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={Root} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
