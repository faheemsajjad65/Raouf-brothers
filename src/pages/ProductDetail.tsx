import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCT_CATEGORIES } from '../constants';
import { CheckCircle2, ArrowLeft, Download, MessageSquare, Info } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCT_CATEGORIES.find(p => p.id === id);

  if (!product) return <Navigate to="/products" />;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-gray-100 shadow-lg mb-6">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden border border-gray-100 cursor-pointer hover:border-blue-500 transition-colors">
                  <img 
                    src={product.image} 
                    alt="Thumbnail" 
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Info size={20} className="text-blue-600" />
                  <span>Key Features</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Technical Specifications</h3>
                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 font-semibold text-gray-600 bg-gray-100/50 w-1/3">Material</td>
                        <td className="px-6 py-4 text-gray-800">High-grade Polyester / Zinc Alloy</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-gray-600 bg-gray-100/50">Available Sizes</td>
                        <td className="px-6 py-4 text-gray-800">{product.variants[0]}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-gray-600 bg-gray-100/50">Locking Type</td>
                        <td className="px-6 py-4 text-gray-800">{product.variants[1]}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-gray-600 bg-gray-100/50">MOQ</td>
                        <td className="px-6 py-4 text-gray-800">10,000 Units</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-200"
              >
                <MessageSquare size={20} />
                <span>Request Quote</span>
              </Link>
              <button className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center space-x-2">
                <Download size={20} />
                <span>Spec Sheet</span>
              </button>
            </div>
            
            <p className="text-center text-gray-500 text-sm mt-6">
              Custom branding and color matching available for bulk orders.
            </p>
          </motion.div>
        </div>

        {/* Related Products Section (Optional) */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold mb-12">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PRODUCT_CATEGORIES.filter(p => p.id !== id).slice(0, 4).map((p) => (
              <Link key={p.id} to={`/products/${p.id}`} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 border border-gray-100">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{p.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
