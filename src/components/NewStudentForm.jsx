/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef } from "react";

import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

const NewStudentForm = ({
  onHandleCancelAddStudent,
  onHandleDataFromAddStudent,
}) => {
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
    onHandleDataFromAddStudent({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      creationDate: enteredCreationDate,
    });
  };

  return (
    <menu className="flex flex-col gap-5 p-10 uppercase w-[35rem]">
      <h1 className="text-4xl text-green-800 bg-green-300 p-2 rounded-md text-center mb-5">
        <span className="text-green-950 font-bold">New</span> Student{" "}
        <span className="text-green-950">Form</span>
      </h1>
      <Modal ref={modal} btnText="Okay">
        <h2>You should provide all the fields</h2>
      </Modal>
      <div className="flex gap-4 justify-end">
        <button onClick={onHandleCancelAddStudent}>Cancel</button>
        <Button onClick={handleSave}>Save</Button>
      </div>
      <div className="flex flex-col gap-5">
        <Input
          ref={firstName}
          label="first name"
          isTextarea={false}
          type="text"
        />
        <Input
          ref={lastName}
          label="last name"
          isTextarea={false}
          type="text"
        />
        <Input
          ref={creationDate}
          label="Creation Date"
          isTextarea={false}
          type="date"
        />
      </div>
    </menu>
  );
};

export default NewStudentForm;
