const PotsSection = () => {
  return (
    <div className="w-full p-4 bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Pots</h2>
        <button className="flex items-center text-sm text-gray-500 hover:underline">See Details  
          <img src={"src/assets/icons/ArrowRight.svg"} alt='right-arrow' className="ml-3" /> 
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="mt-4 p-4 bg-[#F8F4F0] rounded-lg flex w-3/4">
          <div className="flex items-center">
            <div className="flex justify-start items-center">
              <img src={"src/assets/icons/money.svg"} alt="" />
            </div>
            <div className="ml-4 space-y-3">
              <p className="text-sm text-gray-500">Total Saved</p>
              <p className="text-2xl font-bold">$850</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-4 gap-4">
          <div className="flex items-center">
            <div className="w-1 h-10 rounded-md bg-teal-600 mr-5"></div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Savings</p>
              <p className="text-sm font-medium">$159</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-10 rounded-md bg-blue-400 mr-5"></div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Gift</p>
              <p className="text-sm font-medium">$40</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-10 rounded-md bg-gray-600 mr-5"></div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Concert Ticket</p>
              <p className="text-sm font-medium">$110</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-10 rounded-md bg-orange-300 mr-5"></div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">New Laptop</p>
              <p className="text-sm font-medium">$10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotsSection;
