import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserHome from './user/pages/UserHome';
import UserProfile from './user/pages/UserProfile';
import UserAttendance from './user/pages/UserAttendance'; // Import the UserAttendance component
import TicketQuery from './user/pages/TicketQuery';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {/* Define the routes */}
        <Route path="/" exact component={UserHome} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/attendance" component={UserAttendance} /> {/* Add a route for UserAttendance */}
        <Route path="/ticketquery" element={<TicketQuery />} /> 
      </Switch>
    </Router>
  );
}

export default App;
