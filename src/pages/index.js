import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/components/common/inputText/inputText";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/common/navbar/navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ showNav}) {
  const notify = () => toast("Please login to continue");

  return (
    <>
     <div className={`${showNav ? "ml-64" : "ml-0"}`}>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex ">
            <div className=" w-full lg:w-1/2 bg-white shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Welcome Back
                </h1>
                <div className="md:flex">
                  <button
                    type="button"
                    className="w-full md:w-1/2  border border-gray-300 dark:text-white text-black dark:bg-transparent dark:hover:bg-gray-700 dark:border dark:border-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                  >
                    <svg
                      className="w-4 h-4 mr-2 -ml-1"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                      ></path>
                    </svg>
                    Sign in with Facebook
                  </button>
                  <button
                    type="button"
                    className="w-full md:w-1/2  border border-gray-300 dark:text-white text-black dark:bg-transparent dark:hover:bg-gray-700 dark:border dark:border-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                  >
                    <svg
                      className="w-4 h-4 mr-2 -ml-1"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Sign in with Google
                  </button>
                </div>

                <div className="flex items-center">
                  <hr className="flex-1 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <span className="mx-4 text-gray-400">or</span>
                  <hr className="flex-1 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>

                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <Input
                      label="Email"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@deo.com"
                    />
                  </div>

                  <div>
                    <Input
                      label="Password"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 content bg-blue-600">
              <section className="bg-transparent">
                <div className=" px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-28">
                  <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                      Lorem ipsum dolor sit amet consectetur ?
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste sint obcaecati magnam adipisci ullam dolor minus,
                      quasi autem voluptates odit consequuntur labore. Alias,
                      unde illo dolorem quam quia odio veritatis!
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                      onClick={notify}
                    >
                      Get started
                      <svg
                        className="w-5 h-5 ml-2 -mr-1"
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
                    <ToastContainer autoClose={1500} />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
