import React from "react";

export default function Header({ titulo }: { titulo?: string }) {
  return (
    <header
      style={{
        backgroundColor: "#007bff",
        color: "white",
        textAlign: "center",
        padding: "15px 0",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>ApiStore</h1>
      <h2 style={{ margin: "5px 0 0", fontSize: "18px", fontWeight: "normal" }}>
        {titulo || "Catálogo"}
      </h2>
    </header>
  );
}
