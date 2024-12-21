import { useState } from "react";
import { Link } from "react-router-dom";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"saas" | "self-hosted">("saas");

  const authOptions = {
    saas: [
      { img: "/github.png", text: "Sign in with Github" },
      { img: "/bitbucket.png", text: "Sign in with Bitbucket" },
      { img: "/azure.png", text: "Sign in with Azure DveOps" },
      { img: "/gitlab.png", text: "Sign in with Gitlab" },
    ],
    "self-hosted": [
      { img: "/gitlab.png", text: "Self Hosted Gitlab" },
      { img: "/key.png", text: "Sign in with SSO" },
    ],
  };

  return (
    <div className="bg-[#fafafa] md:flex md:flex-row md:justify-center md:items-center h-[100vh] border-[1px] border-[#f3f2f2]">
      {/* Left Panel - Stats and Info */}
      <div className="bg-[#ffffff] h-[100vh] md:flex flex-col items-center justify-center w-[50%] hidden">
        <div className="md:flex flex-col items-end relative">
          <div className="flex flex-col bg-white rounded-xl h-max shadow-xl pb-[1rem]">
            <div className="p-4 font-semibold text-lg pr-[5rem] flex flex-row items-center justify-center font-[inter] gap-2">
              <img src="./Group 37110.png" alt="CodeAnt Logo" />
              <p>AI to Detect & Autofix Bad Code</p>
            </div>
            <hr className="h-[1px] w-full bg-[#f3f2f2]" />
            <div className="flex flex-row gap-6 p-4 items-center">
              <div className="flex flex-col gap-1 items-center">
                <p className="font-semibold">30+</p>
                <p className="text-gray-600">Langage Support</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">10K+</p>
                <p className="text-gray-600">Developers</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <p className="font-semibold">100K+</p>
                <p className="text-gray-600">Hours Saved</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-[15rem] relative top-[-2rem] left-[6rem] shadow-xl p-5 rounded-2xl flex flex-col gap-2 mt-4 border-[1px] border-[#f3f2f2]">
          <div className="flex flex-row items-center justify-between">
            <img src="/signin.png" alt="Sign in icon" />
            <div className="flex flex-col items-start justify-center">
              <div className="flex flex-row items-center text-[#0049c6] justify-center">
                <img src="./arrow.png" alt="Arrow up" />
                <p>14%</p>
              </div>
              <p className="text-gray-600 text-sm pl-2">This week</p>
            </div>
          </div>
          <p>Issues Fixed</p>
          <p className="text-3xl font-semibold">500K+</p>
        </div>
        <img
          src="/logo.png"
          alt="Background decoration"
          className="hidden md:block absolute bottom-0 left-0"
        />
      </div>

      {/* Right Panel - Auth Options */}
      <div className="flex flex-col items-center justify-center h-[100vh] gap-2 md:w-[50%] w-full">
        <div className="bg-white h-[32rem] md:h-[35rem] rounded-md flex flex-col items-center w-[22rem] md:w-max pt-4 gap-5 border-[1px] border-[#f3f2f2]">
          <div className="flex flex-row items-center justify-center font-[inter] text-3xl font-light gap-2">
            <img src="/Group 37110.png" alt="CodeAnt Logo" />
            <p>CodeAnt AI</p>
          </div>
          <h1 className="font-semibold text-3xl">Welcome to CodeAnt AI</h1>

          {/* Tabs */}
          <div className="flex flex-row gap-2 items-center md:p-4">
            <button
              onClick={() => setActiveTab("saas")}
              className={`text-center text-2xl p-2 w-[10rem] md:w-[15rem] rounded-md ${
                activeTab === "saas"
                  ? "bg-[#1470ef] text-white"
                  : "bg-[#fafafa] text-black"
              }`}
            >
              SAAS
            </button>
            <button
              onClick={() => setActiveTab("self-hosted")}
              className={`text-center text-2xl p-2 w-[10rem] md:w-[15rem] rounded-md ${
                activeTab === "self-hosted"
                  ? "bg-[#1470ef] text-white"
                  : "bg-[#fafafa] text-black"
              }`}
            >
              Self Hosted
            </button>
          </div>

          <hr className="h-[1px] w-full bg-[#f3f2f2]" />

          {/* Auth Options */}
          <div className="flex flex-col items-center w-full gap-5 md:pl-4 md:pr-4 md:pb-4">
            {authOptions[activeTab].map((option, index) => (
              <Link
                key={index}
                to="/"
                className="flex flex-row justify-center items-center font-semibold border-[1px] w-[20rem] md:w-[25rem] border-[#e5e4e4] gap-4 p-2 rounded-lg cursor-pointer"
              >
                <img src={option.img} alt={`${option.text} icon`} />
                <p>{option.text}</p>
              </Link>
            ))}
          </div>
        </div>
        <p>
          By signing up you agree to the{" "}
          <span className="font-semibold">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
}
