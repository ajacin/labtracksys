import React from "react";
import PageLayout from "../components/router-layouts/PageLayout";
import {
  FaUserAlt,
  FaClinicMedical,
  FaLayerGroup,
  FaTasks,
} from "react-icons/fa";
import PanelButton from "../components/PanelButton";
import Panel from "../components/Panel";
import DashboardTile from "../components/dashboard/DashboardTile";
function Home() {
  return (
    <PageLayout>
      <>
        <Panel>
          <PanelButton to="/users" text="Users">
            <FaUserAlt className="text-secondary" />
          </PanelButton>
          <PanelButton to="/tests" text="Tests">
            <FaClinicMedical className="text-secondary"></FaClinicMedical>
          </PanelButton>
          <PanelButton to="/testgroups" text="Groups">
            <FaLayerGroup className="text-secondary"></FaLayerGroup>
          </PanelButton>
          <PanelButton to="/activitylogs" text="Activities">
            <FaTasks className="text-secondary"></FaTasks>
          </PanelButton>
        </Panel>
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap -mx-4">
            <DashboardTile />
          </div>
        </div>
      </>
    </PageLayout>
  );
}

export default Home;
