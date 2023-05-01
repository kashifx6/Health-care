import React from "react";

const Input = (props) => {
  return (
    <div>
      <label
        for={props.id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>

      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default Input;
