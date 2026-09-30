import React from "react";

// Por ahora, es un componente super simple. Solo muestra el HTML: export function FormularioProducto(){}

// Ahora recibe los datos y las funciones por props: export function FormularioProducto({ datosForm, manejarCambio, manejarEnvio }){}
export function FormularioProducto({
  datosForm,
  manejarCambio,
  manejarEnvio,
  manejarCambioImagen,
  loading,
}) {
  // Diseño
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "24rem",
    margin: "3rem auto",
    padding: "1.5rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    gap: "16px",
  };

  return (
    <form style={formStyle} onSubmit={manejarEnvio}>
      <h3>Agregar Nuevo Producto</h3>
      <div>
        <label>Nombre del Producto:</label>
        <input
          type="text"
          placeholder="Ej: Teclado Mecanico"
          name="nombre" // Atributo clave para identificar el input
          value={datosForm.nombre}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Precio:</label>
        <input
          type="number"
          placeholder="ej: 95"
          name="precio" // Atributo clave
          value={datosForm.precio}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Stock:</label>
        <input
          type="number"
          placeholder="Ej: 5"
          name="stock" // Atributo clave
          value={datosForm.stock}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Imagen:</label>
        <input
          type="file"
          //placeholder="https://..."
          name="urlImagen" // Atributo clave
          //value={datosForm.imagen}
          onChange={manejarCambioImagen}
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Guardando producto..." : "Guardar Producto"}
      </button>
    </form>
  );
}
