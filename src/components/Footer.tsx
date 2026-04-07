import { Wrench, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <img src="/logo.png?v=5" alt="iTG Global Tech" className="h-48 md:h-72 w-auto object-contain mix-blend-screen" />
            </a>
            <p className="text-gray-400 mb-6">
              Your trusted partner for all electronic device repairs. Fast, reliable, and guaranteed.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/bluehat15" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">iPhone Repair</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">MacBook Repair</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Laptop Repair</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">TV Repair</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Data Recovery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Store Locator</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and tech tips.</p>
            <form action="https://formsubmit.co/clayzztee@gmail.com" method="POST" className="flex flex-col gap-2">
              <input type="hidden" name="_subject" value="New Newsletter Subscription!" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
              <input type="hidden" name="_captcha" value="false" />
              <input 
                type="email" 
                name="email"
                required
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button type="submit" className="px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} iTG Global Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Warranty Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
