/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "./Button";

const SideBar = ({
  onHandleStartAddStudent,
  students,
  onGetStudentIdFromSideBar,
}) => {
  return (
    <aside className="bg-green-300 w-1/3 p-8 rounded-r-xl md:w-72">
      <h1 className="text-xl font-bold text-black mb-6">EMSI / 4IIR / G6</h1>
      <Button onClick={onHandleStartAddStudent}>+ Add Student</Button>
      <ul className="mt-5 flex flex-col gap-3 bg-green-500 rounded-md p-2">
        {students.length > 0 &&
          students.map((student) => (
            <li
              onClick={() => onGetStudentIdFromSideBar(student.studentId)}
              className="hover:bg-green-400 rounded-md p-2 cursor-pointer"
              key={student.studentId}
            >
              <h3 className="text-xl">
                {student.firstName} {student.lastName}
              </h3>
            </li>
          ))}
        {students.length <= 0 && (
          <h3 className="font-bold">Can&apos;t find any student</h3>
        )}
      </ul>
    </aside>
  );
};

export default SideBar;
