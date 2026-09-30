import { Item } from "../Item/Item";
import clases from "./ItemList.module.css"; // Importación

export function ItemList({ productos }) {
    return(
        <div className={clases.contenedorLista}> {/* Reemplaza el style en línea */}
        {productos.filter(prod => prod.stock > 0).map(prod => (
            <Item key={prod.id} {...prod} />
        ))}
        </div>
    );
}
