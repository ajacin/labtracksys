import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Lab from "../pages/Lab";
import Login from "../pages/Login";
import Tests from "../pages/Tests";
import Test from "../pages/Test";
import NotFound from "../pages/NotFound";
import NewTest from "../pages/NewTest";
import TestsLayout from "../components/router-layouts/TestsLayout";
import Logout from "../components/Logout";
import CreateUser from "../pages/CreateUser";
import PrivateRoutes from "./PrivateRoutes";
import AdminPanel from "../pages/admin/AdminPanel";
import SuperUserPanel from "../pages/admin/SuperUserPanel";
import Users from "../pages/Users";

function AllRoutes() {
  return (
    <Routes>
      {/* Priavate Routes */}
      <Route element={<PrivateRoutes></PrivateRoutes>}>
        <Route path="/" element={<Home></Home>} />
        <Route path="/lab" element={<Lab></Lab>} />
        <Route path="/admin" element={<AdminPanel></AdminPanel>} />
        <Route path="/superuser" element={<SuperUserPanel></SuperUserPanel>} />
        <Route path="/logout" element={<Logout></Logout>} />
        <Route path="/tests" element={<TestsLayout></TestsLayout>}>
          <Route index element={<Tests></Tests>} />
          <Route path=":id" element={<Test></Test>} />
          <Route path="new" element={<NewTest></NewTest>}></Route>
        </Route>
        <Route path="/users">
          <Route index element={<Users></Users>} />
          <Route path="create" element={<CreateUser></CreateUser>}></Route>
        </Route>
      </Route>
      {/* Public Routes */}
      <Route path="/login" element={<Login></Login>} />
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default AllRoutes;
