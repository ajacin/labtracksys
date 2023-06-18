import React from "react";
import PageLayout from "../../components/router-layouts/PageLayout";
import { FaUserAlt, FaClinicMedical } from "react-icons/fa";
import PanelButton from "../../components/PanelButton";
import Panel from "../../components/Panel";

const SuperUserPanel = () => {
  return (
    <PageLayout>
      <Panel>
        <PanelButton to="/users" text="Users">
          <FaUserAlt className="text-secondary" />
        </PanelButton>
        <PanelButton to="/tests" text="Tests">
          <FaClinicMedical className="text-error"></FaClinicMedical>
        </PanelButton>
        <PanelButton to="/testgroups" text="Test Groups">
          <FaClinicMedical className="text-error"></FaClinicMedical>
        </PanelButton>
      </Panel>
    </PageLayout>
  );
};

export default SuperUserPanel;
