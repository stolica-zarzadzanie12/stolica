import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'Wszystkie' },
    { id: 'commercial', name: 'Komercyjne' },
    { id: 'residential', name: 'Mieszkaniowe' },
    { id: 'office', name: 'Biurowe' },
  ];

  const properties = [
    {
      id: 1,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Centrum Handlowe Aurora',
      location: 'Warszawa, Śródmieście',
    },
    {
      id: 2,
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Apartamenty Park Lane',
      location: 'Warszawa, Mokotów',
    },
    {
      id: 3,
      category: 'office',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Business Tower',
      location: 'Warszawa, Wola',
    },
    {
      id: 4,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Galeria Centrum',
      location: 'Warszawa, Praga',
    },
    {
      id: 5,
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1580216316771-b12aa49e461a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Rezydencja Królewska',
      location: 'Warszawa, Wilanów',
    },
    {
      id: 6,
      category: 'office',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Office Park',
      location: 'Warszawa, Służewiec',
    },
  ];

  const filteredProperties =
    activeFilter === 'all'
      ? properties
      : properties.filter((property) => property.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio Nieruchomości</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Zobacz wybrane nieruchomości z naszego portfolio, którymi zarządzamy
            z sukcesem
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#DAA520] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">
                      {property.title}
                    </h3>
                    <p>{property.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;