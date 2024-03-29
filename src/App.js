import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Houses from './components/Houses/Houses';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/houses">
            <Houses></Houses>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
