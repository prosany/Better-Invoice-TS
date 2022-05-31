import Login from "Pages/Public/Login";
import Signup from "Pages/Public/Signup";
import Account from "Pages/Private/Account";
import CreateInvoice from "Pages/Private/Create-PDF";
import Notifications from "Pages/Private/Notification";
import InstantUpdate from "Pages/Development/InstantUpdate";

interface IRoute {
  id: number;
  path: string;
  component: React.ComponentType<any> | React.ComponentType | undefined;
}

const publicRoutes: IRoute[] = [
  { id: 0, path: "/", component: Login },
  { id: 1, path: "/login", component: Login },
  { id: 2, path: "/signup", component: Signup },
  { id: 3, path: "/development/instant", component: InstantUpdate },
];

const privateRoutes: IRoute[] = [
  { id: 0, path: "/account", component: Account },
  { id: 1, path: "/create-invoice", component: CreateInvoice },
  { id: 2, path: "/notifications", component: Notifications },
];

export default publicRoutes;
export { privateRoutes };
