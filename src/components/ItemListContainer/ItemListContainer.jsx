import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css"; // Importamos el módulo CSS

export function ItemListContainer({ Mensaje }) {
    const productos = [
        { id: '1234', nombre: 'Notebook Pro', precio: 12000, stock: 15 },
        { id: '2344', nombre: 'Monitor Curvo', precio: 45000, stock: 25 },
        { id: '2545', nombre: 'Teclado Mecanico', precio: 15000, stock: 50 },
    ];

    return (
        <div style={{ marginBottom: '40px' }}> {/* Espacio extra abajo del bloque */}
            {/* Aplicamos la clase y centramos el texto */}
            <h2 className={styles.subtitulo} style={{ textAlign: 'center' }}>
                {Mensaje}
            </h2>
            
            {/* Contenedor con la clase .productos para centrar las tarjetas */}
            <div className={styles.productos}>
                <ItemList productos={productos} />
            </div>
        </div>
    );
}