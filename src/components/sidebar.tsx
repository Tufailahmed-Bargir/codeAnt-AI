import { ReactElement, useState } from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { FaCode as CodeReviewIcon } from "react-icons/fa6";
import { CiCloudOn as CloudSecurityIcon } from "react-icons/ci";
import { LuBookText as HowToUseIcon } from "react-icons/lu";
import { BsGear as SettingsIcon } from "react-icons/bs";
import { LuPhone as ReportIcon } from "react-icons/lu";
import { MdOutlineLogout as LogoutIcon } from "react-icons/md";

const data = [
  {
    img: <HomeIcon />,
    text: "Repositories",
    onClick: "/",
  },
  {
    img: <CodeReviewIcon />,
    text: "AI Code Review",
    onClick: "/ai-code-review",
  },
  {
    img: <CloudSecurityIcon />,
    text: "Cloud Security",
    onClick: "/cloud-security",
  },
  {
    img: <HowToUseIcon />,
    text: "How to use",
    onClick: "/how-to-use",
  },
  {
    img: <SettingsIcon />,
    text: "Settings",
    onClick: "/settings",
  },
];

function Sidebar() {
  const [state, setState] = useState(false);
  return (
    <div
      className={`pl-2 pt-5 z-[999] bg-white flex flex-col border-b-[1px] fixed md:relative
       border-gray-500 md:justify-between md:items-start overflow-hidden transition-all ease-linear duration-200 ${
         state ? "h-[32rem]" : "h-[5rem]"
       } md:h-[100vh] w-full md:w-[18%]`}
    >
      <div className="flex flex-col gap-4 md:gap-8 items-center mr-2 w-full md:hidden">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row items-center justify-center font-[inter] text-3xl font-light gap-2">
            <img src="/Group 37110.png" alt="" />
            <p>CodeAnt AI</p>
          </div>
          <button onClick={() => setState(!state)} className="w-10 h-10">
            <img src={!state ? "/bars.png" : "/close.png"} alt="" />
          </button>
        </div>
        <select className="w-[90%] mt-2 md:w-[12rem] text-xl border-[1px] border-gray-300 rounded-lg p-2">
          <option value="UtkarshDhairy">UtkarshDhairy</option>
          <option value="Tufailahmed">Tufailahmed</option>
          <option value="Mohammed tayeb">Mohammed tayeb</option>
          <option value="Bargir">Bargir</option>
        </select>
        <div className="flex flex-col md:w-max w-full gap-2 mt-8">
          {data.map((item) => (
            <Tab
              img={item.img}
              text={item.text}
              onClick={item.onClick}
              setState={setState}
            />
          ))}
        </div>
      </div>
      <div className="md:flex flex-col gap-8 justify-start mr-2 hidden">
        <div className="flex flex-row items-center justify-center font-[inter] text-3xl font-light gap-2">
          <img src="/Group 37110.png" alt="" />
          <p>CodeAnt AI</p>
        </div>
        <select className="w-[12rem] text-xl border-[1px] border-gray-300 rounded-lg p-2">
          <option value="UtkarshDhairy">UtkarshDhairy</option>
          <option value="Tufailahmed">Tufailahmed</option>
          <option value="MOhammed Tayeb">MOhammed Tayeb</option>
          <option value="Bargir">Bargir</option>
        </select>
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <Tab
              img={item.img}
              text={item.text}
              onClick={item.onClick}
              setState={setState}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-4 mt-2 md:mt-8 ">
        <Tab
          img={<ReportIcon />}
          text="report"
          onClick="/app/report"
          setState={setState}
        />
        <Tab
          img={<LogoutIcon />}
          text="logout"
          onClick="/signin"
          setState={setState}
        />
      </div>
    </div>
  );
}

function Tab({
  img,
  text,
  onClick,
  setState,
}: {
  img: ReactElement;
  text: string;
  onClick: string;
  setState: (state: boolean) => void;
}) {
  return (
    <NavLink
      onClick={() => setState(false)}
      to={onClick}
      className={({ isActive }: { isActive: boolean }) =>
        isActive
          ? `border-0 flex flex-row items-center justify-start pl-5 pr-8
        bg-[#1470ef] text-white
       gap-4 p-2 rounded-lg cursor-pointer`
          : `border-0 flex flex-row items-center justify-start pl-5 pr-8
        bg-white text-black
       gap-4 p-2 rounded-lg cursor-pointer`
      }
    >
      <div className="text-xl">{img}</div>
      <p>{text}</p>
    </NavLink>
  );
}

export default Sidebar;
