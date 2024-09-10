import {
  createBrowserRouter
} from "react-router-dom";
import App from './App.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import HomePage from  './pages/Homepage.jsx'
import Pricing from  './pages/Pricing.jsx'
import Product from './pages/Product.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "product",
        element: <Product />,
      },
    ],
  },
]);

export default router