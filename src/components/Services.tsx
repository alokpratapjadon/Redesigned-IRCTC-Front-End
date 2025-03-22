import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Hotel, LineChart, UtensilsCrossed, Bus, Umbrella, Train, Mountain, Ship, Image } from 'lucide-react';
import { motion } from 'framer-motion';

type Service = {
  icon: JSX.Element;
  name: string;
  color: string;
  to: string;
}

const services: Service[] = [
  { icon: <Plane className="w-8 h-8" />, name: 'FLIGHTS', color: 'bg-blue-500', to: 'https://www.air.irctc.co.in/' },
  { icon: <Hotel className="w-8 h-8" />, name: 'HOTELS', color: 'bg-green-500', to: 'https://www.hotels.irctc.co.in/' },
  { icon: <LineChart className="w-8 h-8" />, name: 'RAIL DRISHTI', color: 'bg-purple-500', to: 'https://raildrishti.indianrailways.gov.in/raildrishti/raildrishtiv3/' },
  { icon: <UtensilsCrossed className="w-8 h-8" />, name: 'E-CATERING', color: 'bg-orange-500', to: 'https://www.ecatering.irctc.co.in/' },
  { icon: <Bus className="w-8 h-8" />, name: 'BUS', color: 'bg-red-500', to: 'https://www.bus.irctc.co.in/home' },
  { icon: <Umbrella className="w-8 h-8" />, name: 'HOLIDAY PACKAGES', color: 'bg-yellow-500', to: 'https://www.irctctourism.com/tourpacakage_search?searchKey=&tagType=&travelType=&category=' },
  { icon: <Train className="w-8 h-8" />, name: 'TOURIST TRAIN', color: 'bg-indigo-500', to: 'https://www.irctctourism.com/tourpacakage_search?searchKey=&tagType=&travelType=&category=' },
  { icon: <Mountain className="w-8 h-8" />, name: 'HILL RAILWAYS', color: 'bg-teal-500', to: 'https://www.irctctourism.com/gallery/' },
  { icon: <Ship className="w-8 h-8" />, name: 'CHARTER TRAIN', color: 'bg-pink-500', to: 'https://www.ftr.irctc.co.in/ftr/' },
  { icon: <Image className="w-8 h-8" />, name: 'GALLERY', color: 'bg-cyan-500', to: 'https://www.irctctourism.com/gallery/' }
];

const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <Link to={service.to}>
    <motion.div
      variants={animations.item}
      whileHover={{ y: -5 }}
      className="group cursor-pointer transform transition-all duration-300 hover:shadow-xl rounded-2xl"
    >
      <div className="flex flex-col items-center p-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`${service.color} p-6 rounded-2xl shadow-lg transition-all duration-300`}
        >
          <div className="text-white">{service.icon}</div>
        </motion.div>
        <span className="mt-4 text-sm font-medium text-center group-hover:text-blue-600 transition-colors">
          {service.name}
        </span>
      </div>
    </motion.div>
  </Link>
);

const Services: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find the perfect service for your travel needs
          </p>
        </motion.header>

        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;