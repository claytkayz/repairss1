import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle } from 'lucide-react';

interface RepairModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RepairModal({ isOpen, onClose }: RepairModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Add a subject line for the email
    data._subject = "New Repair Booking Request!";

    try {
      await fetch("https://formsubmit.co/ajax/clayzztee@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-slate-900 rounded-2xl shadow-2xl shadow-black/50 border border-slate-800 w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <h2 className="text-2xl font-bold text-white">Book a Repair</h2>
              <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-slate-400">We'll get back to you shortly with a quote and next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                      <input required type="text" name="name" className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-slate-500" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
                      <input required type="tel" name="phone" className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-slate-500" placeholder="(555) 123-4567" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                      <input required type="email" name="email" className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-slate-500" placeholder="john@example.com" />
                    </div>
                  </div>

                  <hr className="border-slate-800" />

                  {/* Device Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Device Type</label>
                      <select required name="device_type" className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white appearance-none">
                        <option value="">Select device...</option>
                        <option value="smartphone">Smartphone</option>
                        <option value="laptop">Laptop / MacBook</option>
                        <option value="tablet">Tablet / iPad</option>
                        <option value="tv">Television</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Device Model</label>
                      <input required type="text" name="device_model" className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-slate-500" placeholder="e.g. iPhone 13 Pro" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-300 mb-1">Issue Description</label>
                      <textarea required name="issue_description" rows={3} className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-white placeholder-slate-500" placeholder="Please describe the problem you're experiencing..."></textarea>
                    </div>
                  </div>

                  <hr className="border-slate-800" />

                  {/* Repair Method */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Preferred Repair Method</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <label className="relative flex cursor-pointer rounded-lg border bg-slate-950 p-4 shadow-sm focus:outline-none border-slate-800 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500 has-[:checked]:bg-blue-500/10">
                        <input type="radio" name="repair_method" value="in-store" className="sr-only" required />
                        <span className="flex flex-1">
                          <span className="flex flex-col">
                            <span className="block text-sm font-medium text-white">In-Store</span>
                            <span className="mt-1 flex items-center text-xs text-slate-400">Drop off at our location</span>
                          </span>
                        </span>
                      </label>
                      <label className="relative flex cursor-pointer rounded-lg border bg-slate-950 p-4 shadow-sm focus:outline-none border-slate-800 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500 has-[:checked]:bg-blue-500/10">
                        <input type="radio" name="repair_method" value="onsite" className="sr-only" required />
                        <span className="flex flex-1">
                          <span className="flex flex-col">
                            <span className="block text-sm font-medium text-white">Onsite</span>
                            <span className="mt-1 flex items-center text-xs text-slate-400">We come to you</span>
                          </span>
                        </span>
                      </label>
                      <label className="relative flex cursor-pointer rounded-lg border bg-slate-950 p-4 shadow-sm focus:outline-none border-slate-800 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500 has-[:checked]:bg-blue-500/10">
                        <input type="radio" name="repair_method" value="mail-in" className="sr-only" required />
                        <span className="flex flex-1">
                          <span className="flex flex-col">
                            <span className="block text-sm font-medium text-white">Mail-In</span>
                            <span className="mt-1 flex items-center text-xs text-slate-400">Ship it to us securely</span>
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-500 transition-colors shadow-md shadow-blue-900/20">
                      Submit Repair Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
