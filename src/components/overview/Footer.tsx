import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  path: string;
  icon: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/overview', icon: 'src/assets/icons/Overview.svg', label: 'Overview' },
  { path: '/transaction', icon: 'src/assets/icons/Transactions.svg', label: 'Transactions' },
  { path: '/budget', icon: 'src/assets/icons/Budget.svg', label: 'Budgets' },
  { path: '/pot', icon: 'src/assets/icons/Pot.svg', label: 'Pots' },
  { path: '/bill', icon: 'src/assets/icons/Bill.svg', label: 'Recurring bills' },
];

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation(); // Get the current location to determine the active path

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <footer
      className={`lg:hidden fixed bottom-0 left-0 right-0 bg-zinc-950 transition-transform duration-300 ease-in-out ${
        !isVisible ? 'translate-y-full' : ''
      }`}
    >
      <nav className="mx-auto px-4 max-w-7xl">
        <ul className="flex items-center justify-between py-2">
          {navItems.map((item) => (
            <li key={item.path} className="flex-1">
              <Link
                to={item.path} // Navigate to the specified path
                className={`w-full flex flex-col items-center gap-1 p-2 transition-colors ${
                  location.pathname === item.path
                    ? 'text-zinc-100'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                <img src={item.icon} alt={`${item.label} icon`} className="w-6 h-6" />
                <span className="hidden md:block text-xs font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
