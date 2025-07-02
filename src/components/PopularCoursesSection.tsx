import React from 'react';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PopularCoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Figma UI UX Design..',
      category: 'Trading',
      description: 'The course dustectibus es explicabo tending content, and insights.',
      duration: '8hr 15 min',
      rating: 4.3,
      reviews: 16325,
      price: '$17.84',
      instructor: 'Jane Cooper',
      enrollmentYear: '2021 Enrolled',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Figma', 'UI', 'UX']
    },
    {
      id: 2,
      title: 'Learn With Joen',
      category: 'Trading',
      description: 'The Instructor consequat knowledge, expert instructing and learning',
      duration: '8hr 5 min',
      rating: 3.9,
      reviews: 9635,
      price: '$8.99',
      instructor: 'Jenny Wilson',
      enrollmentYear: '2021 Enrolled',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Trading', 'Finance']
    },
    {
      id: 3,
      title: 'Building User Interface..',
      category: 'Trading',
      description: 'Proficiently templating practice trading strategies, learned a lot sit.',
      duration: '8hr 20 min',
      rating: 4.2,
      reviews: 12477,
      price: '$11.70',
      instructor: 'Esther Howard',
      enrollmentYear: '2021 Enrolled',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Interface', 'Design']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-pink-600 font-semibold mb-2">Explore Programs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Most Popular Class
          </h2>
          <p className="text-gray-600">
            Let's join our famous class, the knowledge provided will definitely be useful for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
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
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gray-600" />
                  <span className="text-xs font-medium text-gray-700">{course.duration}</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-pink-600">{course.category}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-pink-600 transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">({course.reviews.toLocaleString()})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {course.instructor.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{course.instructor}</div>
                      <div className="text-xs text-gray-500">{course.enrollmentYear}</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-pink-600">{course.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
          >
            Explore All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;