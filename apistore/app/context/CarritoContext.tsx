"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// ✅ Definimos el tipo de producto
type Producto = {
  id: number;
  title: string;
  price: number;
  image?: string;
  category?: string;
  description?: string;
};

// ✅ Definimos el tipo del contexto
type CarritoContextType = {
  carrito: Producto[];
  agregarAlCarrito: (producto: Producto) => void;
  eliminarDelCarrito: (id: number) => void;
  total: number;
};

// ✅ Creamos el contexto tipado
const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const eliminarDelCarrito = (id: number) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const total = carrito.reduce((acc, prod) => acc + prod.price, 0);

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, total }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

// ✅ Hook personalizado con verificación de contexto
export const useCarrito = () => {
  const ctx = useContext(CarritoContext);
  if (!ctx) throw new Error("useCarrito debe usarse dentro de CarritoProvider");
  return ctx;
};
