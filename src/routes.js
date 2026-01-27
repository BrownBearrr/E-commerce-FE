import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,      
    children: [
      {
        index: true,        
        element: <App />,
      },
      {
        path: "women",       
        element: <ProductListPage categoryType="WOMEN" />,
      },
      {
        path: "men",       
        element: <ProductListPage categoryType="MEN" />,
      }
      
    ]
  }
]);

export default router;