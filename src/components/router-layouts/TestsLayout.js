import React from "react";
import { Outlet } from "react-router-dom";
import PageLayout from "./PageLayout";

function TestsLayout() {
  return (
    <>
      <PageLayout>
        {/* Outlet component allows to show actual rendered component. has only one prop context that allows outletcontext */}
        <Outlet context={{ title: "TestContext" }}></Outlet>
      </PageLayout>
    </>
  );
}

export default TestsLayout;
