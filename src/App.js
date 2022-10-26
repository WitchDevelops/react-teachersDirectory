import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ContactUs from './components/pages/contact';
import SearchTeacher from './components/search-teacher';
import Home from './components/pages/home';
import TeacherProfile from './components/pages/teacher-profile';
import JobSearch from './components/pages/jobsearch';
import JobDetails from './components/pages/job-details';
import TeacherDashboard from './components/pages/teacher-dashboard/teacher-dashboard';
import SchoolDashboard from './components/pages/school-dashboard/school-dashboard';
import SignupSelection from './components/pages/sign-up';
import SchoolSignup from './components/pages/school-signup';
import TeacherSignup from './components/pages/TeacherSignup';
import PostaJob from './components/pages/PostaJob';
import PageNotFound from './components/pages/404';


function App() {
  return (
    <div className="App">
         <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<PageNotFound/>} />
            <Route path="/search-teacher" element={<SearchTeacher/>} />
            <Route path="/teacher-profile" element={<TeacherProfile/>} />
            <Route path="/job-search" element={<JobSearch/>} />
            <Route path="/job-details" element={<JobDetails/>} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard/>} />
            <Route path="/school-dashboard" element={<SchoolDashboard/>} />
            <Route path="/sign-up" element={<SignupSelection/>} />
            <Route path="/school-signup" element={<SchoolSignup/>} />
            <Route path="/teacher-signup" element={<TeacherSignup/>} />    
            <Route path="/post-job" element={<PostaJob/>} />           
            <Route path="/contact" element={<ContactUs/>} />


            
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
