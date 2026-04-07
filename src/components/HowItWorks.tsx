import { motion } from 'motion/react';
import { Search, PenTool, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Select Your Device',
    description: 'Tell us what needs fixing. Choose your device model and the issue you are experiencing.',
    icon: Search,
  },
  {
    title: 'Get an Instant Quote',
    description: 'Receive a transparent, upfront price for your repair with no hidden fees.',
    icon: PenTool,
  },
  {
    title: 'Drop Off, Send In, or We Come To You',
    description: 'Bring it to our store, use our secure mail-in service, or we do onsite repairs—we can come wherever you are.',
    icon: Truck,
  },
  {
    title: 'Expert Repair',
    description: 'Our certified technicians will fix your device quickly and thoroughly test it.',
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-lg text-gray-400">
            Getting your device fixed shouldn't be a hassle. We've streamlined the process to get you back online as quickly as possible.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-800" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-slate-950 shadow-md flex items-center justify-center mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm border-2 border-slate-900">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
