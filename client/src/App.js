import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Nav from "./Components/Nav";
import moment from 'moment';

// import './App.css';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <header>
//           <h1>New York Times</h1>
//         </header>
//         <p>
//           Search the news.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
