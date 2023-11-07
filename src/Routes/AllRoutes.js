import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Lab from "../pages/Lab";
import Login from "../pages/Login";
import Tests from "../pages/Tests";
import Test from "../pages/Test";
import NotFound from "../pages/NotFound";
import NewTest from "../pages/NewTest";
// import TestsLayout from "../components/router-layouts/TestsLayout";
import Logout from "../components/Logout";
import CreateUser from "../pages/CreateUser";
import PrivateRoutes from "./PrivateRoutes";
import AdminPanel from "../pages/admin/AdminPanel";
import SuperUserPanel from "../pages/admin/SuperUserPanel";
import Users from "../pages/Users";
import CreateTest from "../pages/CreateTest";
import CreateTestGroup from "../pages/CreateTestGroup";
import TestGroups from "../pages/TestGroups";
import ActivityLogs from "../pages/activitylogs/ActivityLogs";

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
        {/* <Route path="/tests" element={<TestsLayout></TestsLayout>}> */}
        <Route path="/tests">
          <Route index element={<Tests></Tests>} />
          <Route path=":id" element={<Test></Test>} />
          <Route path="create" element={<CreateTest></CreateTest>}></Route>
          <Route path="new" element={<NewTest></NewTest>}></Route>
        </Route>
        <Route path="/testgroups">
          <Route index element={<TestGroups></TestGroups>} />
          <Route path=":id" element={<Test></Test>} />
          <Route
            path="create"
            element={<CreateTestGroup></CreateTestGroup>}
          ></Route>
          <Route path="new" element={<NewTest></NewTest>}></Route>
        </Route>
        {/* Activity Logs */}
        <Route path="/activitylogs">
          <Route index element={<ActivityLogs></ActivityLogs>} />
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
