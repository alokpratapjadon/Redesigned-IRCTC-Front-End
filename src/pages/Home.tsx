import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Train, ArrowRightLeft, Users, Search, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

type TravelClass = {
  value: string;
  label: string;
};

const travelClasses: TravelClass[] = [
  { value: '', label: 'All Classes' },
  { value: '1A', label: 'First AC (1A)' },
  { value: '2A', label: 'Second AC (2A)' },
  { value: '3A', label: 'Third AC (3A)' },
  { value: 'SL', label: 'Sleeper (SL)' }
];

const InputField: React.FC<{
  label: string;
  icon?: JSX.Element;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}> = ({ label, icon, value, onChange, type = 'text', placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <input
        type={type}
        className={`w-full p-3 border-2 border-gray-200 rounded-lg ${
          icon ? 'pl-12' : ''
        } focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {icon && <div className="absolute left-4 top-3.5">{icon}</div>}
    </div>
  </div>
);

const SelectField: React.FC<{
  label: string;
  icon?: JSX.Element;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}> = ({ label, icon, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <select
        className={`w-full p-3 border-2 border-gray-200 rounded-lg ${
          icon ? 'pl-12' : ''
        } focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {icon && <div className="absolute left-4 top-3.5">{icon}</div>}
    </div>
  </div>
);

const ActionButton: React.FC<{
  to: string;
  variant: 'primary' | 'secondary';
  icon?: JSX.Element;
  children: React.ReactNode;
}> = ({ to, variant, icon, children }) => (
  <Link to={to} className="flex-1">
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold shadow-lg transition-all ${
        variant === 'primary'
          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
          : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
      }`}
    >
      {icon}
      {children}
    </motion.div>
  </Link>
);

const Home: React.FC = () => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [date, setDate] = useState('');
  const [travelClass, setTravelClass] = useState('');
  const [passengers, setPassengers] = useState('1');

  const handleSwapStations = () => {
    setFromStation(toStation);
    setToStation(fromStation);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-[#213d77] p-6"
            >
              <h1 className="text-3xl font-bold text-white">Book Your Journey</h1>
              <p className="text-blue-200 mt-2">Search trains and book tickets with ease</p>
            </motion.div>

            <div className="p-8">
              <div className="space-y-6">
                <div className="relative flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1 w-full">
                    <InputField
                      label="From"
                      icon={<Train className="h-5 w-5 text-gray-400" />}
                      value={fromStation}
                      onChange={setFromStation}
                      placeholder="Enter city or station"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSwapStations}
                    className="absolute top-8 left-1/2 -translate-x-1/2 md:static md:transform-none bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <ArrowRightLeft className="w-6 h-6 text-blue-600" />
                  </motion.button>

                  <div className="flex-1 w-full">
                    <InputField
                      label="To"
                      icon={<Train className="h-5 w-5 text-gray-400" />}
                      value={toStation}
                      onChange={setToStation}
                      placeholder="Enter city or station"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <InputField
                    label="Journey Date"
                    icon={<Calendar className="h-5 w-5 text-gray-400" />}
                    value={date}
                    onChange={setDate}
                    type="date"
                  />

                  <SelectField
                    label="Travel Class"
                    value={travelClass}
                    onChange={setTravelClass}
                    options={travelClasses}
                  />

                  <SelectField
                    label="Passengers"
                    icon={<Users className="h-5 w-5 text-gray-400" />}
                    value={passengers}
                    onChange={setPassengers}
                    options={Array.from({ length: 6 }, (_, i) => ({
                      value: String(i + 1),
                      label: `${i + 1} Passenger${i > 0 ? 's' : ''}`
                    }))}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <ActionButton
                    to="/search"
                    variant="primary"
                    icon={<Search className="w-5 h-5" />}
                  >
                    Search Trains
                  </ActionButton>
                  <ActionButton
                    to="/disha"
                    variant="secondary"
                    icon={<MessageSquare className="w-5 h-5" />}
                  >
                    Ask DISHA AI
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>

          <Link to="/offers">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 bg-blue-50 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Flexible with dates?</h3>
                  <p className="text-gray-600">Check our special discounts for different days</p>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;