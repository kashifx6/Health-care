import React, { useState } from "react";
import Input from "../common/inputText/inputText";

const NursingAddUser = () => {
  const [consumer, setConsumer] = useState(true);
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [medication, setMedication] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const showConsumer = () => {
    setConsumer(true);
    setAdditionalInfo(false);
    setConfirm(false);
    setMedication(false);
  };

  const showAdditionalInfo = () => {
    setConsumer(false);
    setAdditionalInfo(true);
    setConfirm(false);
    setMedication(false);
  };
  const showMedication = () => {
    setConsumer(false);
    setConfirm(false);
    setAdditionalInfo(false);
    setMedication(true);
  };
  const showConfirm = () => {
    setConsumer(false);
    setConfirm(true);
    setAdditionalInfo(false);
    setMedication(false);
  };

  return (
    <section class="bg-white dark:bg-gray-800">
      <h2 class="text-center mb-4 mt-4 text-xl font-bold text-gray-900 dark:text-white">
        ADD A NEW PATIENT
      </h2>
      <div class="md:flex md:justify-between md:items-center ">
        <div className="p-5">
          <ol class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="mb-10 ml-6">
              <span
                class={`absolute flex items-center justify-center w-8 h-8 ${
                  consumer
                    ? "bg-green-200 dark:bg-green-900"
                    : "bg-gray-100 dark:bg-gray-700"
                }  rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 `}
              >
                <svg
                  aria-hidden="true"
                  class={`w-5 h-5  ${
                    consumer
                      ? "text-green-500 dark:text-green-400"
                      : "text-gray-500 dark:text-gray-400"
                  } `}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Consumer Contract</h3>
            </li>
            {/* <li class="mb-10 ml-6">
              <span
                class={`absolute flex items-center justify-center w-8 h-8 ${
                  signature
                    ? "bg-green-200 dark:bg-green-900"
                    : "bg-gray-100 dark:bg-gray-700"
                }  rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 `}
              >
                <svg
                  aria-hidden="true"
                  class={`w-5 h-5  ${
                    signature
                      ? "text-green-500 dark:text-green-400"
                      : "text-gray-500 dark:text-gray-400"
                  } `}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Signature And Date</h3>
            </li>
            <li class="mb-10 ml-6">
              <span
                class={`absolute flex items-center justify-center w-8 h-8 ${
                  auth
                    ? "bg-green-200 dark:bg-green-900"
                    : "bg-gray-100 dark:bg-gray-700"
                }  rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 `}
              >
                <svg
                  aria-hidden="true"
                  class={`w-5 h-5  ${
                    auth
                      ? "text-green-500 dark:text-green-400"
                      : "text-gray-500 dark:text-gray-400"
                  } `}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Authorization To HIPPA</h3>
            </li>
            <li class="mb-10 ml-6">
              <span
                class={`absolute flex items-center justify-center w-8 h-8 ${
                  insurance
                    ? "bg-green-200 dark:bg-green-900"
                    : "bg-gray-100 dark:bg-gray-700"
                }  rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 `}
              >
                <svg
                  aria-hidden="true"
                  class={`w-5 h-5  ${
                    insurance
                      ? "text-green-500 dark:text-green-400"
                      : "text-gray-500 dark:text-gray-400"
                  } `}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Insurance Benefits</h3>
            </li> */}
            <li class="mb-10 ml-6">
              <span
                class={`absolute flex items-center justify-center w-8 h-8 ${
                  additionalInfo
                    ? "bg-green-200 dark:bg-green-900"
                    : "bg-gray-100 dark:bg-gray-700"
                }  rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 `}
              >
                <svg
                  aria-hidden="true"
                  class={`w-5 h-5  ${
                    additionalInfo
                      ? "text-green-500 dark:text-green-400"
                      : "text-gray-500 dark:text-gray-400"
                  } `}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Additional Info</h3>
            </li>
            <li class="mb-10 ml-6">
              <span
                class={`absolute flex items-center justify-center w-8 h-8 ${
                  medication
                    ? "bg-green-200 dark:bg-green-900"
                    : "bg-gray-100 dark:bg-gray-700"
                }  rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 `}
              >
                <svg
                  aria-hidden="true"
                  class={`w-5 h-5  ${
                    medication
                      ? "text-green-500 dark:text-green-400"
                      : "text-gray-500 dark:text-gray-400"
                  } `}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="font-medium leading-tight">
                Medication Allergies Food and Other
              </h3>
            </li>
            <li class="mb-10 ml-6">
              <span
                class={`absolute flex items-center justify-center w-8 h-8 ${
                  confirm
                    ? "bg-green-200 dark:bg-green-900"
                    : "bg-gray-100 dark:bg-gray-700"
                }  rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 `}
              >
                <svg
                  aria-hidden="true"
                  class={`w-5 h-5  ${
                    confirm
                      ? "text-green-500 dark:text-green-400"
                      : "text-gray-500 dark:text-gray-400"
                  } `}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Confirmation</h3>
              <p class="text-sm">Click on the submit button to confirm</p>
            </li>
          </ol>
        </div>
        <div className="py-8 px-4 w-full">
          <form action="#">
            {/* for consumer  */}

            {consumer && (
              <>
                <div class=" grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div class="sm:col-span-2">
                    <Input
                      label="Name"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Deo"
                    />
                  </div>
                  <div class="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Gender
                    </label>
                    <select
                      id="gender"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div class="w-full">
                    <Input label="DOB" type="date" id="dob" name="dob" />{" "}
                  </div>
                  <div className="w-full">
                    <Input
                      label="Social Security Number"
                      type="number"
                      id="security_number"
                      name="security_number"
                      placeholder="121..."
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      label="Insurance Name"
                      type="text"
                      id="incurance_name"
                      name="incurance_name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Input
                      label="Insurance ID"
                      type="text"
                      id="insurance_id"
                      name="insurance_id"
                      placeholder="A123XC"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Medicated ID"
                      type="text"
                      id="medicated_id"
                      name="medicated_id"
                      placeholder="A123XC"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Street Address"
                      type="text"
                      id="street_address"
                      name="street_address"
                      placeholder="Street No xyz"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="City"
                      type="text"
                      id="city"
                      name="city"
                      placeholder="XYZ"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="State"
                      type="text"
                      id="state"
                      name="state"
                      placeholder="XYZ"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="ZIP CODE"
                      type="text"
                      id="zip_code"
                      name="zip_code"
                      placeholder="321A21"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Home Phone"
                      type="number"
                      id="home_phone"
                      name="home_phone"
                      placeholder="(921) 122 123 12"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Cell"
                      type="number"
                      id="cell_no"
                      name="cell_no"
                      placeholder="+92 312 1111211"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Email Address"
                      type="email"
                      id="email_address"
                      name="email_address"
                      placeholder="John@doe.com"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Emergency Contact Name 1"
                      type="text"
                      id="emergency_contact_name1"
                      name="emergency_contact_name1"
                      placeholder="John"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Relationship"
                      type="text"
                      id="e_relationship1"
                      name="e_relationship1"
                      placeholder="Father"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Email Address"
                      type="email"
                      id="e_email_address1"
                      name="e_email_address1"
                      placeholder="Emergencey Contact 1 Email Address"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Phone No"
                      type="number"
                      id="e_phonenum1"
                      name="e_phonenum1"
                      placeholder="Emergency Contact 1 Phone Number "
                    />{" "}
                  </div>

                  <div>
                    <Input
                      label="Alternate No."
                      type="number"
                      id="e_alternate_no1"
                      name="e_alternate_no1"
                      placeholder="+09 111 1112 1"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Emergency Contact Name 2"
                      type="text"
                      id="emergency_contact_name2"
                      name="emergency_contact_name2"
                      placeholder="John"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Relationship"
                      type="text"
                      id="e_relationship2"
                      name="e_relationship2"
                      placeholder="Father"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Email Address"
                      type="email"
                      id="e_email_address2"
                      name="e_email_address2"
                      placeholder="Emergencey Contact 2 Email Address"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Phone No"
                      type="number"
                      id="e_phonenum2"
                      name="e_phonenum2"
                      placeholder="Emergency Contact 2 Phone Number "
                    />{" "}
                  </div>

                  <div>
                    <Input
                      label="Alternate No."
                      type="number"
                      id="e_alternate_no2"
                      name="e_alternate_no2"
                      placeholder="+09 111 1112 1"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Emergency Contact Name 1"
                      type="text"
                      id="emergency_contact_name1"
                      name="emergency_contact_name1"
                      placeholder="John"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Relationship"
                      type="text"
                      id="relationship"
                      name="relationship"
                      placeholder="Father"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Email Address"
                      type="email"
                      id="e_email_address1"
                      name="e_email_address1"
                      placeholder="Emergencey Contact 1 Email Address"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Phone No"
                      type="number"
                      id="e_phonenum1"
                      name="e_phonenum1"
                      placeholder="Emergency Contact 1 Phone Number "
                    />{" "}
                  </div>

                  <div>
                    <Input
                      label="Client Diagnosis Code"
                      type="text"
                      id="diagonsis_code1"
                      name="diagonsis_code1"
                      placeholder=""
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Client Diagnosis Code"
                      type="text"
                      id="diagonsis_code2"
                      name="diagonsis_code2"
                      placeholder=""
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Type of service needed"
                      type="text"
                      id="service_type"
                      name="service_type"
                      placeholder="Service"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Nursing Assessment"
                      type="text"
                      id="nursing_assessment"
                      name="nursing_assessment"
                      placeholder="Nursing Assessment"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Authorization Number"
                      type="number"
                      id="auth_number"
                      name="auth_number"
                      placeholder="121.."
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="From Date"
                      type="date"
                      id="from_date"
                      name="from_date"
                      placeholder=""
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="To Date"
                      type="date"
                      id="to_date"
                      name="to_date"
                      placeholder=""
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Code"
                      type="text"
                      id="code"
                      name="code"
                      placeholder="21aS1"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Modifier"
                      type="text"
                      id="modifier"
                      name="modifier"
                      placeholder=""
                    />{" "}
                  </div>
                  <div class="sm:col-span-2">
                    <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4">
                      Primary Care Physician Information
                    </h1>
                    <div>
                      <Input
                        label="PCP Name"
                        type="text"
                        id="pcp_name"
                        name="pcp_name"
                        placeholder="JOHN"
                      />{" "}
                    </div>
                  </div>
                  <div>
                    <Input
                      label="NPI"
                      type="text"
                      id="npi"
                      name="npi"
                      placeholder="NPI"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Phone Number"
                      type="number"
                      id="pcp_number"
                      name="pcp_number"
                      placeholder="+92 2311 111 11"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Fax No."
                      type="text"
                      id="fax_no"
                      name="fax_no"
                      placeholder="1212"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="Street Address"
                      type="text"
                      id="pcp_street_address"
                      name="pcp_street_address"
                      placeholder="Street No xyz"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="City"
                      type="text"
                      id="pcp_city"
                      name="pcp_city"
                      placeholder="XYZ"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="State"
                      type="text"
                      id="pcp_state"
                      name="pcp_state"
                      placeholder="XYZ"
                    />{" "}
                  </div>
                  <div>
                    <Input
                      label="ZIP CODE"
                      type="text"
                      id="pcp_zip_code"
                      name="pcp_zip_code"
                      placeholder="321A21"
                    />{" "}
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={showConsumer}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={showAdditionalInfo}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* for Additional Info */}
            {additionalInfo && (
              <>
                <div class=" grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <Input
                    label="Height"
                    type="text"
                    id="height"
                    name="height"
                    placeholder="5'9"
                  />
                  <Input
                    label="Weight"
                    type="text"
                    id="weight"
                    name="weight"
                    placeholder="182 LBs"
                  />
                  <div class="sm:col-span-2">
                    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Weight Status
                    </h3>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-weight_status-increase"
                            type="radio"
                            value=""
                            name="weight_status"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-weight_status-increase"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Increase{" "}
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-weight_status-static"
                            type="radio"
                            value=""
                            name="weight_status"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-weight_status-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Static
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-weight_status-decrease"
                            type="radio"
                            value=""
                            name="weight_status"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-weight_status-decrease"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Decrease
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="weight_change_reason"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Reason for any weight change
                    </label>
                    <textarea
                      id="weight_change_reason"
                      name="weight_change_reason"
                      rows="5"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none "
                      placeholder="Reason here "
                    ></textarea>
                  </div>
                  <div class="sm:col-span-2">
                    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Vital Signs
                    </h3>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="bloodpressure_checkbox"
                            type="checkbox"
                            value="blood_pressure"
                            name="blood_pressure"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="bloodpressure_checkbox"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Blood Pressure
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="pulse_checkbox"
                            type="checkbox"
                            value="pulse"
                            name="pulse"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="pulse_checkbox"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Pulse
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="respirations_checkbox"
                            type="checkbox"
                            value="respirations"
                            name="respirations"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="respirations_checkbox"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Respirations
                          </label>
                        </div>
                      </li>
                      <li class="w-full dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="temprature_checkbox"
                            type="checkbox"
                            value="temprature"
                            name="temprature"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="temprature_checkbox"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Temprature
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="sm:col-span-2">
                    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Pain
                    </h3>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-yes_pain"
                            type="radio"
                            value="Yes Pain"
                            name="pain"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-yes_pain"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-no-pain"
                            type="radio"
                            value="No pain"
                            name="pain"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-no-pain"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      label="If yes level of Pain"
                      type="number"
                      id="pain_level"
                      name="pain_level"
                      placeholder="10"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="location_description"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Location & Description
                    </label>
                    <textarea
                      id="location_description"
                      name="location_description"
                      rows="5"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none "
                      placeholder=""
                    ></textarea>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="present_illness_history"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      History of present illness
                    </label>
                    <textarea
                      id="present_illness_history"
                      name="present_illness_history"
                      rows="5"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none "
                      placeholder=""
                    ></textarea>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="past_illness_history"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Past History
                    </label>
                    <textarea
                      id="past_illness_history"
                      name="past_illness_history"
                      rows="5"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none "
                      placeholder=""
                    ></textarea>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="family_and_personal_history"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Family & Personal History
                    </label>
                    <textarea
                      id="family_and_personal_history"
                      name="family_and_personal_history"
                      rows="5"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none "
                      placeholder=""
                    ></textarea>
                  </div>
                  <div class="sm:col-span-2">
                    <Input
                      label="General Appearence"
                      type="text"
                      id="general_appearence"
                      name="general_appearence"
                      placeholder=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <Input
                      label="Skin"
                      type="text"
                      id="skin"
                      name="skin"
                      placeholder=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <Input
                      label="HEENT ( Head , Eye , ENT )"
                      type="text"
                      id="heent"
                      name="heent"
                      placeholder=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <Input
                      label="Neck"
                      type="text"
                      id="neck"
                      name="neck"
                      placeholder=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <Input
                      label="Chest and Lungs"
                      type="text"
                      id="chest_lungs"
                      name="chest_lungs"
                      placeholder=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <Input
                      label="Cardiovascular"
                      type="text"
                      id="cardiovascular"
                      name="cardiovascular"
                      placeholder=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <Input
                      label="Abdomen"
                      type="text"
                      id="abdomen"
                      name="abdomen"
                      placeholder=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <Input
                      label="Genitourinary"
                      type="text"
                      id="genitourinary"
                      name="genitourinary"
                      placeholder=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <Input
                      label="Rectal"
                      type="text"
                      id="rectal"
                      name="rectal"
                      placeholder=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <Input
                      label="Neurological / psychiatry"
                      type="text"
                      id="neurological_psychiatry"
                      name="neurological_psychiatry"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={showConsumer}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={showMedication}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* for Medication */}
            {medication && (
              <>
                <div class=" grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div class="sm:col-span-2">
                    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Prognosis
                    </h3>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-prognosis-poor"
                            type="radio"
                            value=""
                            name="prognosis"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-prognosis-poor"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Poor{" "}
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="prognosis"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Gaurded
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-decrease"
                            type="radio"
                            value=""
                            name="prognosis"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-decrease"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Fair
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-decrease"
                            type="radio"
                            value=""
                            name="prognosis"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-decrease"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Good
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-decrease"
                            type="radio"
                            value=""
                            name="prognosis"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-decrease"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Excellent
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="Safety-Measures"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Safety Measures
                    </label>
                    <textarea
                      id="Safety-Measures"
                      name="safety_measures"
                      rows="5"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none "
                      placeholder=""
                    ></textarea>
                  </div>
                  <div class="sm:col-span-2">
                    <h2 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Dental Care
                    </h2>
                    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Does Client Have Dental Problems ?
                    </h3>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-prognosis-poor"
                            type="radio"
                            value=""
                            name="dental_problem"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-prognosis-poor"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes{" "}
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="dental_problem"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="sm:col-span-2">
                    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Is client under care of Dentist ?
                    </h3>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-prognosis-poor"
                            type="radio"
                            value=""
                            name="dentist_care"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-prognosis-poor"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes{" "}
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="dentist_care"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="sm:col-span-2">
                    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Dental Status
                    </h3>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-prognosis-poor"
                            type="radio"
                            value=""
                            name="dental_status"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-prognosis-poor"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No Dentures{" "}
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="dental_status"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Full Upper
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-decrease"
                            type="radio"
                            value=""
                            name="dental_status"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-decrease"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Full Lower
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-decrease"
                            type="radio"
                            value=""
                            name="dental_status"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-decrease"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Partial Denture
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-decrease"
                            type="radio"
                            value=""
                            name="dental_status"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-decrease"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Dentrure Demaged
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-decrease"
                            type="radio"
                            value=""
                            name="dental_status"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-decrease"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Not Wearing Denture
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-decrease"
                            type="radio"
                            value=""
                            name="dental_status"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-decrease"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No Teeth
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="sm:col-span-2">
                    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Can client Chew Food Effectively ?
                    </h3>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-prognosis-poor"
                            type="radio"
                            value=""
                            name="food_chew"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-prognosis-poor"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes{" "}
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="food_chew"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Input
                    label="Dentist Name"
                    type="text"
                    id="dentist_name"
                    name="dentist_name"
                    placeholder="John Deo"
                  />
                  <Input
                    label="Dentist Phone No"
                    type="number"
                    id="dentist_phone_no"
                    name="dentist_phone_no"
                    placeholder="+91 121111 .."
                  />
                  <div class="sm:col-span-2">
                    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Dentist Visit
                    </h3>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-prognosis-poor"
                            type="radio"
                            value=""
                            name="dentist_visit"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-prognosis-poor"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            current{" "}
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="dentist_visit"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="sm:col-span-2">
                    <Input
                      label="If Not when the next appiontment Date "
                      type="date"
                      id="dentist_appiontment_date"
                      name="dentist_appiontment_date"
                      placeholder=""
                    />
                  </div>
                  {/* Vision  */}
                  <div class="sm:col-span-2">
                  <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Vision
                    </h3>
                   
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-prognosis-poor"
                            type="radio"
                            value=""
                            name="vision"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-prognosis-poor"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Unimpaired{" "}
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="vision"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                           Adequate For Personal Safety
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="vision"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                          Distinguishes only light or dark
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="vision"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                           Blind - Safe in Familiar Locale
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="vision"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Blind - Require Assistance
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="sm:col-span-2">
                  <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Wear Glasses
                    </h3>
                   
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-prognosis-poor"
                            type="radio"
                            value=""
                            name="wear_glasses"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-prognosis-poor"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes{" "}
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="wear_glasses"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                           No
                          </label>
                        </div>
                      </li>
                    
                    </ul>
                  </div>
                  <Input
                            id="prognosis-static"
                            type="text"
                            label="Opthalmologist name"
                            value=""
                            name="opthalmologist_name"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                        
                           <Input
                            id="prognosis-static"
                            type="Number"
                            label="Opthalmologist Phone No"
                            value=""
                            placeholder="+92 311 121"
                            name="opthalmologist_phone_no"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                    <div class="sm:col-span-2">
                    <Input
                      label="If Not when the next appiontment Date "
                      type="date"
                      id="dentist_appiontment_date"
                      name="dentist_appiontment_date"
                      placeholder=""
                    />
                  </div>
                  {/* Hearing  */}
                  <div class="sm:col-span-2">
                  <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Hearing
                    </h3>
                   
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-prognosis-poor"
                            type="radio"
                            value=""
                            name="hearing"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-prognosis-poor"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Unimpaired{" "}
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="hearing"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                           Mild Impairment
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="hearing"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                         Moderate Impairment
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="hearing"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                           Impaired - Safety threat exists
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="hearing"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Totaly Deaf
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="sm:col-span-2">
                  <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                     Uses Hearing Aid(s)
                    </h3>
                   
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-prognosis-poor"
                            type="radio"
                            value=""
                            name="hearing_aid"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-prognosis-poor"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes{" "}
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="hearing_aid"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                           Right ear
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="hearing_aid"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                         Left ear
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="prognosis-static"
                            type="radio"
                            value=""
                            name="hearing_aid"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="prognosis-static"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                           No
                          </label>
                        </div>
                      </li>
                    
                    </ul>
                  </div>
                  <Input
                            id="ent_name"
                            type="text"
                            label="Ent's Name"
                            value=""
                            placeholder="John Doe"
                            name="ent_name"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                        
                           <Input
                            id="ent_phone"
                            type="Number"
                            label="ENT's Phone No"
                            value=""
                            placeholder="+92 311 121"
                            name="ent_phone"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                    <div class="sm:col-span-2">
                    <Input
                      label="If Not when the next appiontment Date "
                      type="date"
                      id="ent_appiontment_date"
                      name="ent_appiontment_date"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={showAdditionalInfo}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={showConfirm}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* for Confirmation */}
            {confirm && (
              <>
                <div class=" grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div class="sm:col-span-2">
                    <h1 className="text-lg font-medium text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4">
                      By signing this agreement, I acknowledge and agree to the
                      terms and conditions outlined herein. These terms and
                      conditions include but are not limited to the
                      responsibilities of all parties involved, the scope of
                      work to be performed, and any applicable legal
                      requirements.
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={showMedication}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={showConfirm}
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NursingAddUser;
