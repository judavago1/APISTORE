"use client";
import { useCarrito } from "../context/CarritoContext";

export default function Menu() {
  const { carrito } = useCarrito();

  return (
    <nav
      className="c-menu"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#007bff",
        padding: "10px 0",
        position: "fixed",
        bottom: 0,
        width: "100%",
        color: "white",
        fontSize: "24px",
      }}
    >
      <a href="./index.html" style={{ textDecoration: "none", color: "white" }}>
        🏠
      </a>
      <a
        href="./informativa/index.html"
        style={{ textDecoration: "none", color: "white" }}
      >
        ℹ️
      </a>
      <a
        href="./original/index.html"
        style={{ textDecoration: "none", color: "white" }}
      >
        🌟
      </a>
      <a
        href="./favoritos/index.html"
        style={{ textDecoration: "none", color: "white" }}
      >
        🛒 {carrito.length}
      </a>
    </nav>
  );
}
