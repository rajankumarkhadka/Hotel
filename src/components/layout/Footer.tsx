import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-orange flex items-center justify-center">
                <span className="font-heading text-bg font-bold text-xl">
                  TK
                </span>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-gold">
                  Thak Khola
                </h3>
                <p className="text-sm text-text-muted">Kitchen</p>
              </div>
            </Link>
            <p className="text-text-muted leading-relaxed mb-6">
              Experience the authentic flavors of Nepal with a modern twist.
              Premium Thakali cuisine crafted with love and tradition.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-surface-elevated rounded-lg text-text-muted hover:text-gold hover:bg-gold/10 transition-colors"
                aria-label="Facebook">

                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-surface-elevated rounded-lg text-text-muted hover:text-gold hover:bg-gold/10 transition-colors"
                aria-label="Instagram">

                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-surface-elevated rounded-lg text-text-muted hover:text-gold hover:bg-gold/10 transition-colors"
                aria-label="Twitter">

                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/menu"
                  className="text-text-muted hover:text-gold transition-colors">

                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-text-muted hover:text-gold transition-colors">

                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/reservation"
                  className="text-text-muted hover:text-gold transition-colors">

                  Reservations
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-text-muted hover:text-gold transition-colors">

                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-text-muted hover:text-gold transition-colors">

                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-text-primary mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-text-muted">
                  Thamel, Kathmandu
                  <br />
                  Nepal 44600
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+9771234567890"
                  className="text-text-muted hover:text-gold transition-colors">

                  +977 1-234-567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@thakkhola.com"
                  className="text-text-muted hover:text-gold transition-colors">

                  info@thakkhola.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-text-primary mb-6">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-text-primary font-medium">Mon - Thu</p>
                  <p className="text-text-muted">11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-text-primary font-medium">Fri - Sun</p>
                  <p className="text-text-muted">11:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Thak Khola Kitchen. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-text-muted hover:text-gold transition-colors">

              Privacy Policy
            </a>
            <a
              href="#"
              className="text-text-muted hover:text-gold transition-colors">

              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}