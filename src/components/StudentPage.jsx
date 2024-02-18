/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Button from "./Button";
import StudentEngagementActivities from "./StudentEngagementActivities";

// eslint-disable-next-line no-unused-vars
const StudentPage = ({
  selectedStudent,
  onHandleGetNewActivities,
  activities,
  onHandleDeleteTask,
  onHandleDeleteStudent,
  onHandleStartModifyStudent,
}) => {
  return (
    <menu className="w-2/3 p-10">
      <div className="flex gap-5 mb-4 justify-end">
        <Button onClick={onHandleStartModifyStudent}>Modify</Button>
        <button onClick={onHandleDeleteStudent}>Delete</button>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-4xl text-green-950">
          {selectedStudent.firstName} {selectedStudent.lastName}
        </h1>
        <div className="flex gap-2 my-4">
          <h2 className="font-bold text-green-900">Creation date : </h2>
          <p className="text-green-200">{selectedStudent.creationDate}</p>
        </div>
      </div>
      <hr />
      <StudentEngagementActivities
        onHandleGetNewActivities={onHandleGetNewActivities}
        activities={activities}
        onHandleDeleteTask={onHandleDeleteTask}
      />
    </menu>
  );
};

export default StudentPage;
