import Sidebar from "../components/Sidebar";

const Overview = () => {
  return (
    <div className="flex flex-row relative">
      <Sidebar />
      <p className="font-bold p-8 text-3xl">Overview</p>
      <div className="grid grid-rows-3 pt-20 space-x-10 m-8">
        <div className="bg-black text-white">Current Balance</div>
        <div>Income</div>
        <div>Exepsnses</div>
      </div>
    </div>
  );
};

export default Overview;
