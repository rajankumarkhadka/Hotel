"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, ShoppingBagIcon } from 'lucide-react';
import { useCart } from '../../context/CartContext';
const navLinks = [
{
  path: '/',
  label: 'Home'
},
{
  path: '/menu',
  label: 'Menu'
},
{
  path: '/about',
  label: 'About'
},
{
  path: '/reservation',
  label: 'Reservation'
},
{
  path: '/gallery',
  label: 'Gallery'
},
{
  path: '/contact',
  label: 'Contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  return (
    <>
      <motion.header
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-orange flex items-center justify-center">
                <span className="font-heading text-bg font-bold text-lg">
                  TK
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-xl font-semibold text-gold">
                  Thak Khola
                </h1>
                <p className="text-xs text-text-muted -mt-1">Kitchen</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 ${pathname === link.path ? 'text-gold' : 'text-text-primary hover:text-gold'}`}>

                  {link.label}
                  {pathname === link.path &&
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full" />

                }
                </Link>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={openCart}
                className="relative p-2 text-text-primary hover:text-gold transition-colors"
                aria-label="Open cart">

                <ShoppingBagIcon className="w-6 h-6" />
                {totalItems > 0 &&
                <motion.span
                  initial={{
                    scale: 0
                  }}
                  animate={{
                    scale: 1
                  }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-orange text-white text-xs font-bold rounded-full flex items-center justify-center">

                    {totalItems}
                  </motion.span>
                }
              </button>

              <Link
                href="/reservation"
                className="hidden md:inline-flex px-5 py-2.5 bg-gradient-to-r from-gold to-gold-light text-bg font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all duration-300">

                Book Table
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-text-primary hover:text-gold transition-colors"
                aria-label="Open menu">

                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)} />

            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200
            }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-surface z-50 lg:hidden">

              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="font-heading text-xl text-gold">Menu</span>
                  <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Close menu">

                    <XIcon className="w-6 h-6" />
                  </button>
                </div>
                <nav className="flex-1 p-6">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) =>
                  <motion.li
                    key={link.path}
                    initial={{
                      opacity: 0,
                      x: 20
                    }}
                    animate={{
                      opacity: 1,
                      x: 0
                    }}
                    transition={{
                      delay: index * 0.05
                    }}>

                        <Link
                      href={link.path}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${pathname === link.path ? 'bg-gold/10 text-gold' : 'text-text-primary hover:bg-white/5'}`}>

                          {link.label}
                        </Link>
                      </motion.li>
                  )}
                  </ul>
                </nav>
                <div className="p-6 border-t border-border">
                  <Link
                  href="/reservation"
                  className="block w-full py-4 bg-gradient-to-r from-gold to-gold-light text-bg font-semibold rounded-lg text-center">

                    Book a Table
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>);

}