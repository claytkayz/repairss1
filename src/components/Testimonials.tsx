import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Freelance Designer',
    content: 'My MacBook screen shattered right before a major deadline. iTG Global Tech had it fixed the same day. Absolute lifesavers!',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Small Business Owner',
    content: 'I bring all my company laptops here for maintenance. They are fast, reliable, and their pricing is completely transparent.',
    rating: 5,
  },
  {
    name: 'Michael Ross',
    role: 'Student',
    content: 'Dropped my iPhone in the pool. Thought it was gone forever, but they managed to recover all my photos and fix the phone.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-400">
            Don't just take our word for it. Here's what people are saying about our repair services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 text-lg italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-blue-400">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
