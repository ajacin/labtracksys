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

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/lab" element={<Lab></Lab>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/logout" element={<Logout></Logout>} />
      <Route path="/tests" element={<TestsLayout></TestsLayout>}>
        <Route index element={<Tests></Tests>} />
        <Route path=":id" element={<Test></Test>} />
        <Route path="new" element={<NewTest></NewTest>}></Route>
      </Route>
      {/* <Route path="/tests" element={<Tests></Tests>} />
        <Route path="/tests/:id" element={<Test></Test>} />
        <Route path="/tests/new" element={<NewTest></NewTest>}></Route> */}
      {/* Order of the routes doesn't matter from v6. V6 identifies dynamic routes */}

      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default AllRoutes;
