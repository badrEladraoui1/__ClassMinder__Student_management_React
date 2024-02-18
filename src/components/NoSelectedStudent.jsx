/* eslint-disable react/prop-types */
import student from "../assets/student2.png";
import Button from "./Button";

const NoSelectedStudent = ({ onHandleStartAddStudent }) => {
  return (
    <div className="w-2/3 text-center m-auto flex flex-col gap-4 items-center">
      <img className="object-contain w-10 h-10 mx-auto" src={student}></img>
      <h2 className="text-xl font-bold text-black">
        No student is selected right now
      </h2>
      <Button onClick={onHandleStartAddStudent}>Add A New One</Button>
    </div>
  );
};

export default NoSelectedStudent;
