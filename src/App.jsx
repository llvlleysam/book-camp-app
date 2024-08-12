import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SingInPage from "./pages/SingInPage";
import Layout from "./Layout/Layout";
import AboutUsPage from "./pages/AbouteUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import BootCamps from "./pages/BootCamps";
import SingleDisplayCard from "./pages/SingleDisplayCard";


function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          index:true,
          element:<HomePage/>
        },
        {
          path:"/aboutus",
          element:<AboutUsPage/>
        },
        {
          path:"/Contactus",
          element:<ContactUsPage/>
        },
        {
          path:"/bootcamps",
          element:<BootCamps/>
        }
      ]
    },
    {
      path:"/login",
      element: <LoginPage/>
    },{
      path:"/singup",
      element: <SingInPage/>
    },
    {
      path:"/singlecard/:id",
      element:<SingleDisplayCard/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
