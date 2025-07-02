import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is included in the algorithmic trading course?",
      answer: "The course includes 45 comprehensive video lessons covering Python programming for finance, trading algorithm development, backtesting strategies, risk management, and live trading implementation. You'll also get downloadable resources, code examples, and lifetime access to course updates."
    },
    {
      question: "Do I need prior programming experience?",
      answer: "No prior programming experience is required. The course starts with Python basics specifically for trading applications and gradually builds up to advanced concepts. However, basic computer literacy and willingness to learn are essential."
    },
    {
      question: "How long do I have access to the course content?",
      answer: "You get lifetime access to all course materials, including future updates and new content additions. Once enrolled, you can learn at your own pace and revisit the content anytime."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course content within the first 30 days, you can request a full refund, no questions asked."
    },
    {
      question: "Can I get help if I'm stuck on something?",
      answer: "Absolutely! You'll have access to our private student community where you can ask questions and get help from both the instructor and fellow students. We also provide direct instructor support for technical questions."
    },
    {
      question: "What trading platforms are covered in the course?",
      answer: "The course covers integration with major trading platforms including Interactive Brokers, Alpaca, and other popular APIs. We focus on platform-agnostic strategies that can be adapted to most brokers."
    },
    {
      question: "Are the strategies suitable for different market conditions?",
      answer: "Yes, the course covers various strategies including trend-following, mean reversion, and volatility-based approaches. You'll learn how to adapt strategies for different market conditions and how to build robust systems."
    },
    {
      question: "Do I need a large amount of capital to start?",
      answer: "No, you can start with a small amount of capital. The course emphasizes proper risk management and position sizing. Many strategies can be tested and implemented with modest capital, and we cover paper trading for practice."
    }
  ];

  const toggleFAQ = (index:any) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-pink-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find the answers to your questions here
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about our courses and learning platform.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-pink-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Still have questions?
          </h2>
          <p className="mb-6 opacity-90">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <Link
                        to='/contact'
                      >
          <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Contact Support
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;