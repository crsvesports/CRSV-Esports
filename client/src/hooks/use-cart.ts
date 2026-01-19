import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: { id: number; name: string; price: number; image: string }) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const calculateTotal = (items: CartItem[]) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  total: 0,
  addItem: (product) => {
    const items = get().items;
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      set({ items: updatedItems, total: calculateTotal(updatedItems) });
    } else {
      const updatedItems = [...items, { ...product, quantity: 1 }];
      set({ items: updatedItems, total: calculateTotal(updatedItems) });
    }
  },
  removeItem: (id) => {
    const updatedItems = get().items.filter((item) => item.id !== id);
    set({ items: updatedItems, total: calculateTotal(updatedItems) });
  },
  updateQuantity: (id, quantity) => {
    const updatedItems = get().items.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
    ).filter(item => item.quantity > 0);
    set({ items: updatedItems, total: calculateTotal(updatedItems) });
  },
  clearCart: () => set({ items: [], total: 0 }),
}));
