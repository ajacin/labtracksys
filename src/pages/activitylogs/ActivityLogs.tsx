import React from "react";
import PageLayout from "../../components/router-layouts/PageLayout";
import Panel from "../../components/Panel";
import PanelButton from "../../components/PanelButton";
import { FaRegPlusSquare } from "react-icons/fa";
import ActivityLogsList from "./ActivityLogsList";

const ActivityLogs = () => {
  return (
    <PageLayout>
      <>
        <Panel>
          <PanelButton text="Activity" to="/activitylogs/create">
            <FaRegPlusSquare className="text-secondary" />
          </PanelButton>
          <PanelButton text="Type" to="/activitytypes">
            <FaRegPlusSquare className="text-secondary" />
          </PanelButton>
        </Panel>
        <ActivityLogsList></ActivityLogsList>
      </>
    </PageLayout>
  );
};

export default ActivityLogs;
