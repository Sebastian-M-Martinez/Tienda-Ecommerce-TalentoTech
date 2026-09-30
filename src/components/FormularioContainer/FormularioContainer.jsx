import React, { useState } from "react";
import { FormularioProducto } from "../FormularioProducto/FormularioProducto";

export function FormularioContainer() {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    precio: "",
    stock: "",
  });

  // 1. Nuevo estado para el archivo de imagen
  const [imagenFile, setImagenFile] = useState(null);
  
  // Creacion estado loading (ejercicio clase-06)
  const [loading, setLoading] = useState(false);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };

  // 2. Nueva funcion para manejar el cambio del input de tipo "file"
  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    // Validamos que el usuario haya seleccionado una imagen
    if (!imagenFile) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }

    // --- Logica para subir la imagen a Imgbb ---
    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;

    const formData = new FormData();
    formData.append("image", imagenFile);

    try {
      // Activando estado de carga (Ejericio clae-06)
      setLoading(true);

      console.log("Subiendo imagen a Imgbb...");
      const respuestaImgbb = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const datosImgbb = await respuestaImgbb.json();

      if (datosImgbb.success) {
        console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);

        // Unimos la URL de la imagen con el resto de los datos del formulario
        const productoCompleto = {
          ...datosForm,
          urlImagen: datosImgbb.data.url,
        };

        console.log(
          "Enviando los siguientes datos COMPLETOS a la API:",
          productoCompleto,
        );
      } else {
        throw new Error("La subida de la imagen a Imgbb falló.");
      }
    } catch (error) {
      console.error("Error en el proceso de envío:", error);
      alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
    }finally{
      // Desactivando el estado de carga (Ejericio clase-06)
        setLoading(false);
      }
};

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      // Pasamos la nueva funcion como prop
      manejarCambioImagen={manejarCambioImagen}
      // Pasamos la nueva funcion prop del Ejecrcicio clase-06
      loading={loading}
    />
  );
}
