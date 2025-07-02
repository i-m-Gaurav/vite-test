import React from 'react';
import { Star, TrendingUp, Users, Shield, Award } from 'lucide-react';

const RatingsPage = () => {
  const platforms = [
    {
      name: 'Groww',
      description: "India's Leading Investment Platform",
      logo: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.8,
      users: '2M+'
    },
    {
      name: 'Fyers',
      description: 'Advanced Trading Platform',
      logo: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.7,
      users: '500K+'
    },
    {
      name: 'Delta Exchange',
      description: 'Crypto Derivatives Platform',
      logo: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.6,
      users: '300K+'
    },
    {
      name: 'Zerodha',
      description: "India's Largest Broker",
      logo: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.9,
      users: '6M+'
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: '6+',
      label: 'Trading Platforms',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Happy Students',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Shield,
      value: '99%',
      label: 'Success Rate',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Trading Platforms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I work closely with India's top brokers and platforms to bring you the 
            most effective trading strategies and tools.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-bold text-gray-900">{platform.rating}</span>
                </div>
                <span className="text-sm font-medium text-gray-600">{platform.users} users</span>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mb-16">
          <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition-colors">
            See all
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Trading Platforms Trust Me
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My proven track record and expertise in algorithmic trading have earned 
              the trust of leading platforms and thousands of successful traders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Proven Expertise</h3>
              <p className="text-gray-600 text-sm">
                15+ years of experience in algorithmic trading and AI research
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Student Success</h3>
              <p className="text-gray-600 text-sm">
                Over 10,000 students successfully trading with my strategies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Consistent Results</h3>
              <p className="text-gray-600 text-sm">
                99% success rate in strategy implementation and execution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsPage;