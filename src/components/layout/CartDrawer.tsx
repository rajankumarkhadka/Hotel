"use client";

import { motion, AnimatePresence } from 'framer-motion';
import {
  XIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  ShoppingBagIcon } from
'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import Link from 'next/link';
export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    totalItems,
    totalPrice,
    updateQuantity,
    removeItem,
    clearCart
  } = useCart();
  return (
    <AnimatePresence>
      {isOpen &&
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={closeCart} />

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
          className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-surface z-50 flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBagIcon className="w-6 h-6 text-gold" />
                <h2 className="font-heading text-xl text-text-primary">
                  Your Order
                </h2>
                {totalItems > 0 &&
              <span className="px-2 py-0.5 bg-gold/20 text-gold text-sm font-medium rounded-full">
                    {totalItems} items
                  </span>
              }
              </div>
              <button
              onClick={closeCart}
              className="p-2 text-text-muted hover:text-text-primary transition-colors"
              aria-label="Close cart">

                <XIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ?
            <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBagIcon className="w-16 h-16 text-border mb-4" />
                  <p className="text-text-muted text-lg mb-2">
                    Your cart is empty
                  </p>
                  <p className="text-text-muted text-sm mb-6">
                    Add some delicious items from our menu
                  </p>
                  <Link href="/menu" onClick={closeCart}>
                    <Button variant="outline">Browse Menu</Button>
                  </Link>
                </div> :

            <ul className="space-y-4">
                  {items.map((item, index) =>
              <motion.li
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: index * 0.05
                }}
                className="flex gap-4 p-4 bg-surface-elevated rounded-xl">

                      <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg" />

                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-text-primary truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-text-muted">
                          {item.category}
                        </p>
                        <p className="text-gold font-semibold mt-1">
                          Rs. {item.price}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 text-text-muted hover:text-red-400 transition-colors"
                    aria-label="Remove item">

                          <TrashIcon className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-2 bg-bg rounded-lg p-1">
                          <button
                      onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                      }
                      className="p-1 text-text-muted hover:text-gold transition-colors"
                      aria-label="Decrease quantity">

                            <MinusIcon className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                      onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                      }
                      className="p-1 text-text-muted hover:text-gold transition-colors"
                      aria-label="Increase quantity">

                            <PlusIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.li>
              )}
                </ul>
            }
            </div>

            {/* Footer */}
            {items.length > 0 &&
          <div className="p-6 border-t border-border space-y-4">
                <div className="flex items-center justify-between">
                  <button
                onClick={clearCart}
                className="text-sm text-text-muted hover:text-red-400 transition-colors">

                    Clear all
                  </button>
                  <div className="text-right">
                    <p className="text-sm text-text-muted">Subtotal</p>
                    <p className="text-2xl font-heading font-bold text-gold">
                      Rs. {totalPrice.toLocaleString()}
                    </p>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
                <p className="text-xs text-text-muted text-center">
                  Delivery charges calculated at checkout
                </p>
              </div>
          }
          </motion.div>
        </>
      }
    </AnimatePresence>);

}