import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './components/HomePage';
import SearchJourney from './components/SearchJourney';
import ContactUs from './components/ContactUs';
import ProfilePage from './components/ProfilePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/SearchJourney" element={<SearchJourney />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
