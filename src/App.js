import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './PrimarySections/Header/Header';
import Home from './Home/Home';
import Root from './Root';
import SingleBlog from './Home/Components/SubComponents/BlogSections/SingleBlog';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/blog-details" component={SingleBlog} />
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={Root} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
