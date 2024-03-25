import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path:"/donation",
          element:<div>Donation</div>
        },
        {
          path:"/statistics",
          element:<div>Statistics</div>
        },
        {
          path:"/donation-details/:id",
          element:<DonationDetails></DonationDetails>
        }
      ]
    }
  ]);
  export default router