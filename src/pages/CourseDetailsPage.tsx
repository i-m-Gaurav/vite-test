import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Play, Clock, Star, Users, Download, CheckCircle, 
  Award, Globe, Smartphone, ArrowLeft, BookOpen,
  Calendar, MessageSquare, Share2, Heart
} from 'lucide-react';

const CourseDetailsPage = () => {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState('overview');
  const [isWishlisted, setIsWishlisted] = useState(false);

const courseData = [
  // Existing merged 9 courses (shown before)...

  {
    id: 1,
    title: 'Groww Algo Mastery',
    description: 'A complete guide to building and deploying algos for Groww’s trading ecosystem.',
    aboutcourse: 'This hands-on course is designed to take you from options trading basics to building powerful strategies using Python. You’ll learn how to backtest trades using free tools, automate both option buying and selling strategies, and apply advanced logic to real market scenarios using indicators and support/resistance levels.',
    category: 'Trading',
    level: 'Intermediate',
    type: 'Live',
    duration: '11 hr 25 mins',
    lessons: 35,
    rating: 4.7,
    students: 180,
    price: 7999,
    reviews: 125,
    originalPrice: null,
    featuresLearn: [
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
    ],
    coursefeatures: [
'Certificate of completion',
'Direct instructor support',
'Lifetime access to all course content',
'Access to private trading community',
'Regular updates with new strategies and content'
    ],
    curriculum: [
      {
        section: 'Introduction to Option Trading',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Python Basics + Login Data', duration: '25:18', preview: false },
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]
      }],
    instructor: {
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Groww', 'Algo Trading', 'Live'],
    isNew: false,
    isPopular: true,
    lastUpdated: 'December 2024',
    certificate: true,
  },
  {
    id: 2,
    title: 'Algo Trading with Python',
    description: 'Master strategy creation, automation using Python, technical indicators, options & API integration.',
    aboutcourse: 'This hands-on course is designed to take you from options trading basics to building powerful strategies using Python. You’ll learn how to backtest trades using free tools, automate both option buying and selling strategies, and apply advanced logic to real market scenarios using indicators and support/resistance levels.',
    category: 'Trading',
    level: 'Advanced',
    type: 'Live',
    duration: '10 hr 2 mins',
    lessons: 40,
    rating: 4.8,
    students: 3500,
    price: 7999,
    reviews: 1325,
    originalPrice: null,
    featuresLearn: [
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
    ],
    coursefeatures: [
'Certificate of completion',
'Direct instructor support',
'Lifetime access to all course content',
'Access to private trading community',
'Regular updates with new strategies and content'
    ],
    curriculum: [
      {
        section: 'Introduction to Option Trading',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Python Basics + Login Data', duration: '25:18', preview: false },
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]
      }],
    instructor: {
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'Automation', 'API'],
    isNew: false,
    isPopular: true,
    lastUpdated: 'December 2024',
    certificate: true,
  },
  {
    id: 3,
    title: 'HFT Trading Using C++',
    description: 'Deep dive into low-latency trading system design using C++.',
    aboutcourse: 'This hands-on course is designed to take you from options trading basics to building powerful strategies using Python. You’ll learn how to backtest trades using free tools, automate both option buying and selling strategies, and apply advanced logic to real market scenarios using indicators and support/resistance levels.',
    category: 'Trading',
    level: 'Advanced',
    type: 'Live',
    duration: '16 hr 3 mins',
    lessons: 50,
    rating: 4.6,
    students: 210,
    price: 49999,
    reviews: 52,
    originalPrice: null,
    featuresLearn: [
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
    ],
    coursefeatures: [
'Certificate of completion',
'Direct instructor support',
'Lifetime access to all course content',
'Access to private trading community',
'Regular updates with new strategies and content'
    ],
    curriculum: [
      {
        section: 'Introduction to Option Trading',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Python Basics + Login Data', duration: '25:18', preview: false },
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]
      }],
    instructor: {
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['HFT', 'C++', 'Low Latency'],
    isNew: false,
    isPopular: false,
    lastUpdated: 'December 2024',
    certificate: true,

  },
  {
    id: 4,
    title: 'Backtesting Using Python',
    description: 'Learn how to simulate and validate trading strategies using real historical data. From loading data to evaluating performance, master the core skills to build your own backtester in Python.',
    aboutcourse: 'This hands-on course is designed to take you from options trading basics to building powerful strategies using Python. You’ll learn how to backtest trades using free tools, automate both option buying and selling strategies, and apply advanced logic to real market scenarios using indicators and support/resistance levels.',
    category: 'Python',
    level: 'Intermediate',
    type: 'Recorded',
    duration: '10 hr 25 mins',
    lessons: 38,
    rating: 4.7,
    students: 2150,
    price: 29999,
    reviews: 1250,
    originalPrice: 39999,
    featuresLearn: [
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
    ],
    coursefeatures: [
'Certificate of completion',
'Direct instructor support',
'Lifetime access to all course content',
'Access to private trading community',
'Regular updates with new strategies and content'
    ],
    curriculum: [
      {
        section: 'Introduction to Option Trading',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Python Basics + Login Data', duration: '25:18', preview: false },
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]
      }],
    instructor: {
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    image: 'https://images.pexels.com/photos/6693652/pexels-photo-6693652.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'Backtesting', 'Strategy Evaluation', 'Historical Data'],
    isNew: false,
    isPopular: false,
    lastUpdated: 'December 2024',
    certificate: true,

  },
  {
    id: 5,
    title: 'Basics of Options',
    description: 'A beginner-friendly introduction to call & put options, option greeks, and payoff structures. Understand the logic behind option pricing and strategies with practical Indian market examples.',
    aboutcourse: 'This hands-on course is designed to take you from options trading basics to building powerful strategies using Python. You’ll learn how to backtest trades using free tools, automate both option buying and selling strategies, and apply advanced logic to real market scenarios using indicators and support/resistance levels.',
    category: 'Options',
    level: 'Beginner',
    type: 'Recorded',
    duration: '4 hr 10 mins',
    lessons: 22,
    rating: 4.5,
    students: 3200,
    price: 3999,
    reviews: 2480,
    originalPrice: 5499,
featuresLearn: [
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
    ],
    coursefeatures: [
'Certificate of completion',
'Direct instructor support',
'Lifetime access to all course content',
'Access to private trading community',
'Regular updates with new strategies and content'
    ],
    curriculum: [
      {
        section: 'Introduction to Option Trading',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Python Basics + Login Data', duration: '25:18', preview: false },
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]
      }],
    instructor: {
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    image: 'https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Options', 'Greeks', 'Payoff Diagrams', 'Indian Markets'],
    isNew: false,
    isPopular: false,
    lastUpdated: 'December 2024',
    certificate: true,
  },
  {
    id: 6,
    title: 'Basics of Stock Market',
    description: 'Demystify how the stock market works—from IPOs to indices and beyond. Ideal for beginners, this course simplifies concepts like equity, demat, brokers, and market behavior in the Indian context.',
    aboutcourse: 'This hands-on course is designed to take you from options trading basics to building powerful strategies using Python. You’ll learn how to backtest trades using free tools, automate both option buying and selling strategies, and apply advanced logic to real market scenarios using indicators and support/resistance levels.',
    category: 'Stock Market',
    level: 'Beginner',
    type: 'Recorded',
    duration: '11 hr 25 mins',
    lessons: 30,
    rating: 4.6,
    students: 3115,
    price: 2999,
    reviews: 2100,
    originalPrice: 4499,
     featuresLearn: [
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
    ],
    coursefeatures: [
'Certificate of completion',
'Direct instructor support',
'Lifetime access to all course content',
'Access to private trading community',
'Regular updates with new strategies and content'
    ],
    curriculum: [
      {
        section: 'Introduction to Option Trading',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Python Basics + Login Data', duration: '25:18', preview: false },
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]

      }],
    instructor:{
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Options', 'Trading Python', 'Backtesting Strategy', 'Automation', 'Risk Management'],
    isNew: false,
    isPopular: false,
    lastUpdated: 'December 2024',
    certificate: true,

  }
];

const courseId = parseInt(id); // convert string to number
const course = courseData.find((c) => c.id === courseId);

if (!course) {
  return <div className="text-center py-20 text-gray-600">Course not found.</div>;
}

  const coursedetail = {
    id: parseInt(id || '1'),
    title: 'Complete Algorithmic Trading Masterclass',
    subtitle: 'Master algorithmic trading with Python, build trading bots, and learn advanced risk management strategies',
    description: 'This comprehensive course will take you from beginner to advanced algorithmic trader. You\'ll learn Python programming for finance, develop your own trading algorithms, implement risk management strategies, and build automated trading systems.',
    instructor: {
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    category: 'Trading',
    level: 'Intermediate',
    type: 'Recorded',
    duration: '12hrs 30min',
    lessons: 45,
    rating: 4.8,
    reviews: 3420,
    students: 8950,
    price: 89.99,
    originalPrice: 149.99,
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
    lastUpdated: 'December 2024',
    language: 'English',
    certificate: true,
    tags: ['Python', 'Trading APIs', 'Backtesting', 'Live Trading', 'Risk Management'],
    features: [
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
    ],
    
    curriculum: [
      {
        section: 'Introduction to Option Trading',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Python Basics + Login Data', duration: '25:18', preview: false },
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]

      },
      {
        section: 'Data Analysis and Visualization',
        lessons: [
          { title: 'Working with Financial Data', duration: '22:10', preview: false },
          { title: 'Technical Indicators in Python', duration: '28:45', preview: false },
          { title: 'Data Visualization Techniques', duration: '19:33', preview: false },
          { title: 'Statistical Analysis', duration: '24:55', preview: false }
        ]
      },
      {
        section: 'Building Trading Strategies',
        lessons: [
          { title: 'Strategy Development Framework', duration: '31:20', preview: false },
          { title: 'Moving Average Strategies', duration: '26:18', preview: false },
          { title: 'Mean Reversion Strategies', duration: '29:44', preview: false },
          { title: 'Momentum Strategies', duration: '27:12', preview: false }
        ]
      },
      {
        section: 'Backtesting and Optimization',
        lessons: [
          { title: 'Backtesting Fundamentals', duration: '23:15', preview: false },
          { title: 'Performance Metrics', duration: '20:30', preview: false },
          { title: 'Strategy Optimization', duration: '25:45', preview: false },
          { title: 'Avoiding Overfitting', duration: '18:22', preview: false }
        ]
      },
      {
        section: 'Risk Management',
        lessons: [
          { title: 'Position Sizing', duration: '21:18', preview: false },
          { title: 'Stop Loss Strategies', duration: '19:45', preview: false },
          { title: 'Portfolio Diversification', duration: '24:30', preview: false },
          { title: 'Risk Metrics and Monitoring', duration: '22:55', preview: false }
        ]
      },
      {
        section: 'Live Trading Implementation',
        lessons: [
          { title: 'Broker APIs and Integration', duration: '28:20', preview: false },
          { title: 'Order Management Systems', duration: '26:45', preview: false },
          { title: 'Real-time Data Handling', duration: '23:18', preview: false },
          { title: 'Monitoring and Alerts', duration: '20:15', preview: false }
        ]
      }
    ],
    review: [
      {
        name: 'Sarah Chen',
        avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Excellent course! Aseem explains complex concepts clearly and the hands-on projects really helped me understand algorithmic trading. Already implementing strategies from the course.'
      },
      {
        name: 'Michael Rodriguez',
        avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 4,
        date: '1 month ago',
        comment: 'Best trading course I\'ve taken. The Python examples are practical and the backtesting section is incredibly detailed. Worth every penny!'
      },
      {
        name: 'Emma Johnson',
        avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 2,
        date: '3 weeks ago',
        comment: 'Great content and well-structured curriculum. The instructor is knowledgeable and provides good support. Some sections could be more beginner-friendly.'
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">About This Course</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{course.aboutcourse}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn</h4>
            <ul className="space-y-2">
              {course.featuresLearn.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Course Features</h4>
            <ul className="space-y-2">
              {course.coursefeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurriculum = () => (
    <div className="space-y-6">
      {course.curriculum.map((section, sectionIndex) => (
        <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h4 className="font-semibold text-gray-900">{section.section}</h4>
            <p className="text-sm text-gray-600 mt-1">{section.lessons.length} lessons</p>
          </div>
          <div className="divide-y divide-gray-200">
            {section.lessons.map((lesson, lessonIndex) => (
              <div key={lessonIndex} className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">{lesson.title}</h5>
                    {lesson.preview && (
                      <span className="text-xs text-pink-600 font-medium">Preview Available</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                  {lesson.preview && (
                    <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                      Preview
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderInstructor = () => (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-start gap-6">
        <img
          src={course.instructor.avatar}
          alt={course.instructor.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.instructor.name}</h3>
          <p className="text-pink-600 font-medium mb-4">{course.instructor.title}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{course.instructor.rating}</div>
              <div className="text-sm text-gray-600">Instructor Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{course.instructor.students}</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{course.instructor.courses}</div>
              <div className="text-sm text-gray-600">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{course.instructor.experience}</div>
              <div className="text-sm text-gray-600">Experience</div>
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            Aseem is a renowned expert in algorithmic trading and artificial intelligence with over 15 years of experience in the financial technology sector. He holds a PhD in Neural Networks and has been at the forefront of developing cutting-edge trading algorithms for top-tier financial institutions.
          </p>
        </div>
      </div>
    </div>
  );

  const renderReviews = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl font-bold text-gray-900">{course.rating}</div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600">{coursedetail.review.length} reviews</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {coursedetail.review.map((r, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start gap-4">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-gray-900">{r.name}</h4>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{r.date}</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < r.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{r.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.type}
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.description}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-gray-400">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Created by {course.instructor.name}</p>
                  <p className="text-sm text-gray-400">Last updated {course.lastUpdated}</p>
                </div>
              </div>
            </div>

            {/* Course Preview Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg sticky top-24">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-pink-600 ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-pink-600">₹{course.price}</span>
                      {course.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">₹{course.originalPrice}</span>
                      )}
                    </div>  
                      {course.originalPrice && (
                      <p className="text-sm text-green-600 font-medium">
                        {Math.round((1 - course.price / course.originalPrice) * 100)}% off limited time!
                      </p>)}
                  </div>

                  <div className="space-y-3 mb-6">
                    <button className="w-full bg-pink-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-pink-700 transition-colors">
                      Enroll Now
                    </button>
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`w-full border-2 py-3 px-6 rounded-full font-semibold transition-colors ${
                        isWishlisted
                          ? 'border-pink-600 text-pink-600 bg-pink-50'
                          : 'border-gray-300 text-gray-700 hover:border-pink-600 hover:text-pink-600'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                        {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                      </div>
                    </button>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration} on-demand video</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      <span>Downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4" />
                      <span>Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>Lifetime access</span>
                    </div>
                    {course.certificate && (
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>Certificate of completion</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-gray-200">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <MessageSquare className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:pr-80">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg p-8">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'curriculum' && renderCurriculum()}
            {activeTab === 'instructor' && renderInstructor()}
            {activeTab === 'reviews' && renderReviews()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;