import React from "react";

const Card = (props) => {
  console.log(props.color);
  return (
    <div className=" w-full p-2 lg:w-1/4 md:w-1/2">
      <div className={props.className}>
        <div className="flex flex-row justify-between items-center">
          <div className="px-4 py-4 bg-gray-300 dark:bg-gray-800 rounded-xl bg-opacity-30">
            {props.icon}
          </div>
          <div className="inline-flex text-sm dark:text-white text-gray-600 group-hover:text-gray-200 sm:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          12%
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 dark:text-white mt-12 group-hover:text-gray-50">
        {props.value}
        </h1>
        <div className="flex flex-row dark:text-white  justify-between group-hover:text-gray-200">
          <p>{props.title}</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
