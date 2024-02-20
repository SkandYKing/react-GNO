import './index.scss';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import App from './pages/App';
import ProfileUser from './pages/ProfileUser';
import WorkPlan from './pages/WorkPlan';
import Report from './pages/Report';
import Auth from './pages/Auth';
import { Routes, Route } from 'react-router-dom';

function Applications(props) {

  return (
    <div className="wrapper clear">
        <Header />        
        <div className="content p-30">
            <div className='container'>
                <Navigation />
                <Routes>
                  <Route path='/' element={<App />} />
                  <Route path='profile' element={<ProfileUser />} />
                  <Route path='workplan' element={<WorkPlan />} />
                  <Route path='report' element={<Report />} />
                  <Route path='auth' element={<Auth />} />
                </Routes>
            </div>
        </div>
      <Footer />
    </div>
  );
}

export default Applications;
