import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Mail, Phone, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-blue-900 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800/50 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Contact Our Sales Team
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Have a specific requirement or need a bulk quote? Our experts are ready to help you find the perfect zipper solution.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (234) 567-890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Email</p>
                      <p className="text-gray-600">sales@raoufbrothers.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">+1 987 654 321</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Office</p>
                      <p className="text-gray-600">123 Industrial Zone, Manufacturing Hub, Global City</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <Clock size={20} />
                  <span>Response Time</span>
                </h3>
                <p className="text-blue-100 mb-6">
                  We pride ourselves on our quick turnaround. Our team typically responds to all inquiries within 24 business hours.
                </p>
                <div className="flex items-center space-x-2 text-sm font-bold">
                  <Globe size={16} />
                  <span>Serving Clients Worldwide</span>
                </div>
              </div>
            </div>

            {/* RFQ Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Request for Quote (RFQ)</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Your company" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="email@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="e.g. USA, UK, Bangladesh" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Product Category</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                        <option>Nylon Zippers</option>
                        <option>Metal Zippers</option>
                        <option>Plastic Zippers</option>
                        <option>Sliders & Pullers</option>
                        <option>Zipper Chains</option>
                        <option>Custom Solution</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Quantity</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="e.g. 50,000 units" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Detailed Requirements</label>
                    <textarea rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Please specify sizes, colors, finishes, and any custom branding needs..."></textarea>
                  </div>

                  <div className="flex items-center space-x-3 text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                    <CheckCircle2 size={18} className="text-blue-600" />
                    <span>By submitting this form, you agree to our privacy policy and terms of service.</span>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 transform hover:-translate-y-0.5">
                    Submit RFQ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">Interactive Map Placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
