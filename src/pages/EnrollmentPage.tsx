import React, { useState } from 'react';
import { Calendar, CreditCard, User, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const EnrollmentPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    course: 'algorithmic-trading',
    paymentMethod: 'card'
  });

  const courses = [
    {
      id: 'algorithmic-trading',
      title: 'Complete Algorithmic Trading Masterclass',
      price: 89.99,
      originalPrice: 149.99,
      duration: '12hrs 30min',
      lessons: 45
    },
    {
      id: 'technical-analysis',
      title: 'Technical Analysis Fundamentals',
      price: 59.99,
      originalPrice: 99.99,
      duration: '8hrs 45min',
      lessons: 32
    },
    {
      id: 'options-trading',
      title: 'Advanced Options Trading Strategies',
      price: 129.99,
      originalPrice: 199.99,
      duration: '15hrs 20min',
      lessons: 58
    }
  ];

  const selectedCourse = courses.find(course => course.id === formData.course);

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
            currentStep >= step 
              ? 'bg-pink-600 text-white' 
              : 'bg-gray-200 text-gray-600'
          }`}>
            {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
          </div>
          {step < 3 && (
            <div className={`w-16 h-1 mx-2 ${
              currentStep > step ? 'bg-pink-600' : 'bg-gray-200'
            }`}></div>
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Enrollment Form</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
              placeholder="Enter your address"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Course *
        </label>
        <select
          name="course"
          value={formData.course}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
          required
        >
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title} - ${course.price}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment</h2>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">Selected Course</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-900">{selectedCourse?.title}</p>
            <p className="text-sm text-gray-600">
              {selectedCourse?.duration} • {selectedCourse?.lessons} lessons
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-pink-600">${selectedCourse?.price}</div>
            {selectedCourse?.originalPrice && (
              <div className="text-sm text-gray-400 line-through">
                ${selectedCourse?.originalPrice}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Payment Method
        </label>
        <div className="space-y-3">
          <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === 'card'}
              onChange={handleInputChange}
              className="text-pink-600 focus:ring-pink-500"
            />
            <CreditCard className="w-5 h-5 text-gray-400 mx-3" />
            <span className="font-medium text-gray-900">Credit/Debit Card</span>
          </label>
          
          <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={formData.paymentMethod === 'upi'}
              onChange={handleInputChange}
              className="text-pink-600 focus:ring-pink-500"
            />
            <div className="w-5 h-5 bg-orange-500 rounded mx-3"></div>
            <span className="font-medium text-gray-900">UPI Payment</span>
          </label>
        </div>
      </div>

      {formData.paymentMethod === 'card' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      )}

      {formData.paymentMethod === 'upi' && (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span className="text-gray-600">QR Code</span>
          </div>
          <p className="text-gray-600 mb-2">Scan QR code to pay</p>
          <p className="font-semibold text-gray-900">Amount: ${selectedCourse?.price}</p>
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900">
        Please check our email for enrollment confirmation!
      </h2>
      
      <p className="text-gray-600 max-w-md mx-auto">
        We will send you an enrollment confirmation email at {formData.email} in the next few minutes. 
        Please check your inbox and follow the instructions to complete your enrollment.
      </p>

      <div className="bg-blue-50 rounded-lg p-6 text-left max-w-md mx-auto">
        <h3 className="font-semibold text-gray-900 mb-3">What's Next?</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            Check your email for course access details
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            Join our exclusive student community
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            Start learning immediately
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
              Register For Your Free Demo
            </h1>
            <div className="flex items-center justify-center gap-6 mt-4 text-white text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Book a demo to see our all-in-one assessment platform</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            {renderStepIndicator()}

            <div className="max-w-2xl mx-auto">
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}

              {/* Navigation Buttons */}
              {currentStep < 3 && (
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePrevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                      currentStep === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
                  >
                    {currentStep === 2 ? 'Complete Payment' : 'Next'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <Calendar className="w-8 h-8 text-pink-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
            <p className="text-sm text-gray-600">Learn at your own pace with lifetime access</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Money-Back Guarantee</h3>
            <p className="text-sm text-gray-600">30-day money-back guarantee if not satisfied</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <User className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-sm text-gray-600">Direct access to instructor and community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPage;