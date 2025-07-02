import React from 'react';
import { TrendingUp, BookOpen, Wrench } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Learn Algo Trading',
      description: 'Master the skills to design, test, and deploy algorithmic trading strategies.',
      buttonText: 'Learn More',
      bgColor: 'bg-pink-600',
      textColor: 'text-white'
    },
    {
      icon: BookOpen,
      title: 'Explore My Books',
      description: 'Dive into actionable guides on smart market strategies.',
      buttonText: 'Learn More',
      bgColor: 'bg-blue-50',
      textColor: 'text-gray-900'
    },
    {
      icon: Wrench,
      title: 'Try My Tools',
      description: 'Access cutting-edge backtesting tools on the Unfluke platform - powered by AI, built for traders.',
      buttonText: 'Learn More',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-900'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-pink-600 font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fostering a practical & engaging learning experience
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-3xl p-8 ${service.textColor} transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="mb-6">
                <div className={`w-12 h-12 ${
                  service.bgColor === 'bg-pink-600' ? 'bg-white bg-opacity-20' : 'bg-pink-100'
                } rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${
                    service.bgColor === 'bg-pink-600' ? 'text-white' : 'text-pink-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={`${
                  service.bgColor === 'bg-pink-600' ? 'text-pink-100' : 'text-gray-600'
                } leading-relaxed`}>
                  {service.description}
                </p>
              </div>
              <button className={`font-semibold flex items-center gap-2 ${
                service.bgColor === 'bg-pink-600' ? 'text-white hover:text-pink-100' : 'text-pink-600 hover:text-pink-700'
              } transition-colors`}>
                {service.buttonText}
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

