import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Sign_In from "./components/Sign_In";
import InfoForm from "./components/InfoForm";
import MainLayout from "./components/MainLayout";
import Submitted from "./components/Submitted";

const router = createBrowserRouter([
    {
        path:"/phishing_website/home",
        element: <MainLayout/>,
        children:[
            {
                path:"sign_in",
                element:<Sign_In />,
            },
            {
                path:"form",
                element:<InfoForm />
            },
            {
                path:"submitted",
                element:<Submitted/>
            }
        ]
    },
    {
        path:"/phishing_website",
        element: <Navigate to="/phishing_website/home/sign_in"></Navigate>
    }
])

function App() {
    return <RouterProvider router={router} />
}

export default App;