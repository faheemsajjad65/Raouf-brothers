import React from 'react';
import { motion } from 'motion/react';
import { Shirt, Briefcase, Footprints, Mountain, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      name: 'Apparel & Fashion',
      description: 'From high-fashion garments to everyday wear, we provide zippers that combine aesthetic appeal with functional durability.',
      needs: 'Color matching, smooth operation, variety of finishes.',
      recommended: 'Nylon Coil, Metal Zippers (#3, #5).',
      icon: Shirt,
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Bags & Luggage',
      description: 'Heavy-duty zipper solutions designed to withstand the rigors of travel and daily use.',
      needs: 'High tensile strength, security features, long-lasting sliders.',
      recommended: 'Plastic Molded, Heavy-duty Nylon (#8, #10).',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Footwear',
      description: 'Specialized zippers that can handle the constant stress and movement of shoes and boots.',
      needs: 'Flexibility, corrosion resistance, secure locking.',
      recommended: 'Metal Zippers, Specialized Nylon.',
      icon: Footprints,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Outdoor & Sports Gear',
      description: 'Weather-resistant and lightweight components for tents, sleeping bags, and technical jackets.',
      needs: 'Water resistance, UV protection, lightweight.',
      recommended: 'Waterproof Zippers, Plastic Molded.',
      icon: Mountain,
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Industrial Applications',
      description: 'Robust zipper systems for automotive covers, industrial curtains, and protective gear.',
      needs: 'Extreme durability, chemical resistance, large sizes.',
      recommended: 'Heavy-duty Metal, Large Plastic Molded.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-24">
      <section className="bg-brand-secondary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Our versatile product range is engineered to meet the unique demands of diverse global industries.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {industries.map((industry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-green-200">
                    <industry.icon size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{industry.name}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-2">Industry Needs</h4>
                      <p className="text-sm text-gray-500">{industry.needs}</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                      <h4 className="font-bold text-green-900 mb-2">Recommended</h4>
                      <p className="text-sm text-green-700">{industry.recommended}</p>
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center space-x-2 text-brand-primary font-bold hover:translate-x-2 transition-transform"
                  >
                    <span>Discuss Your Industry Needs</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src={industry.image} 
                      alt={industry.name} 
                      className="rounded-3xl shadow-2xl aspect-[4/3] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                      <p className="text-brand-primary font-bold">Trusted Partner</p>
                      <p className="text-gray-500 text-xs">For {industry.name}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
