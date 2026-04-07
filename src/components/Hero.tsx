import { motion } from 'motion/react';
import { ArrowRight, Search, ShieldCheck, Clock, Wrench, MapPin } from 'lucide-react';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div 
      className="relative bg-slate-950 pt-64 pb-20 lg:pt-80 lg:pb-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 0.95)), url('https://images.unsplash.com/photo-1581092926214-ee3f62110fa8?q=80&w=2940&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-blue-500/20 blur-3xl opacity-50" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-indigo-500/20 blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              South Africa's Trusted Repair Experts
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We Fix It. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Fast & Reliable.
            </span>
          </motion.h1>

          <motion.div
            className="my-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 h-[350px] md:h-[450px] max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800 group">
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop" 
                alt="MacBook Repair" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-semibold text-white">MacBook</div>
            </div>
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800 group">
              <img 
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop" 
                alt="iPhone Repair" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-3 left-3 font-semibold text-white text-sm">iPhone</div>
            </div>
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800 group">
              <img 
                src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop" 
                alt="iPad Repair" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-3 left-3 font-semibold text-white text-sm">iPad</div>
            </div>
            <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800 group">
              <img 
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1000&auto=format&fit=crop" 
                alt="TV Repair" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-semibold text-white">Smart TV</div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Expert repairs for TVs, laptops, iPhones, MacBooks, and all your electronic gadgets. Premium service with genuine parts. We do onsite repairs, we can come wherever you are.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-full sm:w-auto sm:min-w-[320px]">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-4 bg-slate-900 border-slate-800 rounded-full text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-lg"
                placeholder="What device needs fixing?"
              />
            </div>
            <button onClick={onOpenModal} className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
              Get a Quote <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-slate-800 pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="bg-slate-800 p-3 rounded-full text-blue-400">
                <Clock className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-gray-400">Same Day Repair</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-slate-800 p-3 rounded-full text-blue-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-gray-400">Lifetime Warranty</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-slate-800 p-3 rounded-full text-blue-400">
                <Wrench className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-gray-400">Expert Technicians</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-slate-800 p-3 rounded-full text-blue-400">
                <MapPin className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-gray-400">Onsite Repairs</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
