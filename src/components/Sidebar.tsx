import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  icon: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: "src/assets/icons/Overview.svg", label: 'Overview', href: '/overview' },
  { icon: "src/assets/icons/Transactions.svg", label: 'Transactions', href: '/transaction' },
  { icon: "src/assets/icons/Budget.svg", label: 'Budgets', href: '/budget' },
  { icon: "src/assets/icons/Pot.svg", label: 'Pots', href: '/pot' },
  { icon: "src/assets/icons/Bill.svg", label: 'Recurring Bills', href: '/bill' },
];

const Sidebar = () => {
  const location = useLocation();
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`${isMinimized ? 'w-28' : 'w-64'} bg-black rounded-r-xl min-h-screen flex flex-col text-gray-300 transition-width duration-300`}>
      <div className="mb-8 p-6">
        {!isMinimized ? <p className="text-white text-4xl font-bold">thriftly</p> : <p className="text-white text-4xl font-bold ">t</p>}
      </div>

      <nav className="flex-1 space-y-2 pr-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`flex items-center gap-5 px-6 py-3 whitespace-nowrap rounded-r-lg font-bold ${
              !isMinimized && location.pathname === item.href ? 'bg-[#F8F4F0] text-black' : 'hover:text-white'
            }`}
          >
            <img src={item.icon} alt={`${item.label} icon`} />
            {!isMinimized && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      <button
        onClick={toggleSidebar}
        className="flex items-center space-x-3 px-4 py-3 text-sm whitespace-nowrap hover:text-white"
      >
        <img
          src={isMinimized ? "src/assets/icons/Maximise.svg" : "src/assets/icons/Minimise.svg"}
          alt="toggle icon"
          className="p-6 transition-all"
        />
        {!isMinimized && <p className="font-bold whitespace-nowrap">Minimize Menu</p>}
      </button>
    </div>
  );
};

export default Sidebar;
