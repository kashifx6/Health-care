import React, { useState } from "react";
import Navbar from "@/components/common/navbar/navbar";
import Table from "@/components/common/table/table";
import Breadcrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import Footer from "@/components/common/footer/footer";

const Users = ({ showNav }) => {
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
  ];
  return (
    <>
      <div className={`${showNav ? "ml-64" : "ml-0"} p-1 md:p-3`}>
        <div>
          <Breadcrumbs links={breadcrumbs} />
          <Table />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Users;
