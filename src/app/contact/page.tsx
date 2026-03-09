"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SendIcon,
  CheckCircleIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon } from
'lucide-react';
import { Button } from '@/components/ui/Button';
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
  const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Visit Us',
    details: ['Thamel, Kathmandu', 'Nepal 44600'],
    link: 'https://maps.google.com'
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    details: ['+977 1-234-567-890', '+977 98-XXXX-XXXX'],
    link: 'tel:+9771234567890'
  },
  {
    icon: MailIcon,
    title: 'Email Us',
    details: ['info@thakkhola.com', 'reservations@thakkhola.com'],
    link: 'mailto:info@thakkhola.com'
  },
  {
    icon: ClockIcon,
    title: 'Opening Hours',
    details: ['Mon-Thu: 11AM - 10PM', 'Fri-Sun: 11AM - 11PM'],
    link: null
  }];

  return (
    <main className="w-full min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=600&fit=crop"
            alt="Contact background"
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
              Get in Touch
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for reservations, feedback,
              or any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) =>
            <motion.div
              key={info.title}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: index * 0.1
              }}
              className="glass-light rounded-2xl p-6 text-center">

                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-orange flex items-center justify-center">
                  <info.icon className="w-7 h-7 text-bg" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, i) =>
              info.link ?
              <a
                key={i}
                href={info.link}
                className="block text-text-muted hover:text-gold transition-colors">

                      {detail}
                    </a> :

              <p key={i} className="text-text-muted">
                      {detail}
                    </p>

              )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Map and Form */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8
              }}>

              <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">
                Find Us
              </h2>
              <div className="rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px]">
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
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8
              }}>

              <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">
                Send Us a Message
              </h2>

              {isSuccess ?
              <div className="glass-light rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircleIcon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-text-muted mb-6">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <Button onClick={() => setIsSuccess(false)}>
                    Send Another Message
                  </Button>
                </div> :

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-primary mb-2">

                        Your Name *
                      </label>
                      <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-bg border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors ${errors.name ? 'border-red-500' : 'border-border'}`}
                      placeholder="John Doe" />

                      {errors.name &&
                    <p className="mt-1 text-sm text-red-400">
                          {errors.name}
                        </p>
                    }
                    </div>

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
                      className={`w-full px-4 py-3 bg-bg border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors ${errors.email ? 'border-red-500' : 'border-border'}`}
                      placeholder="john@example.com" />

                      {errors.email &&
                    <p className="mt-1 text-sm text-red-400">
                          {errors.email}
                        </p>
                    }
                    </div>
                  </div>

                  <div>
                    <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-text-primary mb-2">

                      Subject *
                    </label>
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-bg border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors ${errors.subject ? 'border-red-500' : 'border-border'}`}
                    placeholder="How can we help?" />

                    {errors.subject &&
                  <p className="mt-1 text-sm text-red-400">
                        {errors.subject}
                      </p>
                  }
                  </div>

                  <div>
                    <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-2">

                      Message *
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-bg border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-border'}`}
                    placeholder="Tell us more..." />

                    {errors.message &&
                  <p className="mt-1 text-sm text-red-400">
                        {errors.message}
                      </p>
                  }
                  </div>

                  <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                  rightIcon={<SendIcon className="w-5 h-5" />}>

                    Send Message
                  </Button>
                </form>
              }
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
            Follow Us
          </h2>
          <p className="text-text-muted mb-8">
            Stay connected for updates, special offers, and behind-the-scenes
            moments
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-text-muted hover:bg-gold hover:text-bg transition-all"
              aria-label="Facebook">

              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-text-muted hover:bg-gold hover:text-bg transition-all"
              aria-label="Instagram">

              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-text-muted hover:bg-gold hover:text-bg transition-all"
              aria-label="Twitter">

              <TwitterIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </main>);

}