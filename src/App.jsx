import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home'
import Navbar from '../src/Component/navbar'
import Footer from '../src/Component/footer'
import "./font/CyborgPunk.ttf";
import "./font/Beyonders.ttf";
import About from '../src/pages/about'
import Facility from './pages/facility'
import Profile from './pages/profile';
import Book from './pages/book';
import Login from './pages/login';
import Sign from './pages/sign';
import ErrorPage from './pages/errorPage';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
  },
  {
    path:"/book",
    element:<Book></Book>,
  },
  {
    path:"/profile",
    element:<Profile></Profile>,
  },
  {
    path:"/login",
    element:<Login></Login>,
  },
  {
    path:"/sign",
    element:<Sign></Sign>,
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden bg-abu'>
      <RouterProvider router={ router }/>
    </div>
  )
}

export default App
