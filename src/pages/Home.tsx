import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe, Award, Users, Factory, ShieldCheck, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES, INDUSTRIES } from '../constants';

const ZipperTeeth = ({ className = "" }) => (
  <div className={`flex justify-between opacity-20 pointer-events-none ${className}`}>
    {[...Array(40)].map((_, i) => (
      <div key={i} className="w-1 h-3 bg-current rounded-full mx-0.5" />
    ))}
  </div>
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const zipperScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.5]);
  const zipperOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Unzip Reveal */}
      <section className="relative h-screen flex items-center pt-20 bg-gray-900">
        <motion.div 
          initial={{ clipPath: 'inset(0 50% 0 50%)' }}
          animate={{ clipPath: 'inset(0 0% 0 0%)' }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=1920&auto=format&fit=crop" 
            alt="Manufacturing background" 
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Zipper Slider Animation on Load */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-brand-primary/30 z-10 md:block hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-2xl flex items-center justify-center border border-white/20">
            <div className="w-4 h-6 border-2 border-gray-400 rounded-md" />
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="inline-block px-4 py-1 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-primary text-sm font-bold mb-6"
            >
              Premium Zipper Manufacturing
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Reliable Zipper Solutions for <span className="text-brand-primary">Every Industry</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Premium manufacturing of zippers, sliders, and components. 
              Engineered for durability, precision, and seamless customization for global B2B buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-green-900/20 group"
              >
                <span>Request a Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/products" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: zipperOpacity, scale: zipperScale }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Scroll to Unzip</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-brand-primary rounded-full" 
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Indicators with Teeth Border */}
      <section className="relative py-12 bg-gray-50 border-b border-gray-100">
        <ZipperTeeth className="absolute top-0 left-0 right-0 text-gray-300" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '25+', icon: Award },
              { label: 'Production Capacity', value: '10M+', icon: Factory },
              { label: 'Export Markets', value: '40+', icon: Globe },
              { label: 'Happy Clients', value: '500+', icon: Users },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <stat.icon className="text-brand-primary mb-2" size={24} />
                <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Our Products</h2>
              <h3 className="text-4xl font-bold text-gray-900">Complete Zipper Solutions</h3>
              <p className="text-gray-600 mt-4 text-lg">
                From finished zippers to custom components, we provide everything you need for high-quality manufacturing.
              </p>
            </div>
            <Link to="/products" className="text-brand-primary font-bold flex items-center space-x-2 hover:underline group">
              <span>View All Products</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.slice(0, 6).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <Link 
                    to={`/products/${product.id}`} 
                    className="inline-flex items-center text-brand-primary font-semibold text-sm group-hover:translate-x-1 transition-transform"
                  >
                    <span>Learn More</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Zipper Reveal Effect */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <ZipperTeeth className="absolute top-0 left-0 right-0 text-white/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Why Raouf Brothers</h2>
            <h3 className="text-4xl font-bold mb-6">The Manufacturing Advantage</h3>
            <p className="text-blue-100 text-lg">
              We combine decades of expertise with state-of-the-art technology to deliver unmatched quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Consistent Quality', desc: 'Rigorous QC at every stage of production ensures zero defects.', icon: ShieldCheck },
              { title: 'Wide Range', desc: 'From nylon to metal, we offer a complete catalog of zipper solutions.', icon: Zap },
              { title: 'Custom Solutions', desc: 'Tailored branding, colors, and designs to match your specific needs.', icon: Award },
              { title: 'Global Logistics', desc: 'Efficient export processes and reliable shipping to global markets.', icon: Globe },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <ZipperTeeth className="absolute bottom-0 left-0 right-0 text-white/10" />
      </section>

      {/* Industries Served */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Industries</h2>
            <h3 className="text-4xl font-bold text-gray-900">Versatile Applications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {INDUSTRIES.map((industry, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 text-center border border-gray-100 rounded-2xl hover:border-green-200 hover:bg-green-50/30 transition-all group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Factory size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{industry.name}</h4>
                <p className="text-xs text-gray-500">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick RFQ Form */}
      <section className="py-24 bg-gray-50 relative">
        <ZipperTeeth className="absolute top-0 left-0 right-0 text-gray-200" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 bg-brand-primary text-white relative">
              <div className="absolute top-0 right-0 w-32 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
              <h3 className="text-4xl font-bold mb-6">Get a Custom Quote Today</h3>
              <p className="text-blue-100 text-lg mb-8">
                Tell us about your requirements and our team will get back to you with a competitive proposal within 24 hours.
              </p>
              <ul className="space-y-4">
                {['Bulk order discounts', 'Custom branding options', 'Free sample requests', 'Global shipping estimates'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 size={20} className="text-green-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-16">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Product Category</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all appearance-none bg-white">
                    <option>Nylon Zippers</option>
                    <option>Metal Zippers</option>
                    <option>Plastic Zippers</option>
                    <option>Sliders & Pullers</option>
                    <option>Other Components</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Requirements</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="Tell us about quantity, sizes, and any custom needs..."></textarea>
                </div>
                <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg shadow-green-200">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
