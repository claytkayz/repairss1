import { motion } from 'motion/react';
import { Smartphone, Laptop, Monitor, Tablet, Watch, Speaker, LucideIcon } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  image?: string;
}

const services: ServiceItem[] = [
  {
    title: 'Smartphones',
    description: 'Screen replacements, battery swaps, and water damage repair for all major brands.',
    icon: Smartphone,
    color: 'bg-blue-500/10 text-blue-400',
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Laptops & MacBooks',
    description: 'Hardware upgrades, keyboard replacements, and motherboard repairs.',
    icon: Laptop,
    color: 'bg-indigo-500/10 text-indigo-400',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Televisions',
    description: 'LED, OLED, and QLED screen repairs, power supply fixes, and audio issues.',
    icon: Monitor,
    color: 'bg-purple-500/10 text-purple-400',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Tablets & iPads',
    description: 'Cracked screens, charging port repairs, and battery replacements.',
    icon: Tablet,
    color: 'bg-pink-500/10 text-pink-400',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Smartwatches',
    description: 'Screen repairs and battery replacements for Apple Watch and Android wearables.',
    icon: Watch,
    color: 'bg-emerald-500/10 text-emerald-400',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Audio & Gadgets',
    description: 'Repairs for headphones, speakers, gaming consoles, and other electronics.',
    icon: Speaker,
    color: 'bg-orange-500/10 text-orange-400',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2940&auto=format&fit=crop',
  },
];

interface ServicesProps {
  onOpenModal: () => void;
}

export default function Services({ onOpenModal }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Fix</h2>
          <p className="text-lg text-gray-400">
            From shattered screens to complex motherboard issues, our certified technicians have the expertise to bring your devices back to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              onClick={onOpenModal}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/20 transition-all cursor-pointer relative overflow-hidden ${!service.image ? 'bg-slate-800/50' : ''}`}
            >
              {service.image && (
                <>
                  <div 
                    className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
                </>
              )}
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
