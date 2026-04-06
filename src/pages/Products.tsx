import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../constants';
import { Search, Filter, ChevronRight } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = PRODUCT_CATEGORIES.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Product Catalog
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality zippers and components designed for global manufacturing standards.
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <button className="flex items-center space-x-2 px-6 py-3 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-all">
                <Filter size={18} />
                <span>Filter</span>
              </button>
              <button className="flex-1 md:flex-none bg-brand-primary text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all">
                Download Catalog (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-primary uppercase tracking-wider">
                      Premium
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <Link 
                      to={`/products/${product.id}`}
                      className="text-brand-primary font-bold flex items-center space-x-1 hover:translate-x-1 transition-transform"
                    >
                      <span>View Details</span>
                      <ChevronRight size={18} />
                    </Link>
                    <Link 
                      to="/contact"
                      className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No products found matching your search.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-brand-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
