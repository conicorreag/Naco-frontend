import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router-dom';
import Layout from './pages/Layout';
import AboutUs from './pages/AboutUs/AboutUs';
import LandingPage from './pages/LandingPage/LandingPage';
import Game from "./pages/Game/Game.jsx";
import Rules from "./pages/Rules/Rules.jsx";
import Login from './pages/profile/Login';
import Signup from './pages/profile/Signup';
import UserCheck from './protected/UserCheck';
import AdminCheck from './protected/AdminCheck';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <LandingPage />
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'signup',
          element: <Signup/>
        },
        {
          path: 'about-us',
          element: <AboutUs />
        },
        {
          path: 'game',
          element: <Game/>
        },
        {
          path: 'rules',
          element: <Rules/>
        },
        {
          path: 'usercheck',
          element: <UserCheck/>
        },
        {
          path: 'admincheck',
          element: <AdminCheck/>
        },

        

      ]
    },
    {
      path: '*', 
      loader: () => {
        return redirect('/')
      }
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default Router;