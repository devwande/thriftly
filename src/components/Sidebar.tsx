import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {

  const navigate = useNavigate();
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    
        <div className={`relative hidden lg:block bg-black h-screen ${isMinimized ? 'w-28' : 'w-full'} rounded-r-xl text-gray-300 p-8 space-y-48 transition-width duration-300`}>
            <div className="">
              {!isMinimized ? <p className=" text-white text-4xl font-bold ">thriftly</p> : <p className=" text-white text-4xl font-bold ">t</p>}
            </div>

            <div className=" flex flex-col text-sm space-y-12 mr-20">
              <button onClick={() => navigate('/overview')} className='flex items-center gap-5 hover:text-white'>
                <img src={"src/assets/icons/Overview.svg"} alt="overview-icon" />
                {!isMinimized ? <p className="font-bold">Overview</p> : ""}
              </button>

              <button onClick={() => navigate('/transaction')} className="flex items-center gap-5 hover:text-white">
                <img src={"src/assets/icons/Transactions.svg"} alt="transaction-icon"  />
                {!isMinimized ? <p className="font-bold">Transactions</p> : ""}
              </button>

              <button onClick={() => navigate('/budget')} className="flex items-center hover:text-white gap-5" >
                <img src={"src/assets/icons/Budget.svg"} alt="budget-icon"  />
                {!isMinimized ? <p className="font-bold">Budget</p> : ""}
              </button>

              <button onClick={() => navigate('/pot')} className="flex items-center gap-5 hover:text-white">
                <img src={"src/assets/icons/Pot.svg"} alt="Pot-icon"  />
                {!isMinimized ? <p className="font-bold">Pot</p> : ""}
              </button>

              <button onClick={() => navigate('/bill')} className="flex items-center whitespace-nowrap gap-5 hover:text-white">
                <img src={"src/assets/icons/Bill.svg"} alt="Bill-icon" />
                {!isMinimized ? <p className="font-bold">Recurring Bills</p> : ""}
              </button>
            </div>
            
            <div className="">
              <button onClick={toggleSidebar} className="flex items-center text-sm whitespace-nowrap gap-5 hover:text-white">
                  <img src={isMinimized ? "src/assets/icons/Maximise.svg" : "src/assets/icons/Minimise.svg"} alt="toggle-icon"  />
                  {isMinimized ? <p></p> : <p className="font-bold">Minimize Menu</p>}
              </button>
            </div>
        </div>

  )
}

export default  Sidebar