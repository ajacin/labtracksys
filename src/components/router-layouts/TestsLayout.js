import React from "react";
import { Link, Outlet } from "react-router-dom";

function TestsLayout() {
  return (
    <>
      <div className="border border-black p-1 mx-auto my-2 flex justify-between">
        <Link to="/tests/1">[Test1] </Link>
        <br />
        <Link to="/tests/2">[Test 2p]</Link>
        <br />
        <Link to="/tests/new"> [New Test]</Link>
      </div>
      {/* Outlet component allows to show actual rendered component. has only one prop context that allows outletcontext */}
      <Outlet context={{ title: "TestContext" }}></Outlet>
    </>
  );
}

export default TestsLayout;
