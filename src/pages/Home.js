import React from "react";
import PageLayout from "../components/router-layouts/PageLayout";
import { FaUserAlt, FaClinicMedical , FaLayerGroup} from "react-icons/fa";
import PanelButton from "../components/PanelButton";
import Panel from "../components/Panel";
function Home() {
  return (
    <PageLayout>
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
      </Panel>
    </PageLayout>
  );
}

export default Home;
