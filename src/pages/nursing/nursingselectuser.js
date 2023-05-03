import Breadcrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import Footer from "@/components/common/footer/footer";
import NursingTable from "@/components/common/nursingTable/nursingTable";
import React, { useState } from "react";

const Nursingselectuser = ({ showNav }) => {
  const breadcrumbs = [
    {
      link: "/staff/users",
      value: "Patients",
      img: (
        <svg
          class="h-5 w-5 mr-2 "
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
          <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />{" "}
          <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />{" "}
          <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />{" "}
          <line x1="11" y1="6" x2="20" y2="6" />{" "}
          <line x1="11" y1="12" x2="20" y2="12" />{" "}
          <line x1="11" y1="18" x2="20" y2="18" />
        </svg>
      ),
    },
    {
      link: "/staff/adduser",
      value: "Add Patient",
      img: (
        <svg
          class="h-5 w-5 mr-2 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <div className={`${showNav ? "ml-64" : "ml-0"}  p-1 md:p-3`}>
        <div>
          <Breadcrumbs links={breadcrumbs} />

          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                From the below table select User
              </h1>
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                Below the list of all the patients are given that are added by
                the office staff / consumer contract . Select any of the user to
                start adding their information.
              </p>
              <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Get started
                  <svg
                    aria-hidden="true"
                    class="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </section>

          <NursingTable />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Nursingselectuser;
