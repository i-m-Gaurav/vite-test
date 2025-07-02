import React from 'react';
import { Play, Clock, Star, Users, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecordedCoursesSection = () => {
  const recordedCourses = [
    {
      id: 4,
      title: 'Complete Algorithmic Trading Masterclass',
      description: 'Master the fundamentals of algorithmic trading with Python, build your own trading bots, and learn risk management strategies.',
      duration: '12hrs 30min',
      lessons: 45,
      rating: 4.8,
      students: 3420,
      price: '$89.99',
      originalPrice: '$149.99',
      level: 'Intermediate',
      thumbnail: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: ['Python', 'Trading Algorithms', 'Risk Management', 'Backtesting'],
      instructor: 'Joen Callion',
      lastUpdated: 'December 2024'
    },
    {
      id: 5,
      title: 'Technical Analysis for Beginners',
      description: 'Learn to read charts, identify patterns, and make informed trading decisions using technical analysis tools and indicators.',
      duration: '8hrs 45min',
      lessons: 32,
      rating: 4.6,
      students: 5680,
      price: '$59.99',
      originalPrice: '$99.99',
      level: 'Beginner',
      thumbnail: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: ['Chart Analysis', 'Technical Indicators', 'Pattern Recognition', 'Market Psychology'],
      instructor: 'Joen Callion',
      lastUpdated: 'November 2024'
    },
    {
      id: 6,
      title: 'Advanced Options Trading Strategies',
      description: 'Dive deep into sophisticated options strategies, Greeks, volatility trading, and portfolio hedging techniques.',
      duration: '15hrs 20min',
      lessons: 58,
      rating: 4.9,
      students: 2140,
      price: '$129.99',
      originalPrice: '$199.99',
      level: 'Advanced',
      thumbnail: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: ['Options Greeks', 'Volatility Trading', 'Portfolio Hedging', 'Complex Strategies'],
      instructor: 'Joen Callion',
      lastUpdated: 'January 2025'
    }
  ];

  const features = [
    { icon: Play, text: 'On-demand video content' },
    { icon: Download, text: 'Downloadable resources' },
    { icon: Users, text: 'Community access' },
    { icon: Clock, text: 'Lifetime access' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-pink-600 font-semibold mb-2">Self-Paced Learning</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Recorded Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access comprehensive trading education at your own pace. Each course includes video lessons, 
            practical exercises, and lifetime access to updates.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <feature.icon className="w-6 h-6 text-pink-600" />
              </div>
              <p className="text-sm font-medium text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {recordedCourses.map((course, index) => (
            <div
              key={course.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 ${
                index === 1 ? 'lg:scale-110 lg:z-10 ring-2 ring-pink-200' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-pink-600 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {course.level}
                </div>
                {course.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {Math.round((1 - parseFloat(course.price.slice(1)) / parseFloat(course.originalPrice.slice(1))) * 100)}% OFF
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    {course.lessons} lessons
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{course.students.toLocaleString()} students</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.topics.slice(0, 3).map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-pink-600">{course.price}</span>
                      {course.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{course.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">Updated {course.lastUpdated}</p>
                  </div>
                </div>

                <Link
                  to={`/course/${course.id}`}
                  className="w-full bg-pink-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-pink-700 transition-colors text-center block"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/courses?type=recorded"
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            View All Recorded Courses
            <Play className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecordedCoursesSection;