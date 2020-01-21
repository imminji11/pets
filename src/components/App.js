import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import Join from './Join';
import Setting from './Setting';
import Register from './Medical/Register';
import RegisterLists from './Medical/RegisterLists';
import Footer from './Common/Footer';

function App() {
  return (
    <div className="wrap">
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/join" component={Join} />
        <Route path="/setting" component={Setting} />
        <Route path="/register" component={Register} />
        <Route path="/register-list" component={RegisterLists} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
