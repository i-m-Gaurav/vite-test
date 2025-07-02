import React from 'react';
import { Award, Briefcase, GraduationCap, TrendingUp, BookOpen} from 'lucide-react';
import { Link } from 'react-router-dom';

const StorySection = () => {

const timeline = [
  {
    year: '2009-11',
    title: 'Quant Analyst – Deutsche Bank, Singapore',
    icon: Briefcase,
    description: 'Worked on global risk and analytics systems; awarded 3 RARE Awards for automation and knowledge innovation.'
  },
  {
    year: '2018-20',
    title: 'Algo Fund Manager – Rain Technologies',
    icon: TrendingUp,
    description: 'Ran a fully automated trading fund focused on intraday and positional strategies across Indian markets.'
  },
  {
    year: '2024-Present',
    title: 'Content Creator – Coursera',
    icon: Award,
    description: 'Developed global finance-tech courses like "Generative AI for Trading" and "Python Automation for Traders."'
  },
  {
    year: '2024-Present',
    title: 'Visiting Faculty – Chitkara University',
    icon: GraduationCap,
    description: 'Delivered the "Introduction to Algorithmic Trading" course, combining hedge fund strategies with real-world case studies.'
  },
  {
    year: '2022-Present',
    title: 'Faculty – The Future University',
    icon: GraduationCap,
    description: 'Taught 3,000+ students Python-based trading automation, backtesting, and risk management through hands-on sessions.'
  },
  {
    year: '2022-Present',
    title: 'Content Creator – Groww',
    icon: Award,
    description: 'Created educational content and live market analysis for Groww’s 75K+ subscriber channel, simplifying equity and options trading.'
  },
  {
    year: '2024-Present',
    title: 'Founder – Unfluke',
    icon: Briefcase,
    description: 'Built an AI-powered platform to backtest, scan, and monetize trading strategies for retail and pro traders.'
  }
];

  const education = [
  {
    degree: 'Executive MBA (Ongoing)',
    institution: 'IIM Kozhikode',
    year: '2023-25',
    description: 'Focused on scaling fintech and behavioral finance.'
  },
  {
    degree: 'MBA (Dean\'s List)',
    institution: 'IE Business School + Kellogg School of Management',
    year: '2012',
    description: 'Double concentration in Finance & Strategy.'
  },
  {
    degree: 'Masters in Financial Engineering',
    institution: 'WorldQuant University',
    year: '2021-23',
    description: 'Specialized in quantitative modeling, risk management, and derivatives.'
  },
  {
    degree: 'PG Diploma in Finance',
    institution: 'BITS Pilani',
    year: '2023-24',
    description: 'Deep dive into valuation, portfolio theory, and corporate finance.'
  },
  {
    degree: 'B.Tech in Computer Engineering',
    institution: 'Nanyang Technological University, Singapore',
    year: '2005-09',
    description: 'Dean’s List; specialized in systems engineering and data analytics.'
  },
  {
    degree: 'Certifications',
    institution: 'NISM, FRM Level 1, Python for Trading',
    year: '—',
    description: 'Validated core expertise in markets, financial risk, and trading automation.'
  }
];


  const achievements = [
    { number: '8+', label: 'Years Experience' },
    { number: '3000+', label: 'Students Taught' },
    { number: '51', label: 'Trading Strategies Authored' },
    { number: '5', label: 'Major Courses Released' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Hello, I'm <span className="text-pink-600">Aseem Singhal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate educator, algo trader, and fintech entrepreneur - on a mission to make algorithmic trading accessible, data-driven, and profitable for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Story and Education */}
          <div className="space-y-12">
            {/* My Story */}
            <div>
              <h3 className="text-2xl font-bold text-pink-600 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  My journey began with a love for data and a curiosity about the markets. From Deutsche Bank to building my own fintech venture, I’ve spent the last 8+ years at the intersection of finance, technology, and education.                </p>
                <p>
                  I founded Unfluke to help retail and professional traders move beyond guesswork and flukes—and instead build strategies backed by real data, backtesting, and community insights. As a mentor to 3000+ students and a contributor to the largest broker in India, my focus is on clarity, practicality, and real-world application.                </p>
                <p>
                  My teaching blends years of industry experience with cutting-edge tools—Python, C++, strategy logic, and AI-powered analytics. I believe learning should be hands-on, not theoretical.                </p>
              </div>
            </div>

            {/* Educational Background */}
            <div>
              <h3 className="text-2xl font-bold text-pink-600 mb-6">Educational Background</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                          <span className="text-sm font-medium text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                            {edu.year}
                          </span>
                        </div>
                        <p className="font-medium text-gray-700 mb-2">{edu.institution}</p>
                        <p className="text-sm text-gray-600">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-pink-600 mb-1">{achievement.number}</div>
                  <div className="text-sm font-medium text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <Link
                to="/courses"
                className="inline-flex items-center bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore My Courses
              </Link>
            </div>
          </div>

          {/* Right Column - Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center lg:text-left">My Experience</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-pink-200"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                      <item.icon className="w-6 h-6 text-pink-600" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                        {item.year === 'Now' && (
                          <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;