import React, { useCallback, useState, createContext, useContext } from 'react';
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}
interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: {children: ReactNode;}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const addItem = useCallback((newItem: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev.map((item) =>
        item.id === newItem.id ?
        {
          ...item,
          quantity: item.quantity + 1
        } :
        item
        );
      }
      return [
      ...prev,
      {
        ...newItem,
        quantity: 1
      }];

    });
    setIsOpen(true);
  }, []);
  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);
  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(id);
        return;
      }
      setItems((prev) =>
      prev.map((item) =>
      item.id === id ?
      {
        ...item,
        quantity
      } :
      item
      )
      );
    },
    [removeItem]
  );
  const clearCart = useCallback(() => {
    setItems([]);
  }, []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        toggleCart
      }}>

      {children}
    </CartContext.Provider>);

}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}