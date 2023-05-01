import React, { useState } from "react";
import Input from "../common/inputText/inputText";

const AddUser = () => {
  const [consumer, setConsumer] = useState(true);
  const [signature, setSignature] = useState(false);
  const [auth, setAuth] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const showConsumer = () => {
    setConsumer(true);
    setSignature(false);
    setAuth(false);
    setInsurance(false);
    setConfirm(false);
  };

  const showSignature = () => {
    setConsumer(false);
    setSignature(true);
    setAuth(false);
    setInsurance(false);
    setConfirm(false);
  };

  const showAuth = () => {
    setConsumer(false);
    setSignature(false);
    setAuth(true);
    setInsurance(false);
    setConfirm(false);
  };
  const showInsurance = () => {
    setConsumer(false);
    setSignature(false);
    setAuth(false);
    setInsurance(true);
    setConfirm(false);
  };
  const showConfirm = () => {
    setConsumer(false);
    setSignature(false);
    setAuth(false);
    setInsurance(false);
    setConfirm(true);
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
            <li class="mb-10 ml-6">
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
                    onClick={showSignature}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
            {/* for signature   */}
            {signature && (
              <>
                <h1 className="text-lg font-bold text-center text-gray-900 md:text-2xl dark:text-white mb-4">
                  This Consumer Contract including the Rights and
                  Responsibilities from has been reviewed with, and a copy given
                  to, the named Consumer/Consumer's representative.
                </h1>
                <h1 className="text-sm font-normal text-center text-gray-900 md:text-normal dark:text-white mb-4">
                  IN WITNESS WHEREOF, the undersigned with the intent and
                  authority to legally bind the respective Party, have caused
                  this Agreement to be duly executed and effective as of the
                  Effective Date.
                </h1>
                <div class=" grid gap-4 sm:grid-cols-3 sm:gap-6">
                  <div class="w-full">
                    <Input
                      label="Consumer Representative Signature"
                      type="text"
                      id="c_signature"
                      name="c_signature"
                      placeholder="Signature Here"
                    />
                  </div>
                  <div class="w-full">
                    <Input
                      label="Date"
                      type="date"
                      id="signature_date"
                      name="signature_date"
                      placeholder=""
                    />
                  </div>

                  <div class="w-full">
                    <Input
                      label="Agency Authorized Signature"
                      type="text"
                      id="agency_signature"
                      name="agency_signature"
                      placeholder="Signature Here"
                    />
                  </div>
                  <div class="w-full">
                    <Input
                      label="Date"
                      type="date"
                      id="agency_signature_date"
                      name="agency_signature_date"
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
                    onClick={showAuth}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
            {/* for auth */}
            {auth && (
              <>
                <h1 className="text-lg text-center font-bold  text-gray-900 md:text-2xl dark:text-white mb-4">
                  AUTHORIZATION FOR RELEASE OF HEALTH INFORMATION PURSUANT TO
                  HIPAA
                </h1>
                <div class=" grid gap-4 sm:grid-cols-3 sm:gap-6">
                  <div class="w-full">
                    <Input
                      label="Patient Name"
                      type="text"
                      id="patient_name"
                      name="patient_name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <Input
                      label="Date of Birth"
                      type="date"
                      id="patient_Dob"
                      name="patient_Dob"
                    />
                  </div>
                  <div class="w-full">
                    <Input
                      label="Social Security Number"
                      type="text"
                      id="sec_number"
                      name="sec_number"
                      placeholder=""
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="Patient Address"
                      type="text"
                      id="patient address"
                      name="patient address"
                      placeholder="Address here"
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="State"
                      type="text"
                      id="patient_state"
                      name="patient_state"
                      placeholder="State here"
                    />{" "}
                  </div>
                  <div class="sm:col-span-3">
                    <Input
                      label="Name and address of health provider or entity to release this information"
                      type="text"
                      id="health_provider_name"
                      name="health_provider_name"
                      placeholder=""
                      value="Axzons Health System Crop 70 E Sunrise Hwy, Stc 500,
                      Valley Stream , NY 1158!"
                    />{" "}
                  </div>
                  <div class="sm:col-span-3">
                    <label
                      for="person_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name and address of person(s) or category of person to
                      whom this information will be sent:
                    </label>
                    <textarea
                      id="person_name"
                      name="person_name"
                      rows="5"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none "
                      placeholder="john , doe "
                    ></textarea>
                  </div>
                  <div class="sm:col-span-3">
                    <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4">
                      Medical Record
                    </h1>
                  </div>
                  <div class="w-full">
                    <Input
                      label="From Date"
                      type="date"
                      id="medical_record_from_date"
                      name="medical_record_from_date"
                      placeholder=""
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="To Date"
                      type="date"
                      id="medical_record_to_date"
                      name="medical_record_from_date"
                      placeholder=""
                    />{" "}
                  </div>
                  <div class="sm:col-span-3">
                    <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4">
                      Authorization to Discuss Health Information
                    </h1>
                  </div>
                  <div class="w-full">
                    <Input
                      label="Initials"
                      type="text"
                      id="initials"
                      name="initials"
                      placeholder="initials"
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="Name of individual health care"
                      type="date"
                      id="ind_health_care_provider"
                      name="ind_health_care_provider"
                      placeholder="Abc"
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="Firm Name or Agency Name"
                      type="text"
                      id="firm_name"
                      name="firm_name"
                      placeholder="Abc"
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="Reason for release of information"
                      type="text"
                      id="reason"
                      name="reason"
                      placeholder="Reason here"
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="Expiry Date"
                      type="date"
                      id="auth_expiray_date"
                      name="auth_expiray_date"
                      placeholder=""
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="If not patient, enter name of signer."
                      type="text"
                      id="not_patient"
                      name="not_patient"
                      placeholder="Abc"
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="Authority to sign on behalf of patient"
                      type="text"
                      id="patient_behalf_authority"
                      name="patient_behalf_authority"
                      placeholder="Abc"
                    />{" "}
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={showSignature}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={showInsurance}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
            {/* for insurance */}
            {insurance && (
              <>
                <div class=" grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div class="sm:col-span-2">
                    <Input
                      label="Carrier"
                      type="text"
                      id="carrier"
                      name="carrier"
                      placeholder=""
                    />
                  </div>
                  <div class="w-full">
                    <Input
                      label="Patient Name"
                      type="text"
                      id="p_name"
                      name="p_name"
                      placeholder="john"
                    />
                  </div>
                  <div class="w-full">
                    <Input
                      label="Medicated Number"
                      type="text"
                      id="m_number"
                      name="m_number"
                      placeholder=""
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="Patient DOB"
                      type="date"
                      id="p_dob"
                      name="p_dob"
                      placeholder=""
                    />{" "}
                  </div>
                  <div class="sm:col-span-2">
                    <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4">
                      By
                    </h1>
                  </div>
                  <div class="w-full">
                    <Input
                      label="Legal Representative"
                      type="text"
                      id="legal_representative"
                      name="legal_representative"
                      placeholder="John"
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="Date"
                      type="date"
                      id="legal_date"
                      name="legal_date"
                      placeholder=""
                    />{" "}
                  </div>
                  <div class="sm:col-span-2">
                    <h1 className="text-lg font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4">
                      That my signature below indicated my agreement to comply
                      with these terms.
                    </h1>
                  </div>
                  <div class="w-full">
                    <Input
                      label="First and Last Name"
                      type="text"
                      id="f_l_name"
                      name="f_l_name"
                      placeholder="John Doe"
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="Desigination"
                      type="text"
                      id="desigination"
                      name="desigination"
                      placeholder="Manager"
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input
                      label="Signature"
                      type="text"
                      id="m_signature"
                      name="m_signature"
                      placeholder="abc"
                    />{" "}
                  </div>
                  <div class="w-full">
                    <Input label="Date" type="date" id="m_date" name="m_date" />
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={showAuth}
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
                    onClick={showInsurance}
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

export default AddUser;
