import React from 'react';
import { Award, Download, Share2 } from 'lucide-react';

const CertificatesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            Certificates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upon successful completion of our courses, you'll receive a professional certificate 
            that validates your expertise and enhances your career prospects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Certificate Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl shadow-lg">
              <div className="bg-white p-8 rounded-2xl border-4 border-pink-200 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-600"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-100 rounded-full opacity-30"></div>
                
                {/* Certificate Content */}
                <div className="relative text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificate of Completion</h3>
                    <p className="text-gray-600">This certifies that</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-3xl font-bold text-pink-600 mb-2">Sarah Johnson</h4>
                    <p className="text-gray-600 mb-4">has successfully completed</p>
                    <h5 className="text-xl font-semibold text-gray-900 mb-2">
                      Complete Algorithmic Trading Masterclass
                    </h5>
                    <p className="text-gray-600">
                      A comprehensive 45-lesson course covering Python programming, 
                      trading algorithms, and risk management strategies.
                    </p>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="text-left">
                      <div className="w-24 h-0.5 bg-gray-300 mb-2"></div>
                      <p className="text-sm text-gray-600">Instructor</p>
                      <p className="font-semibold text-gray-900">Joen Callion</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Completion Date</p>
                      <p className="font-semibold text-gray-900">January 15, 2025</p>
                    </div>
                    <div className="text-right">
                      <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-2">
                        <span className="text-xs font-bold text-pink-600">VERIFIED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Actions */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors">
                <Download className="w-4 h-4" />
                Download
              </button>
              <button className="flex items-center gap-2 border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-50 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          {/* Certificate Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Professional Recognition
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Industry-Recognized Certification</h4>
                    <p className="text-gray-600">
                      Our certificates are recognized by leading trading firms and financial institutions worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Digital & Printable</h4>
                    <p className="text-gray-600">
                      Download high-resolution certificates for digital portfolios or print for physical display.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Share2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">LinkedIn Integration</h4>
                    <p className="text-gray-600">
                      Easily share your achievements on LinkedIn and other professional networks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Certificate Includes:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Course completion verification
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Instructor signature and credentials
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Unique verification code
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Skills and competencies covered
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Completion date and duration
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;