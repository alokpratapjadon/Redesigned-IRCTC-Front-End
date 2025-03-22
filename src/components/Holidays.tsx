import React from 'react';

const holidayPackages = [
  {
    title: "Maharajas' Express",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states."
  },
  {
    title: "International Packages",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc."
  },
  {
    title: "Domestic Air Packages",
    image: "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the scenic splendour of North East."
  }
];

const Holidays = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">HOLIDAYS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {holidayPackages.map((package_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={package_.image} 
                alt={package_.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{package_.title}</h3>
                <p className="text-gray-600 mb-4">{package_.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Holidays;