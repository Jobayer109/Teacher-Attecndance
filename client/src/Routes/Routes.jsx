import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Home from "../Components/Home/Home";
import Main from "../Components/Layouts/Main";
import NotFound from "../Components/Not-Found/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   errorElement: <ErrorPage />,
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <MyOrders />,
  //     },
  //     {
  //       path: "/dashboard/wishList",
  //       element: <MyWishlist />,
  //     },
  //     {
  //       path: "/dashboard/myProducts",
  //       element: (
  //         <SellerRoute>
  //           <MyProducts />
  //         </SellerRoute>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/addProduct",
  //       element: (
  //         <SellerRoute>
  //           <AddProduct />
  //         </SellerRoute>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/users",
  //       element: (
  //         <AdmitRoute>
  //           <AllUsers />
  //         </AdmitRoute>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/allAdmin",
  //       element: (
  //         <AdmitRoute>
  //           <AllAdmin />
  //         </AdmitRoute>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/sellers",
  //       element: (
  //         <AdmitRoute>
  //           <Sellers />
  //         </AdmitRoute>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/payment/:id",
  //       element: <Payment />,
  //       loader: ({ params }) =>
  //         fetch(`https://laptop-cloud-server.vercel.app/orders/${params.id}`),
  //     },
  //   ],
  // },
]);

export default router;
