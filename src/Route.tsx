import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ListedItems from "./pages/ListedItems";
import DetailedItem from "./pages/DetailedItem";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import Payment from "./pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/items",
    element: <ListedItems />,
  },
  {
    path: "/items/:id",
    element: <DetailedItem />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

export default router;
