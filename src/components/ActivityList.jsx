/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const ActivityList = ({ activities, onHandleDeleteTask }) => {
  return (
    <ul className="flex flex-col gap-2 bg-green-100 p-4 rounded-md">
      {activities.length > 0 &&
        activities.map((activity) => (
          <div className="flex justify-between" key={activity.activityId}>
            <li>{activity.activityText}</li>
            <button
              onClick={() => onHandleDeleteTask(activity.activityId)}
              className="border border-green-200 p-2 rounded-md hover:bg-green-100 text-black"
            >
              Clear
            </button>
          </div>
        ))}
      {activities.length <= 0 && <p>No activities added yet</p>}
    </ul>
  );
};

export default ActivityList;
