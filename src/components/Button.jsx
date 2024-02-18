/* eslint-disable react/prop-types */
const Button = ({ children, ...props }) => {
  return (
    <button
      className="border-green-900 bg-green-200 p-3 rounded-md hover:bg-green-400 font-bold "
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
