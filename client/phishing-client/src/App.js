import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login/login';
import Dashboard from './components/adminDashboard/dashboard';
import { Route } from 'react-router';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Cookies from 'js-cookie';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { useLayoutEffect } from 'react';



function getCookie(key) {
  // let cookie = document.cookie.split('; ').filter(row => row.startsWith('cookie_name')).map(c => c.split('=')[1])[0]
  // console.log(cookie);
  let cookie = Cookies.get('jwt');
  console.log(cookie);
  return cookie;
}

function App() {


  useLayoutEffect(() => {
    async function authenticateUser() {
      getCookie('jwt')
    }

    authenticateUser();

  }, [])


  return (
    <RecoilRoot>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/admin" element={<Dashboard />} ></Route>
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
