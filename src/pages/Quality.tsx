import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, FlaskConical, Microscope, CheckCircle2, Award } from 'lucide-react';

const Quality = () => {
  const steps = [
    {
      title: 'Raw Material Inspection',
      desc: 'Every batch of polyester yarn, zinc alloy, and metal wire is tested for purity and strength before entering production.',
      icon: FlaskConical
    },
    {
      title: 'Precision Manufacturing',
      desc: 'Automated machinery with real-time monitoring ensures consistent teeth molding and tape weaving.',
      icon: Cpu
    },
    {
      title: 'Durability Testing',
      desc: 'Zippers undergo thousands of open/close cycles to ensure longevity and smooth operation.',
      icon: Microscope
    },
    {
      title: 'Final Quality Audit',
      desc: 'Manual inspection of every finished product for color accuracy, slider glide, and overall finish.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-24">
      <section className="bg-brand-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Quality Without Compromise</h1>
            <p className="text-xl text-green-50 leading-relaxed">
              Our commitment to quality is what sets us apart. We implement rigorous testing 
              protocols to ensure every component meets international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900">Our Quality Control Process</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              From raw material to finished product, we maintain strict oversight at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-100 -z-10"></div>
                )}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6">
                    <step.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Certified Excellence</h2>
              <p className="text-gray-400 text-lg mb-10">
                Our manufacturing facilities are ISO 9001:2015 certified, and our products comply with OEKO-TEX® Standard 100, 
                ensuring they are safe for use in all types of consumer goods.
              </p>
              <div className="space-y-4">
                {[
                  'ISO 9001:2015 Quality Management',
                  'OEKO-TEX® Standard 100 Compliance',
                  'SGS Tested for Lead & Phthalates',
                  'ASTM D2061 Standard Test Methods'
                ].map((cert, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Award size={20} className="text-brand-primary" />
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white/5 aspect-square rounded-3xl flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <CheckCircle2 size={40} className="text-brand-primary mx-auto mb-2" />
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Certified</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Rigorous Durability Testing</h2>
              <p className="text-green-50 text-lg mb-8">
                We simulate years of wear and tear in our lab to ensure our zippers never fail when it matters most.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Lateral Strength Test',
                  'Slider Pull-off Strength',
                  'Color Fastness to Washing',
                  'Salt Spray Corrosion Test',
                  'Reciprocating Cycle Test',
                  'Top/Bottom Stop Strength'
                ].map((test, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                    <span className="text-sm font-medium">{test}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" 
                alt="Testing Lab" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
