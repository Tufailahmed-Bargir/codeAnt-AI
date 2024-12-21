import { data } from "../../lib/data";

function Repositories() {
  return (
    <div className="bg-[#fafafa] w-full md:w-full h-[100vh] md:overflow-scroll">
      <div className="md:ml-[2%] mr-[2%] mt-[2%] rounded-lg flex flex-col gap-1">
        <div className="bg-white pt-5 rounded-md flex flex-col w-full gap-4 md:pl-5 md:pb-5 pl-3 pb-3">
          <Header />
          <input
            type="text"
            placeholder="Search repositories"
            className="bg-white w-[90%] md:w-[30%] p-2 border-[1px] border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          {data.map((item) => (
            <Tab key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Repositories</h1>
        <p className="text-gray-500 mt-5">33 total repositories</p>
      </div>
      <div className="flex flex-row gap-4 text-md">
        <Button imgSrc="/refresh.png" text="Refresh All" />
        <Button
          imgSrc="/plus.png"
          text="Add Repository"
          bgColor="bg-[#1470ef]"
          textColor="text-white"
        />
      </div>
    </div>
  );
}

function Button({
    imgSrc,
    text,
    bgColor = "bg-white",
    textColor = "text-black",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <button
      className={`flex flex-row gap-2 h-max rounded-lg p-2 ${bgColor} ${textColor} items-center justify-start`}
    >
      <img src={imgSrc} alt="" />
      {text}
    </button>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Tab({ name, access, languages, size, updates }: any) {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-white md:p-5 p-3 transition-all ease-linear duration-50 hover:bg-[#f5f5f5]">
      <div className="flex flex-row items-center gap-3">
        <p className="text-[1.2rem]">{name}</p>
        <p className="border-[1.2px] border-[#bcd7fd] text-[.8rem] rounded-2xl px-[10px] bg-[#eff8ff] text-[#5c94e2]">
          {access}
        </p>
      </div>
      <div className="flex flex-row gap-5 md:gap-10">
        <InfoItem
          text={languages}
          icon={<div className="rounded-[5rem] bg-[#1470ef] w-2 h-2"></div>}
        />
        <InfoItem text={size} icon={<img src="/database.png" alt="" />} />
        <p>Updated {updates} days ago</p>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function InfoItem({ text, icon }: any) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <p className="text-gray-500 text-sm">{text}</p>
      {icon}
    </div>
  );
}

export default Repositories;
