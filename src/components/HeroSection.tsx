import React from 'react';
import { Play, TrendingUp, Users, BookOpen } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: BookOpen, value: '5K+', label: 'Online Courses' },
    { icon: Play, value: '2K+', label: 'Video Courses' },
    { icon: Users, value: '250+', label: 'Tutors' }
  ];

  const features = [
    { icon: '🎤', label: 'Public Speaking' },
    { icon: '💼', label: 'Career-Oriented' },
    { icon: '💡', label: 'Creative Thinking' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-yellow-200 rounded-full opacity-15"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-pink-300 rounded-full opacity-25"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Helping <span className="text-pink-600">You</span>
                <br />
                <span className="text-pink-600">Automate</span> Trading
                <br />
                With <span className="text-pink-600">Confidence</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg">
                Provides you with the latest online learning system and material 
                that help your knowledge growing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                About My Education
              </button>
              <button className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 font-semibold text-lg">
                Learn My Trading System
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-gray-700 font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image & Stats */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-pink-400 to-purple-600 rounded-[3rem] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Student learning"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stats Cards */}
              {stats.map((stat, index) => {
                const positions = [
                  'top-4 right-4',
                  'top-1/2 -left-4 transform -translate-y-1/2',
                  'bottom-4 right-8'
                ];
                
                return (
                  <div
                    key={index}
                    className={`absolute ${positions[index]} bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-float`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Collaboration Badge */}
            <div className="absolute -bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-3xl font-bold text-pink-600 mb-1">250+</div>
              <div className="text-gray-600 font-medium">Collaboration</div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-center gap-8 lg:gap-12 opacity-60 grayscale">
            {['duolingo', 'codecov', 'usertesting', 'magic leap'].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 capitalize">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;