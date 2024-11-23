
import './App.css'
import Footer from './components/Footer'
import JobCard from './components/JobCard';
import Navbar from './components/Navbar'
import EditProfile from './pages/EditProfile';
import Home from './pages/Home'
import Login from './pages/Login';
import Profile from './pages/Profile';
import AllRoutes from './routes/AllRoutes';

const job = {
  title: "Frontend Developer",
  company: "TechCorp",
  location: "Remote",
  tags: ["React", "JavaScript", "Full-Time"],
  applyLink: "https://apply.example.com",
};
function App() {
 


  return (
    <>
    <Navbar/>
   <AllRoutes/>
   <Footer/>
   
    </>
  )
}

export default App
