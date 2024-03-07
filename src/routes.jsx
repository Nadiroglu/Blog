import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const routes = [
   { 
    path: '/',
    element: <Home />
   },
   { 
    path: '/write',
    element: <Write />
   },
   { 
    path: '/',
    element: <Home />
   },
   { 
    path: '/',
    element: <Home />
   },
   { 
    path: '/',
    element: <Home />
   },
]

export default routes;