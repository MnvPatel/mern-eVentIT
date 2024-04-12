import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignInTeacher from './pages/SignInTeacher';
import SignUp from './pages/SignUp';
import SignUpTeacher from './pages/SignUpTeacher';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path = "/" element={<Home />} />
    <Route path = "/sign-in" element={<SignIn />} />
    <Route path = "/sign-in-T" element={<SignInTeacher />} />
    <Route path = "/sign-up" element={<SignUp />} />
    <Route path = "/sign-up-T" element={<SignUpTeacher />} />
    <Route path = "/about" element={<About />} />
    <Route path = "/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>
}
