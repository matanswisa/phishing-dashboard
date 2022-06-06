import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login/login';
import Dashboard from './components/adminDashboard/dashboard';
import { Route } from 'react-router';
import { BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/admin" element={<Dashboard />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
