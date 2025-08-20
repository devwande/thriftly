import { useEffect, useState } from "react"

interface PotsData {
    pots: Array<{
    name: string
    target: number
    total: number
    theme: string
  }>
}

const PotsSection = () => {
  const [data, setData] = useState<PotsData | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json: PotsData) => setData(json))
      .catch(console.error);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }
  return (
    <div className="w-full p-4 bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Pots</h2>
        <a href="/pots" className="flex items-center text-sm text-gray-500">See Details  
          <img src={"/assets/icons/ArrowRight.svg"} alt='right-arrow' className="ml-3" /> 
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="mt-4 p-4 bg-[#F8F4F0] rounded-lg flex w-3/4">
          <div className="flex items-center">
            <div className="flex justify-start items-center">
              <img src={"/assets/icons/money.svg"} alt="Money icon" />
            </div>
            <div className="ml-4 space-y-3">
              <p className="text-sm text-gray-500">Total Saved</p>
              <p className="text-2xl font-bold">${data.pots.reduce((sum, pot) => sum + pot.total, 0).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {data.pots.slice(0, 4).map((pot, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-1 h-10 rounded-md flex-shrink-0" style={{ backgroundColor: pot.theme }} />
              <div className="min-w-0">
                <p className="text-sm text-gray-500 truncate">{pot.name}</p>
                <p className="text-sm font-medium">${pot.total}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotsSection;
