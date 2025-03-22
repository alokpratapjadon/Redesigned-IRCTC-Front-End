import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, Menu, X, Bell, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type NavLink = {
  to: string;
  icon: JSX.Element;
  label: string;
};

const navLinks: NavLink[] = [
  {
    to: '/pnr-status',
    icon: <FileText className="w-5 h-5 mr-2" />,
    label: 'PNR STATUS'
  },
  {
    to: '/charts',
    icon: <Search className="w-5 h-5 mr-2" />,
    label: 'CHARTS / VACANCY'
  }
];

const NavLink: React.FC<NavLink & { onClick?: () => void }> = ({ to, icon, label, onClick }) => (
  <Link
    to={to}
    className="flex items-center hover:text-blue-200 transition-colors duration-300 ease-in-out"
    onClick={onClick}
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center"
    >
      {icon}
      {label}
    </motion.div>
  </Link>
);

const UserActions: React.FC = () => (
  <>
    <Link to="/notifications" className="hover:text-blue-200 transition-colors duration-300">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Bell className="w-5 h-5" />
      </motion.div>
    </Link>
    <Link to="/profile" className="hover:text-blue-200 transition-colors duration-300">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <User className="w-5 h-5" />
      </motion.div>
    </Link>
  </>
);

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden bg-[#1a3160] border-t border-blue-800"
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink key={link.to} {...link} onClick={onClose} />
          ))}
          <div className="flex space-x-6 pt-4 border-t border-blue-800">
            <UserActions />
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#213d77] text-white sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors duration-300">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                INDIAN RAILWAYS
              </motion.div>
            </Link>
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <NavLink key={link.to} {...link} />
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <UserActions />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-[#f3f3f3] py-2"
      >
        <div className="container mx-auto px-4">
          <p className="text-[#213d77] text-sm font-medium">Safety | Security | Punctuality</p>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;