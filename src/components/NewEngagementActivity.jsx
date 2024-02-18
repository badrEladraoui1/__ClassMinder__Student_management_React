/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Modal from "./Modal";
import ActivityList from "./ActivityList";

const NewEngagementActivity = ({
  onHandleGetNewActivities,
  activities,
  onHandleDeleteTask,
}) => {
  const modal = useRef();
  const [newActivity, setNewActivity] = useState("");

  const handleOnChangeInput = (event) => {
    setNewActivity(event.target.value);
  };

  const handlingAddActivity = () => {
    setNewActivity("");
    if (newActivity === "") {
      modal.current.open();
      return;
    }
    onHandleGetNewActivities(newActivity);
  };

  return (
    <div className="flex gap-2 my-3">
      <Modal ref={modal} btnText="Okay">
        <h2>No activity added Provide one please</h2>
      </Modal>
      <div className="flex flex-col">
        <div className="flex gap-2 mb-6">
          <input
            value={newActivity}
            onChange={handleOnChangeInput}
            className="bg-green-100 px-4 py-2 text-xl rounded-md w-96"
            type="text"
            placeholder="activity"
          />
          <button
            onClick={handlingAddActivity}
            className="border border-green-200 p-2 rounded-md hover:bg-green-100 text-green-300"
          >
            Add Activity
          </button>
        </div>
        <ActivityList
          activities={activities}
          onHandleDeleteTask={onHandleDeleteTask}
        />
      </div>
    </div>
  );
};

export default NewEngagementActivity;
