"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  UsersIcon,
  PartyPopperIcon,
  CheckCircleIcon,
  PhoneIcon,
  MailIcon } from
'lucide-react';
import { Button } from '@/components/ui/Button';
interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  specialRequests: string;
}
const timeSlots = [
'11:00 AM',
'11:30 AM',
'12:00 PM',
'12:30 PM',
'1:00 PM',
'1:30 PM',
'2:00 PM',
'6:00 PM',
'6:30 PM',
'7:00 PM',
'7:30 PM',
'8:00 PM',
'8:30 PM',
'9:00 PM',
'9:30 PM'];

const occasions = [
'Birthday',
'Anniversary',
'Business Dinner',
'Date Night',
'Family Gathering',
'Other'];

const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
export default function ReservationPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';else
    if (!/\S+@\S+\.\S+/.test(formData.email))
    newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>

  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];
  return (
    <main className="w-full min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1920&h=600&fit=crop"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-b from-bg/95 via-bg/80 to-bg" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}>

            <h1 className="font-heading text-5xl md:text-6xl font-bold text-text-primary mb-4">
              Reserve Your Table
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Join us for an unforgettable dining experience. Book your table
              and let us take care of the rest.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {isSuccess ?
                <motion.div
                  key="success"
                  initial={{
                    opacity: 0,
                    scale: 0.95
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  className="glass-light rounded-2xl p-12 text-center">

                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircleIcon className="w-10 h-10 text-green-400" />
                    </div>
                    <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
                      Reservation Confirmed!
                    </h2>
                    <p className="text-text-muted text-lg mb-6">
                      Thank you, {formData.name}! Your table for{' '}
                      {formData.guests} guests has been reserved for{' '}
                      {formData.date} at {formData.time}.
                    </p>
                    <p className="text-text-muted mb-8">
                      A confirmation email has been sent to {formData.email}. We
                      look forward to seeing you!
                    </p>
                    <Button onClick={() => setIsSuccess(false)}>
                      Make Another Reservation
                    </Button>
                  </motion.div> :

                <motion.form
                  key="form"
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  onSubmit={handleSubmit}
                  className="glass-light rounded-2xl p-8 md:p-12">

                    <h2 className="font-heading text-2xl font-bold text-text-primary mb-8">
                      Booking Details
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Name */}
                      <div>
                        <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-primary mb-2">

                          Full Name *
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-surface border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors ${errors.name ? 'border-red-500' : 'border-border'}`}
                        placeholder="John Doe" />

                        {errors.name &&
                      <p className="mt-1 text-sm text-red-400">
                            {errors.name}
                          </p>
                      }
                      </div>

                      {/* Email */}
                      <div>
                        <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-primary mb-2">

                          Email Address *
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-surface border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors ${errors.email ? 'border-red-500' : 'border-border'}`}
                        placeholder="john@example.com" />

                        {errors.email &&
                      <p className="mt-1 text-sm text-red-400">
                            {errors.email}
                          </p>
                      }
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-text-primary mb-2">

                          Phone Number *
                        </label>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-surface border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors ${errors.phone ? 'border-red-500' : 'border-border'}`}
                        placeholder="+977 98XXXXXXXX" />

                        {errors.phone &&
                      <p className="mt-1 text-sm text-red-400">
                            {errors.phone}
                          </p>
                      }
                      </div>

                      {/* Guests */}
                      <div>
                        <label
                        htmlFor="guests"
                        className="block text-sm font-medium text-text-primary mb-2">

                          Number of Guests
                        </label>
                        <div className="relative">
                          <UsersIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-xl text-text-primary focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer">

                            {guestOptions.map((num) =>
                          <option key={num} value={num}>
                                {num} {num === '1' ? 'Guest' : 'Guests'}
                              </option>
                          )}
                          </select>
                        </div>
                      </div>

                      {/* Date */}
                      <div>
                        <label
                        htmlFor="date"
                        className="block text-sm font-medium text-text-primary mb-2">

                          Date *
                        </label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={today}
                          className={`w-full pl-12 pr-4 py-3 bg-surface border rounded-xl text-text-primary focus:outline-none focus:border-gold transition-colors ${errors.date ? 'border-red-500' : 'border-border'}`} />

                        </div>
                        {errors.date &&
                      <p className="mt-1 text-sm text-red-400">
                            {errors.date}
                          </p>
                      }
                      </div>

                      {/* Time */}
                      <div>
                        <label
                        htmlFor="time"
                        className="block text-sm font-medium text-text-primary mb-2">

                          Time *
                        </label>
                        <div className="relative">
                          <ClockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-3 bg-surface border rounded-xl text-text-primary focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer ${errors.time ? 'border-red-500' : 'border-border'}`}>

                            <option value="">Select time</option>
                            {timeSlots.map((slot) =>
                          <option key={slot} value={slot}>
                                {slot}
                              </option>
                          )}
                          </select>
                        </div>
                        {errors.time &&
                      <p className="mt-1 text-sm text-red-400">
                            {errors.time}
                          </p>
                      }
                      </div>
                    </div>

                    {/* Occasion */}
                    <div className="mb-6">
                      <label
                      htmlFor="occasion"
                      className="block text-sm font-medium text-text-primary mb-2">

                        Occasion (Optional)
                      </label>
                      <div className="relative">
                        <PartyPopperIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                        <select
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-xl text-text-primary focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer">

                          <option value="">Select occasion</option>
                          {occasions.map((occ) =>
                        <option key={occ} value={occ}>
                              {occ}
                            </option>
                        )}
                        </select>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="mb-8">
                      <label
                      htmlFor="specialRequests"
                      className="block text-sm font-medium text-text-primary mb-2">

                        Special Requests (Optional)
                      </label>
                      <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Any dietary restrictions, seating preferences, or special arrangements..." />

                    </div>

                    <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    isLoading={isSubmitting}>

                      Confirm Reservation
                    </Button>

                    <p className="text-sm text-text-muted text-center mt-4">
                      By making a reservation, you agree to our cancellation
                      policy.
                    </p>
                  </motion.form>
                }
              </AnimatePresence>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="glass-light rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <PhoneIcon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Phone</p>
                      <a
                        href="tel:+9771234567890"
                        className="text-text-primary hover:text-gold transition-colors">

                        +977 1-234-567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <MailIcon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Email</p>
                      <a
                        href="mailto:reservations@thakkhola.com"
                        className="text-text-primary hover:text-gold transition-colors">

                        reservations@thakkhola.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-light rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-6">
                  Opening Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Monday - Thursday</span>
                    <span className="text-text-primary">
                      11:00 AM - 10:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Friday - Sunday</span>
                    <span className="text-text-primary">
                      11:00 AM - 11:00 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-light rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-4">
                  Reservation Policy
                </h3>
                <ul className="space-y-3 text-text-muted text-sm">
                  <li>
                    • Reservations are held for 15 minutes past the booking time
                  </li>
                  <li>• For parties larger than 10, please call us directly</li>
                  <li>
                    • Cancellations must be made at least 2 hours in advance
                  </li>
                  <li>
                    • Special dietary requirements can be accommodated with
                    advance notice
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2704854619445!2d85.30904731506156!3d27.71539798279019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4bd%3A0x58099b1deffed8d4!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant location" />

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>);

}