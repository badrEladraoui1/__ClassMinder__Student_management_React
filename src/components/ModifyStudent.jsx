/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";

import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

const ModifyStudent = ({
  onHandleCancelModifiedStudent,
  studentBeingModified,
  onHandleGetDataFromModifiedStudent,
}) => {
  const [student, setStudent] = useState({
    firstName: studentBeingModified.firstName,
    lastName: studentBeingModified.lastName,
    creationDate: studentBeingModified.creationDate,
  });

  const handleChangeFirstName = (event) => {
    setStudent((prevState) => {
      return {
        ...prevState,
        firstName: event.target.value,
      };
    });
  };

  const handleChangeLastName = (event) => {
    setStudent((prevState) => {
      return {
        ...prevState,
        lastName: event.target.value,
      };
    });
  };

  const handleChangeCreationDate = (event) => {
    setStudent((prevState) => {
      return {
        ...prevState,
        creationDate: event.target.value,
      };
    });
  };

  const modal = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const creationDate = useRef();

  const handleSave = () => {
    const enteredFirstName = firstName.current.value;
    const enteredLastName = lastName.current.value;
    const enteredCreationDate = creationDate.current.value;

    if (
      enteredFirstName.trim() === "" ||
      enteredLastName.trim() === "" ||
      enteredCreationDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onHandleGetDataFromModifiedStudent({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      creationDate: enteredCreationDate,
    });
  };

  return (
    <menu className="flex flex-col gap-5 p-10 uppercase w-[35rem]">
      <Modal ref={modal} btnText="Okay">
        <h2>You should provide all the fields</h2>
      </Modal>
      <h1 className="text-4xl text-green-800 bg-green-300 p-2 rounded-md text-center mb-5">
        <span className="text-green-950 font-bold">Modify </span>Student
      </h1>
      <div className="flex gap-4 justify-end">
        <button onClick={onHandleCancelModifiedStudent}>Cancel</button>
        <Button onClick={handleSave}>Save</Button>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          <Input
            value={student.firstName}
            ref={firstName}
            label="first name"
            isTextarea={false}
            type="text"
            onChange={handleChangeFirstName}
          />
          <Input
            value={student.lastName}
            ref={lastName}
            label="last name"
            isTextarea={false}
            type="text"
            onChange={handleChangeLastName}
          />
          <Input
            value={student.creationDate}
            ref={creationDate}
            label="Creation Date"
            isTextarea={false}
            type="date"
            onChange={handleChangeCreationDate}
          />
        </div>
      </div>
    </menu>
  );
};

export default ModifyStudent;
