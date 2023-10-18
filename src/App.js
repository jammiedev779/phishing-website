import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Sign_In from "./components/Sign_In";
import InfoForm from "./components/InfoForm";
import MainLayout from "./components/MainLayout";
import Submitted from "./components/Submitted";

const router = createBrowserRouter([
    {
        path:"/Home",
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
        path:"/",
        element: <Navigate to="/Home/sign_in"></Navigate>
    }
])

function App() {
    return <RouterProvider router={router} />
}

export default App;