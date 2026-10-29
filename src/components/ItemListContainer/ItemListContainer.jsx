import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css"; // Importamos el módulo CSS
import { useEffect, useState } from "react";

export function ItemListContainer({ Mensaje }) {
  // --- CÓDIGO ANTERIOR COMENTADO COMO RESPALDO ---
  /*
  const productos = [
    {
      id: "6",
      nombre: "Notebook Pro",
      precio: 22000,
      stock: 15,
      imagen: "/images/NotebookPro.jpeg",
    },
    {
      id: "4",
      nombre: "Monitor Curvo",
      precio: 120000,
      stock: 25,
      imagen: "/images/MonitorCurvo.jpg",
    },
    {
      id: "7",
      nombre: "Teclado Mecanico",
      precio: 35000,
      stock: 50,
      imagen: "/images/TecladoMecanico.jpg",
    },
    {
      id: "2",
      nombre: "Camara Nikon",
      precio: 97500,
      stock: 10,
      imagen: "/images/CamaraNikon.webp",
    },
  ];
  */

  // --- NUEVA LÓGICA CON FETCH Y ESTADO (CLASE 8) ---
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) =>
        console.error("Error al cargar los productos:", error),
      );
  }, []);

  return (
    <div style={{ marginBottom: "40px" }}>
      {" "}
      {/* Espacio extra abajo del bloque */}
      {/* Aplicamos la clase y centramos el texto */}
      <h2 className={styles.subtitulo} style={{ textAlign: "center" }}>
        {Mensaje}
      </h2>
      {/* Contenedor con la clase .productos para centrar las tarjetas */}
      <div className={styles.productos}>
        <ItemList productos={productos} />
      </div>
    </div>
  );
}
