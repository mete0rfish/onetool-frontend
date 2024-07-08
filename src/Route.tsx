import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ListedItems from "./pages/ListedItems";
import DetailedItem from "./pages/DetailedItem";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import Payment from "./pages/Payment";
import FindUserPassword from "./pages/FindUserPassword";
import FindUserId from "./pages/FindUserId";
import FAQ from "./pages/FAQ";
import FAQDetail from "./pages/FAQDetail";
import CenterLayout from "./components/CenterLayout";
import WriteFAQ from "./pages/WriteFAQ";

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
  // main page

  {
    path: "/users",
    element: <CenterLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "find/id",
        element: <FindUserId />,
      },
      {
        path: "find/password",
        element: <FindUserPassword />,
      },
    ],
  },
  // auth, login, find page

  {
    path: "/cart",
    element: <CenterLayout />,
    children: [
      {
        path: "",
        element: <ShoppingCart />,
      },
    ],
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/faq",
    element: <CenterLayout />,
    children: [
      {
        path: "",
        element: <FAQ />,
      },
      {
        path: "write",
        element: <WriteFAQ />,
      },
      {
        path: ":id",
        element: <FAQDetail />,
      },
    ],
  },
  //faq page
]);

export default router;
