import React, { useState, useEffect } from 'react';
import { Search, Filter, Clock, Star, Users, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['All', 'Trading', 'Technical Analysis', 'Risk Management', 'Python Programming', 'Algorithms'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const types = ['All', 'Live', 'Recorded', 'Workshop'];

  const courses = [
    {
      id: 1,
      title: 'Complete Algorithmic Trading Masterclass',
      description: 'Master algorithmic trading with Python, build trading bots, and learn advanced risk management strategies.',
      category: 'Trading',
      level: 'Intermediate',
      type: 'Recorded',
      duration: '12hrs 30min',
      lessons: 45,
      rating: 4.8,
      students: 3420,
      price: 89.99,
      originalPrice: 149.99,
      instructor: 'Aseem Singhal',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'APIs', 'Backtesting', 'Live Trading'],
      isNew: true,
      isPopular: true
    },
    {
      id: 2,
      title: 'Technical Analysis Fundamentals',
      description: 'Learn to read charts, identify patterns, and make informed trading decisions using technical indicators.',
      category: 'Technical Analysis',
      level: 'Beginner',
      type: 'Live',
      duration: '8hrs 45min',
      lessons: 32,
      rating: 4.6,
      students: 5680,
      price: 59.99,
      originalPrice: 99.99,
      instructor: 'Aseem Singhal',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Charts', 'Indicators', 'Patterns', 'Market Analysis'],
      isNew: false,
      isPopular: true
    },
    {
      id: 3,
      title: 'Advanced Options Trading Strategies',
      description: 'Dive deep into sophisticated options strategies, Greeks, volatility trading, and portfolio hedging.',
      category: 'Trading',
      level: 'Advanced',
      type: 'Recorded',
      duration: '15hrs 20min',
      lessons: 58,
      rating: 4.9,
      students: 2140,
      price: 129.99,
      originalPrice: 199.99,
      instructor: 'Aseem Singhal',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Options', 'Greeks', 'Volatility', 'Hedging'],
      isNew: false,
      isPopular: false
    },
    {
      id: 4,
      title: 'Risk Management for Traders',
      description: 'Essential risk management techniques every trader must know to protect capital and maximize returns.',
      category: 'Risk Management',
      level: 'Intermediate',
      type: 'Workshop',
      duration: '6hrs',
      lessons: 24,
      rating: 4.7,
      students: 4230,
      price: 49.99,
      originalPrice: null,
      instructor: 'Aseem Singhal',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Risk Assessment', 'Position Sizing', 'Stop Loss', 'Portfolio Management'],
      isNew: true,
      isPopular: false
    },
    {
      id: 5,
      title: 'Python for Financial Analysis',
      description: 'Learn Python programming specifically for financial data analysis and trading applications.',
      category: 'Python Programming',
      level: 'Beginner',
      type: 'Recorded',
      duration: '10hrs 15min',
      lessons: 38,
      rating: 4.5,
      students: 6750,
      price: 69.99,
      originalPrice: 119.99,
      instructor: 'Aseem Singhal',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
      isNew: false,
      isPopular: true
    },
    {
      id: 6,
      title: 'Cryptocurrency Trading Bootcamp',
      description: 'Complete guide to cryptocurrency trading, DeFi, and blockchain technology for modern traders.',
      category: 'Trading',
      level: 'Intermediate',
      type: 'Live',
      duration: '9hrs 30min',
      lessons: 36,
      rating: 4.4,
      students: 3890,
      price: 79.99,
      originalPrice: 129.99,
      instructor: 'Aseem Singhal',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Crypto', 'DeFi', 'Blockchain', 'Alt Trading'],
      isNew: true,
      isPopular: false
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesType = selectedType === 'All' || course.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesType;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.students - a.students;
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.isNew ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Courses
          </h1>
          <p className="text-gray-600">
            Discover our comprehensive collection of trading and finance courses designed to elevate your skills.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-500 transition-colors"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-500 transition-colors"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-500 transition-colors"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-500 transition-colors"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {sortedCourses.length} of {courses.length} courses
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="w-4 h-4" />
            Active filters: {[selectedCategory, selectedLevel, selectedType].filter(f => f !== 'All').length}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCourses.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Overlay with Play Button */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-0 group-hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300">
                    <Play className="w-8 h-8 text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1" />
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    course.type === 'Live' ? 'bg-red-500 text-white' :
                    course.type === 'Recorded' ? 'bg-blue-500 text-white' :
                    'bg-green-500 text-white'
                  }`}>
                    {course.type}
                  </span>
                  <span className="bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {course.level}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex flex-col gap-1">
                  {course.isNew && (
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                  {course.isPopular && (
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      POPULAR
                    </span>
                  )}
                  {course.originalPrice && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gray-600" />
                  <span className="text-xs font-medium text-gray-700">{course.duration}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-pink-600">{course.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students.toLocaleString()}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-pink-600">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">by {course.instructor}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or browse all courses.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedLevel('All');
                setSelectedType('All');
              }}
              className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;