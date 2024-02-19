/* eslint-disable no-unused-vars */
import { useState } from "react";
import NewStudentForm from "./components/NewStudentForm";
import NoSelectedStudent from "./components/NoSelectedStudent";
import SideBar from "./components/SideBar";
import StudentPage from "./components/StudentPage";
import ModifyStudent from "./components/ModifyStudent";

const App = () => {
  const [students, setStudents] = useState({
    studentModifiedId: undefined,
    selectedStudentId: undefined,
    students: [],
    activities: [],
    tempData: null,
  });
  const [studentBeingModified, setStudentBeingModified] = useState({
    studentId: "",
    firstName: "",
    lastName: "",
    creationDate: "",
  });

  const handleGetDataFromModifiedStudent = (studentToModify) => {
    setStudents((prevState) => {
      const updatedStudents = prevState.students.map((student) => {
        if (student.studentId === prevState.tempData) {
          return {
            studentId: student.studentId,
            ...studentToModify,
          };
        }
        return student;
      });

      return {
        ...prevState,
        selectedStudentId: undefined,
        studentModifiedId: undefined,
        tempData: null,
        students: updatedStudents,
      };
    });
  };

  const handleCancelModifiedStudent = () => {
    setStudents((prevState) => {
      return {
        ...prevState,
        selectedStudentId: prevState.tempData,
        studentModifiedId: undefined,
        tempData: null,
      };
    });
  };

  const getStudentToModify = (student) => {
    const studentWanted = {
      studentId: student.studentId,
      firstName: student.firstName,
      lastName: student.lastName,
      creationDate: student.creationDate,
    };
    setStudentBeingModified(studentWanted);
  };

  const handleStartModifyStudent = (studentToModify) => {
    getStudentToModify(studentToModify);
    setStudents((prevState) => {
      return {
        ...prevState,
        studentModifiedId: null,
        tempData: prevState.selectedStudentId,
        selectedStudentId: "",
      };
    });
  };

  const handleDeleteStudent = () => {
    setStudents((prevState) => {
      return {
        ...prevState,
        selectedStudentId: undefined,
        students: prevState.students.filter(
          (student) => student.studentId !== prevState.selectedStudentId
        ),
      };
    });
  };

  const handleDeleteTask = (id) => {
    setStudents((prevState) => {
      return {
        ...prevState,
        activities: prevState.activities.filter(
          (activity) => activity.activityId !== id
        ),
      };
    });
  };

  const handleGetNewActivities = (activity) => {
    setStudents((prevState) => {
      const randomActivityId = Math.random();
      const newStudentActivity = {
        activityId: randomActivityId,
        studentId: prevState.selectedStudentId,
        activityText: activity,
      };

      return {
        ...prevState,
        activities: [...prevState.activities, newStudentActivity],
      };
    });
  };

  const getStudentIdFromSideBar = (id) => {
    setStudents((prevState) => {
      return {
        ...prevState,
        selectedStudentId: id,
        studentModifiedId: undefined,
      };
    });
  };

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

  const selectedStudent = students.students.find(
    (student) => student.studentId === students.selectedStudentId
  );

  const selectedStudentActivities = students.activities.filter(
    (activity) => activity.studentId === students.selectedStudentId
  );

  let mainContent = (
    <StudentPage
      onHandleGetNewActivities={handleGetNewActivities}
      selectedStudent={selectedStudent}
      activities={selectedStudentActivities}
      onHandleDeleteTask={handleDeleteTask}
      onHandleDeleteStudent={handleDeleteStudent}
      onHandleStartModifyStudent={handleStartModifyStudent}
    />
  );

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
  } else if (students.studentModifiedId === null) {
    mainContent = (
      <ModifyStudent
        onHandleCancelAddStudent={handleCancelAddStudent}
        onHandleCancelModifiedStudent={handleCancelModifiedStudent}
        studentBeingModified={studentBeingModified}
        onHandleGetDataFromModifiedStudent={handleGetDataFromModifiedStudent}
      />
    );
  }

  return (
    <main className="h-screen flex">
      <SideBar
        onHandleStartAddStudent={handleStartAddStudent}
        students={students.students}
        onGetStudentIdFromSideBar={getStudentIdFromSideBar}
      />
      {mainContent}
    </main>
  );
};

export default App;
