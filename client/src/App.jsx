import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import HomeTeacher from './pages/HomeTeacher';
import SignIn from './pages/SignIn';
import SignInTeacher from './pages/SignInTeacher';
import SignUp from './pages/SignUp';
import SignUpTeacher from './pages/SignUpTeacher';
import About from './pages/About';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import ProfileTeacher from './pages/ProfileTeacher';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';

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
    <Route path = "/listing/:listingId" element={<Listing />} />
    <Route element={<PrivateRoute />} >
      <Route path = "/profile" element={<Profile />} />
      <Route path = "/profileTeacher" element={<ProfileTeacher />} />
      <Route path = "/create-listing" element={<CreateListing />} />
      <Route path = "/update-listing/:listingId" element={<UpdateListing />} />
      <Route path = "/home" element={<HomeTeacher />} />
    </Route>
  </Routes>
  </BrowserRouter>
}
