/* eslint-disable react/prop-types */
import Button from "./Button";

const SideBar = ({ onHandleStartAddStudent }) => {
  return (
    <aside className="bg-green-300 w-1/3 p-8 rounded-r-xl md:w-72">
      <h1 className="text-xl font-bold text-black mb-6">EMSI / 4IIR / G6</h1>
      <Button onClick={onHandleStartAddStudent}>+ Add Student</Button>
      <ul></ul>
    </aside>
  );
};

export default SideBar;
