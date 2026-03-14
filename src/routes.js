import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import Layout from "./Layout";
import ProductDetail from "./pages/ProductDetailPage/ProductDetails";
import { loadProductById } from "./routes/product";

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
      },
      {
        path: "kid",
        element: <ProductListPage categoryType="KID" />,
      },
      {
        path: "/product/:productId",
        loader: loadProductById, // hàm load dữ liệu cho route này và trả về cho element bên dưới
        element: <ProductDetail />, // lấy dữ liệu từ loader bằng useLoaderData trong ProductDetail
      },
    ],
  },
]);

export default router;
