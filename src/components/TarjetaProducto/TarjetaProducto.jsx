import styles from "./TarjetaProducto.module.css";

function TarjetaProducto({imagen, nombre, precio}) {
  return (
    <div className={styles.tarjeta}>
      <img src={ imagen }alt={ nombre } 
      style={{ width: "150px"}}/>
      <h3>{ nombre }</h3>
      <p>{ precio }</p>
    </div>
  );
}
export default TarjetaProducto;
