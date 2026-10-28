"use client";

import { createContext, useCallback, useContext, useEffect, useReducer } from "react";

// ── Cart state (localStorage-persisted) ──────────────────────────────────────

const STORAGE_KEY = "hsn-cart";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const idx = state.findIndex((i) => i.id === action.item.id);
      if (idx > -1) {
        const next = [...state];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...state, { ...action.item, qty: 1 }];
    }
    case "REMOVE":
      return state.filter((i) => i.id !== action.id);
    case "INC": {
      return state.map((i) => (i.id === action.id ? { ...i, qty: i.qty + 1 } : i));
    }
    case "DEC": {
      return state
        .map((i) => (i.id === action.id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0);
    }
    case "CLEAR":
      return [];
    case "INIT":
      return action.items;
    default:
      return state;
  }
}

// ── Context ───────────────────────────────────────────────────────────────────

const CartCtx = createContext(null);

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, []);

  // Hydrate from localStorage once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "INIT", items: JSON.parse(raw) });
    } catch {
      /* ignore */
    }
  }, []);

  // Persist every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const add = useCallback((item) => dispatch({ type: "ADD", item }), []);
  const remove = useCallback((id) => dispatch({ type: "REMOVE", id }), []);
  const inc = useCallback((id) => dispatch({ type: "INC", id }), []);
  const dec = useCallback((id) => dispatch({ type: "DEC", id }), []);
  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartCtx.Provider value={{ items, add, remove, inc, dec, clear, count }}>
      {children}
    </CartCtx.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};

// ── WhatsApp order URL builder ────────────────────────────────────────────────
export function buildOrderUrl({ items, name, phone, note, waNumber }) {
  const lines = items.map(
    (i) => `• ${i.name} x${i.qty}${i.wholesale ? ` (₹${i.wholesale}/- each)` : ""}`,
  );
  const total = items
    .filter((i) => i.wholesale)
    .reduce((s, i) => s + i.wholesale * i.qty, 0);

  const body = [
    `Hi Harsha Sai Nursery! I'd like to place an order.`,
    ``,
    `*Name:* ${name}`,
    phone ? `*Phone:* ${phone}` : null,
    ``,
    `*Order:*`,
    ...lines,
    total > 0 ? `\n*Approx total:* ₹${total}/-` : null,
    note ? `\n*Note:* ${note}` : null,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return `https://wa.me/${waNumber}?text=${encodeURIComponent(body)}`;
}
