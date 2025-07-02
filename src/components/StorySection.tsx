import React from 'react';
import { Award, Briefcase, GraduationCap, TrendingUp, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const StorySection = () => {
  const timeline = [
    {
      year: '1998',
      title: 'Machine Learning Researcher at XYZ Lab',
      icon: GraduationCap,
      description: 'Started my journey in AI and machine learning research, focusing on pattern recognition and data analysis.'
    },
    {
      year: '2005',
      title: 'Founder Data Science Company',
      icon: Briefcase,
      description: 'Founded my first company specializing in data science solutions for financial institutions.'
    },
    {
      year: '2015',
      title: 'Teaching at AI Center',
      icon: Award,
      description: 'Began teaching advanced AI and trading concepts, sharing knowledge with the next generation of traders.'
    },
    {
      year: '2020',
      title: 'PhD on neural networks',
      icon: GraduationCap,
      description: 'Completed doctoral research on neural network applications in algorithmic trading systems.'
    },
    {
      year: 'Now',
      title: 'Senior Director at ModernAI',
      icon: TrendingUp,
      description: 'Currently leading AI initiatives and developing cutting-edge trading algorithms at ModernAI.'
    }
  ];

  const education = [
    {
      degree: 'PhD in Neural Networks',
      institution: 'Stanford University',
      year: '2020',
      description: 'Specialized in deep learning applications for financial markets and algorithmic trading systems.'
    },
    {
      degree: 'Master of Science in Computer Science',
      institution: 'MIT',
      year: '2002',
      description: 'Focus on artificial intelligence, machine learning, and quantitative finance.'
    },
    {
      degree: 'Bachelor of Science in Mathematics',
      institution: 'Harvard University',
      year: '1998',
      description: 'Graduated Summa Cum Laude with concentration in Applied Mathematics and Statistics.'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years Experience' },
    { number: '10K+', label: 'Students Taught' },
    { number: '50+', label: 'Published Papers' },
    { number: '5', label: 'Awards Won' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Hello, I'm <span className="text-pink-600">Joen Callion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate educator and researcher dedicated to making algorithmic trading 
            and AI accessible to learners worldwide.
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
                  My story is one fueled by a deep passion for unraveling the mysteries of AI, leading me to contribute to groundbreaking research and advancements in the industry.
                </p>
                <p>
                  Throughout my career, I've been at the forefront of shaping the future of technology, blending theoretical knowledge with practical insights. I am committed to making AI and machine learning accessible to learners at all levels, demystifying complex concepts in an engaging and collaborative learning environment.
                </p>
                <p>
                  Beyond the classroom, I'm a thought leader, continually pushing the boundaries of AI research. My dedication to ethical AI development ensures that my research sets the stage for responsible and innovative growth.
                </p>
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