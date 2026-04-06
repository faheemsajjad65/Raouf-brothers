import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, Globe, Factory, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Decades of Manufacturing Excellence</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Raouf Brothers has been at the forefront of the zipper industry since 1995, 
              delivering precision-engineered components to the world's leading brands.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">1995</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider font-semibold">Founded</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider font-semibold">Skilled Workforce</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">40+</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider font-semibold">Countries Exported</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">ISO</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider font-semibold">Certified Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History & Growth</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  What started as a small family-owned workshop has grown into a global powerhouse in the zipper manufacturing industry. 
                  Raouf Brothers was built on the foundation of hard work, technical innovation, and an unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Over the years, we have continuously invested in state-of-the-art machinery from Germany and Japan, 
                  allowing us to scale our production while maintaining the tight tolerances required for high-performance zippers.
                </p>
                <p>
                  Today, we serve thousands of manufacturers across five continents, providing the "hidden strength" that holds their products together.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
                alt="Factory floor" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-blue-600 font-bold text-4xl mb-1">25+</p>
                <p className="text-gray-500 font-medium">Years of Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide the global textile and manufacturing industries with the most reliable, 
                durable, and innovative zipper solutions through sustainable practices and technical excellence.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world's preferred partner for zipper components, 
                recognized for our quality standards, ethical manufacturing, and contribution to our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
