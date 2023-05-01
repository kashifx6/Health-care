import React, { useState } from "react";
import Navbar from "@/components/common/navbar/navbar";
import Cards from "@/components/cards/cards";
import HospitalReportGraph from "@/components/common/chart/chart";
import NewUsers from "@/components/newUsers/newUsers";
import Table from "@/components/common/table/table";
import Footer from "@/components/common/footer/footer";

const StaffDashboard = ({ showNav}) => {

  return (
    <>
   
      <div className={`${showNav ? "ml-64" : "ml-0"} `}>
        <div className="content p-3 ">
          <Cards />
          <div className="md:flex">
            <div className="w-full md:w-3/4">
              <HospitalReportGraph />
            </div>
            <div className="w-full md:w-1/4 mx-2 ">
              <NewUsers />
            </div>
          </div>
          <div className="w-full ">
            <Table />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default StaffDashboard;
