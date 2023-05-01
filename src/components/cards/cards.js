import React from "react";
import Card from "../common/card/card";

const Cards = () => {
  return (
    <div className="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
      <Card
        className="cursor-pointer flex flex-col px-6 py-10 overflow-hidden bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-br hover:from-purple-500 hover:to-blue-400 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        icon={
          <svg
            className="h-8 w-8 text-dark dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
            />
          </svg>
        }
        title="New Users"
        value="3,200"
      />
      <Card
        className="cursor-pointer flex flex-col px-6 py-10 overflow-hidden bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-br hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:   to-90% rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        icon={
          <svg
            className="h-8 w-8 text-dark dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        }
        title="Updated Users"
        value={200}
      />
      <Card
        className="cursor-pointer flex flex-col px-6 py-10 overflow-hidden bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-400 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        icon={
          <svg
            className="h-8 w-8 text-dark dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        }
        title="Reports"
        value="31.2 %"
      />
      <Card
        className="cursor-pointer flex flex-col px-6 py-10 overflow-hidden bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-br hover:from-teal-300 hover:to-lime-300 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        icon={
          <svg
            className="h-8 w-8 text-dark dark:text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        }
        title="Unfilled Forms"
        value="12.3"
      />
    </div>
  );
};

export default Cards;
