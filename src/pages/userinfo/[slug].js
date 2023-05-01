import React, { useState } from "react";
import { useRouter } from "next/router";
import Breadcrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import Usercard from "@/components/common/usercard/usercard";
const UserInfo = ({ showNav }) => {
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();
  const { slug } = router.query;

  const breadcrumbs = [
    {
      link: "/staff/users",
      value: "User",
      img: (
        <svg
          className="h-5 w-5 mr-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <circle cx="9" cy="7" r="4" />{" "}
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />{" "}
          <line x1="19" y1="7" x2="19" y2="10" />{" "}
          <line x1="19" y1="14" x2="19" y2="14.01" />
        </svg>
      ),
    },
    {
      link: "#",
      value: slug,
      img: (
        <svg
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const tabButtons = [
    {
      id: 1,
      title: "Intake",
      content: (
        <>
          <h1 className="p-2 font-semibold leading-tight tracking-tight text-white text-xl bg-blue-600 rounded-lg mb-2 ">
            Chief Complaint
          </h1>

          <form className="mb-2">
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                  <div className="flex items-center space-x-1 sm:pr-4">
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Attach file</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Embed map</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Upload image</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Format code</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Add emoji</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Add list</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Settings</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Timeline</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Download</span>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  data-tooltip-target="tooltip-fullscreen"
                  className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Full screen</span>
                </button>
                <div
                  id="tooltip-fullscreen"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Show full screen
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                <label for="editor" className="sr-only">
                  Publish post
                </label>
                <textarea
                  id="editor"
                  rows="3"
                  disabled
                  className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:outline-none dark:text-white dark:placeholder-gray-400"
                  placeholder="Experience severe anxiety and panic attacks ...."
                  required
                ></textarea>
              </div>
            </div>
          </form>
          <h1 className="p-2 font-semibold leading-tight tracking-tight text-white text-xl bg-blue-600 rounded-lg mb-2 ">
            Vitals
          </h1>
          <div className="mb-2 flex items-center mb-2 ">
            <h1 className="p-2 mr-4 dark:text-gray-400 text-gray-800 text-sm  rounded-lg  ">
              Legends
            </h1>
            <div className="flex items-center mr-4 text-yellow-400">
              <div className="w-[10px] h-[10px] p-2 bg-yellow-400 rounded mr-2"></div>
              Very Low
            </div>
            <div className="flex items-center mr-4 text-green-400">
              <div className="w-[10px] h-[10px] p-2 bg-green-400 rounded mr-2"></div>
              Normal
            </div>
            <div className="flex items-center mr-4 text-red-400">
              <div className="w-[10px] h-[10px] p-2 bg-red-400 rounded mr-2"></div>
              Very High
            </div>
          </div>
          <div className="mb-2 flex items-center mb-2 ">
            <div className="flex items-center mr-2 md:mr-5">
              <h1 className="p-2 mr-4 dark:text-white text-gray-800 font-bold text-sm  rounded-lg  ">
                Weight
              </h1>
              <div className="bg-transparent border border-gray-300 rounded p-2 dark:border-gray-600">
                175 Lbs
              </div>
            </div>
            <div className="flex items-center mr-2 md:mr-5">
              <h1 className="p-2 mr-4 dark:text-white text-gray-800 font-bold text-sm  rounded-lg  ">
                Height
              </h1>
              <div className="bg-transparent border border-gray-300 rounded p-2 dark:border-gray-600">
                5'8
              </div>
            </div>
            <div className="flex items-center mr-2 md:mr-5">
              <h1 className="p-2 mr-4 dark:text-white text-gray-800 font-bold text-sm  rounded-lg  ">
                BMI
              </h1>
              <div className="bg-transparent border border-gray-300 rounded p-2 dark:border-gray-600">
                20.18
              </div>
            </div>
          </div>
          <div className="mb-2 flex items-center mb-2 ">
            <div className="flex items-center mr-2 md:mr-5">
              <h1 className="p-2 mr-4 text-green-600 font-bold   text-sm   ">
                Temprature
              </h1>
              <div className="bg-transparent border text-green-600 border-gray-300 rounded p-2 dark:border-gray-600">
                98 F
              </div>
            </div>
            <div className="flex items-center mr-2 md:mr-5">
              <h1 className="p-2 mr-4 dark:text-white text-gray-800 font-bold text-sm  rounded-lg  ">
                Heart Rate
              </h1>
              <div className="bg-transparent border border-gray-300 rounded p-2 dark:border-gray-600">
                65Beats/Min
              </div>
            </div>
          </div>
          <h1 className="p-2 font-semibold leading-tight tracking-tight text-white text-xl bg-blue-600 rounded-lg mb-4 ">
            Psychiatric
          </h1>
          <div className="mb-2 flex items-center justify-between mb-2 p-3  ">
            <div className="flex items-center	">
              <input
                id="default-checkbox"
                type="checkbox"
                checked
                value=""
                className="w-6 h-6 text-red-300 bg-transparent border-gray-300 rounded "
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Anxiety
              </label>
            </div>
            <div className="flex items-center justify-between">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-6 h-6 text-red-300 bg-transparent border-gray-300 rounded "
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Depression
              </label>
            </div>
            <div className="flex items-center justify-between">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-6 h-6 text-red-300 bg-transparent border-gray-300 rounded "
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Memory Loss
              </label>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 2,
      title: "Clinical",
      content: "clincal content will appear here",
    },
    {
      id: 3,
      title: "Coding",
      content: "coding content will appear here",
    },
    {
      id: 4,
      title: "Preview",
      content: "content will appear here",
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <div className={`${showNav ? "ml-64" : "ml-0"}`}>
        <Breadcrumbs links={breadcrumbs} />
        <div className="content p-3 md:flex ">
          <Usercard />
          <div className="md:mx-5 mx-1 w-full ">
            <h1 className="p-3 md:text-5xl	 font-bold leading-tight tracking-tight text-gray-900 text-xl dark:text-white ">
              Encounters
            </h1>
            <div className="mb-4 border-b border-gray-300 dark:border-gray-700">
              <ul
                className="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="myTab"
                role="tablist"
              >
                {tabButtons.map((tab) => (
                  <li
                    key={tab.id}
                    className={`mr-2 ${
                      activeTab === tab.id ? "border-b-2" : "border-transparent"
                    }`}
                    role="presentation"
                  >
                    <button
                      className={`inline-block p-4 rounded-t-lg ${
                        activeTab === tab.id
                          ? "border-blue-300 dark:border-gray-700"
                          : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      }`}
                      id={`tab-${tab.id}`}
                      type="button"
                      role="tab"
                      aria-controls={`panel-${tab.id}`}
                      aria-selected={activeTab === tab.id ? "true" : "false"}
                      onClick={() => handleTabClick(tab.id)}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div id="myTabContent">
              {tabButtons.map((tab) => (
                <div
                  key={`panel-${tab.id}`}
                  className={`${
                    activeTab === tab.id ? "" : "hidden"
                  } p-4 rounded-lg bg-gray-50 dark:bg-gray-700`}
                  id={`panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {tab.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
