import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Head from './Components/Head';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import StudentList from './Components/StudentList';
import StudentDetail from './Components/StudentDetail';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Head />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/student/list">
          <StudentList />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/student/details/:name/:id/:cgpa">
          <StudentDetail />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
