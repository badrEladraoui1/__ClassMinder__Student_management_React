/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import NewEngagementActivity from "./NewEngagementActivity";
import ActivityList from "./ActivityList";

const StudentEngagementActivities = ({
  onHandleGetNewActivities,
  activities,
  onHandleDeleteTask,
}) => {
  return (
    <div className="mt-10">
      <h1 className="text-green-950 font-bold text-xl mb-6">
        Engagement Activities
      </h1>
      <NewEngagementActivity
        onHandleGetNewActivities={onHandleGetNewActivities}
        activities={activities}
        onHandleDeleteTask={onHandleDeleteTask}
      />
    </div>
  );
};

export default StudentEngagementActivities;
