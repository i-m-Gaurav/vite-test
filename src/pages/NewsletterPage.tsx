import React, { useState } from 'react';
import { Mail, TrendingUp, Bell, Calendar, CheckCircle } from 'lucide-react';

const NewsletterPage = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Looking for our upcoming courses?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Join the waitlist to be notified when dates for future course become available
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Fill your email"
                      className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-full focus:outline-none focus:border-pink-500 transition-colors text-lg"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors text-lg"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Successfully Subscribed!</h3>
                <p className="text-gray-600">
                  Thank you for joining our waitlist. We'll notify you as soon as new courses are available.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Early Access</h3>
            <p className="text-gray-600">
              Be the first to know about new courses and get exclusive early bird pricing.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Market Insights</h3>
            <p className="text-gray-600">
              Receive weekly market analysis and trading insights directly in your inbox.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Course Updates</h3>
            <p className="text-gray-600">
              Get notified about course schedules, live sessions, and special events.
            </p>
          </div>
        </div>

        {/* Newsletter Preview */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white text-center">
              What You'll Receive
            </h2>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Weekly Newsletter Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Market analysis and trading opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">New course announcements and early access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Exclusive trading tips and strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Live session schedules and recordings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Student success stories and case studies</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Sample Newsletter Content</h4>
                <div className="space-y-4 text-sm">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">📈 This Week's Market Outlook</h5>
                    <p className="text-gray-600">Key levels to watch in major indices and how to position your trades...</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">🎓 New Course Alert</h5>
                    <p className="text-gray-600">Advanced Options Strategies course launching next month. Early bird discount available...</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">💡 Trading Tip of the Week</h5>
                    <p className="text-gray-600">How to use volume analysis to confirm breakout patterns...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">5K+</div>
            <div className="text-gray-600">Newsletter Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Open Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">Weekly</div>
            <div className="text-gray-600">Fresh Content</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">Free</div>
            <div className="text-gray-600">Always</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;