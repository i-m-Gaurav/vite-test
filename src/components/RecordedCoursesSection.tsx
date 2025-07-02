import React from 'react';
import { Play, Clock, Star, Users, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecordedCoursesSection = () => {
  const recordedCourses = [
  {
    id: 4,
    title: 'Backtesting Using Python',
    description:
      'Learn how to simulate and validate trading strategies using real historical data. From loading data to evaluating performance, master the core skills to build your own backtester in Python.',
    duration: '10 hr 25 mins',
    lessons: 38,
    rating: 4.7,
    reviews: 1250,
    students: 2150,
    price: '₹29,999',
    originalPrice: '₹39,999',
    level: 'Intermediate',
    thumbnail: 'https://images.pexels.com/photos/6693652/pexels-photo-6693652.jpeg?auto=compress&cs=tinysrgb&w=600',
    topics: ['Python', 'Backtesting', 'Strategy Evaluation', 'Historical Data'],
    instructor: 'Aseem Singhal',
    lastUpdated: 'March 2025'
  },
  {
    id: 5,
    title: 'Basics of Options',
    description:
      'A beginner-friendly introduction to call & put options, option greeks, and payoff structures. Understand the logic behind option pricing and strategies with practical Indian market examples.',
    duration: '4 hr 10 mins',
    lessons: 22,
    rating: 4.5,
    reviews: 2480,
    students: 3200,
    price: '₹3,999',
    originalPrice: '₹5,499',
    level: 'Beginner',
    thumbnail: 'https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=600',
    topics: ['Options', 'Greeks', 'Payoff Diagrams', 'Indian Markets'],
    instructor: 'Aseem Singhal',
    lastUpdated: 'February 2025'
  },
  {
    id: 6,
    title: 'Basics of Stock Market',
    description:
      'Demystify how the stock market works—from IPOs to indices and beyond. Ideal for beginners, this course simplifies concepts like equity, demat, brokers, and market behavior in the Indian context.',
    duration: '11 hr 25 mins',
    lessons: 30,
    rating: 4.6,
    students: 3115,
    price: '₹2,999',
    originalPrice: '₹4,499',
    level: 'Beginner',
      thumbnail: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600',
    topics: ['Stock Market', 'IPO', 'Demat', 'Equity', 'India Market'],
    instructor: 'Aseem Singhal',
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
            Our Hero Programs – RECORDED SESSIONS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of learners mastering algorithmic trading with real-world, hands-on experience.
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
                    <Star className="w-4 h-4 text-yellow-400 fill-current mb-[2px]" />
                    <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                    <span className="text-sm text-gray-600">({course.reviews})</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{course.students.toLocaleString()}+ students</span>
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