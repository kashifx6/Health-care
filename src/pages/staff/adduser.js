import React, { useState } from "react";
import AddUser from "@/components/addUser/addUser";
import Navbar from "@/components/common/navbar/navbar";
import Breadcrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import Footer from "@/components/common/footer/footer";
const NewUser = ({ showNav }) => {
  
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
          <AddUser />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default NewUser;
