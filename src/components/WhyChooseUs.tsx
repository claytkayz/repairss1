import { motion } from 'motion/react';
import { ShieldCheck, Clock, Wrench, ThumbsUp, MapPin, Phone, CreditCard } from 'lucide-react';

const reasons = [
  {
    title: 'Certified Technicians',
    description: 'Our team undergoes rigorous training and certification to handle the latest devices.',
    icon: Wrench,
  },
  {
    title: 'Onsite Repairs',
    description: 'We do onsite repairs, we can come wherever you are to fix your devices at your convenience.',
    icon: MapPin,
  },
  {
    title: 'Lifetime Warranty',
    description: 'We stand behind our work with an industry-leading lifetime warranty on most repairs.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast Turnaround',
    description: 'Most common repairs are completed in under an hour while you wait.',
    icon: Clock,
  },
  {
    title: 'Genuine Parts',
    description: 'We use only the highest quality OEM or premium aftermarket parts available.',
    icon: ThumbsUp,
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees. You will know exactly what you are paying before we start the repair.',
    icon: CreditCard,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose iTG Global Tech?
              </h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                We're not just another repair shop. We're a team of passionate tech enthusiasts dedicated to providing the highest quality repair services with unparalleled customer care.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {reasons.map((reason, index) => (
                  <div key={reason.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400">
                        <reason.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                      <p className="text-gray-400 text-sm">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Technician repairing a device" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Visit Our Store</h4>
                      <p className="text-gray-300 text-sm">18 Plinlimmon Rd, The Hill, Johannesburg South, 2197</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Call Us Now</h4>
                      <p className="text-gray-300 text-sm">+27 75 228 8087 / +27 63 528 6100</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
