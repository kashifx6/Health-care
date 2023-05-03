import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  return (
    <>
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-700">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/staff/dashboard"
                className={`flex items-center p-2 rounded-lg  ${
                  router.pathname === "/staff/dashboard"
                    ? "bg-white text-blue-700"
                    : "hover:bg-blue-600 text-white"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className={`flex-shrink-0 w-6 h-6 ${
                    router.pathname === "/staff/dashboard"
                      ? "text-blue-600"
                      : "text-white"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/staff/adduser"
                className={`flex items-center p-2  rounded-lg  ${
                  router.pathname === "/staff/adduser"
                    ? "bg-white text-blue-700"
                    : "hover:bg-blue-600 text-white"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className={`flex-shrink-0 w-6 h-6  ${
                    router.pathname === "/staff/adduser"
                      ? "text-blue-700"
                      : "text-white"
                  }   transition duration-75  `}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Consumer Contract
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/nursing/nursingselectuser"
                className={`flex items-center p-2  rounded-lg  ${
                  router.pathname === "/nursing/nursingselectuser"
                    ? "bg-white text-blue-700"
                    : "hover:bg-blue-600 text-white"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className={`flex-shrink-0 w-6 h-6  ${
                    router.pathname === "/nursing/nursingselectuser"
                      ? "text-blue-700"
                      : "text-white"
                  }   transition duration-75  `}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Nursing Assessment
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/staff/users"
                className={`flex items-center p-2  rounded-lg  ${
                  router.pathname === "/staff/users"
                    ? "bg-white text-blue-700"
                    : "hover:bg-blue-600 text-white"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className={`flex-shrink-0 w-6 h-6  ${
                    router.pathname === "/staff/users"
                      ? "text-blue-700"
                      : "text-white"
                  }   transition duration-75  `}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Patients</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-white rounded-lg "
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-white transition duration-75  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Discharge/Transfer
                </span>
              </Link>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-white transition duration-75 rounded-lg "
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75 "
                  focusable="false"
                  data-prefix="fas"
                  data-icon="gem"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                  ></path>
                </svg>
                <span className="ml-4">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
