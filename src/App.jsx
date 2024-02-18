/* eslint-disable no-unused-vars */
import { useState } from "react";
import NewStudentForm from "./components/NewStudentForm";
import NoSelectedStudent from "./components/NoSelectedStudent";
import SideBar from "./components/SideBar";

const App = () => {
  const [students, setStudents] = useState({
    selectedStudentId: undefined,
    students: [],
  });

  const handleDataFromAddStudent = (student) => {
    setStudents((prevState) => {
      const randomStudentId = Math.random();
      const newStudent = {
        studentId: randomStudentId,
        firstName: student.firstName,
        lastName: student.lastName,
        creationDate: student.creationDate,
      };

      return {
        ...prevState,
        selectedStudentId: undefined,
        students: [...prevState.students, newStudent],
      };
    });
  };

  console.log(students);

  const handleStartAddStudent = () => {
    setStudents((prevState) => {
      return {
        ...prevState,
        selectedStudentId: null,
      };
    });
  };

  const handleCancelAddStudent = () => {
    setStudents((prevState) => {
      return {
        ...prevState,
        selectedStudentId: undefined,
      };
    });
  };

  let mainContent;

  if (students.selectedStudentId === undefined) {
    mainContent = (
      <NoSelectedStudent onHandleStartAddStudent={handleStartAddStudent} />
    );
  } else if (students.selectedStudentId === null) {
    mainContent = (
      <NewStudentForm
        onHandleCancelAddStudent={handleCancelAddStudent}
        onHandleDataFromAddStudent={handleDataFromAddStudent}
      />
    );
  }

  return (
    <main className="h-screen flex">
      <SideBar onHandleStartAddStudent={handleStartAddStudent} />
      {mainContent}
    </main>
  );
};

export default App;
