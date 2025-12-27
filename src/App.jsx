import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout"
import HomePage from './pages/Home/HomePage';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Facilities from './pages/Facilities';
import Staff from './pages/Staff';
import Gallery from './pages/Gallery';
import EventsPage from './pages/EventsPage';
import Contact from './pages/Contact';
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/admissions' element={<Admissions />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App