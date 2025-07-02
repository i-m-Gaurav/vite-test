import React from 'react';
import { CheckCircle } from 'lucide-react';

const TrustSection = () => {
  const leftFeatures = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla faucibus magna ut risus rutrum.',
    'Quisque molestie elit vel tellus tincidunt.',
    'Fusce fringilla ante viverra convallis.',
    'Maecorb rutrum augue sit amet sagittis. sit nisl consequat pede sollicitudin et amet eudt.'
  ];

  const rightFeatures = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed hendrerit mauris sed tellus auctor sed.',
    'Pellentesque dui neque ut altet tellus tincidunt.',
    'Fusce interdum nisl rhoncus, euismod erat ut tortor.'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Why Choose Us */}
          <div className="relative">
            {/* Background Decorations */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-yellow-200 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-purple-200 rounded-full opacity-25"></div>

            <div className="relative bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                {leftFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Profile Card */}
              <div className="mt-8 p-4 bg-gray-50 rounded-2xl flex items-center gap-4">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Joan Kowalski"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Joan Kowalski, AMT</h4>
                  <p className="text-sm text-gray-600">St Claire Catholic School</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Trust Us */}
          <div className="relative">
            {/* Background Decorations */}
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-green-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-25"></div>

            <div className="relative">
              {/* Main Image */}
              <div className="bg-gradient-to-br from-green-300 to-green-500 rounded-3xl p-8 mb-8">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Student with tablet"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>

              {/* Trust Features */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Trust Us!</h2>
                <div className="space-y-4">
                  {rightFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;