import styles from "./TarjetaContacto.module.css";

function TarjetaContacto({ nombre, puesto, email, foto }) {
  return (
    <div className={styles.tarjeta}>
      {/* Quitamos el style={{ width: "150px" }} */}
      <img src={foto} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{puesto}</p>
      <p>{email}</p>
    </div>
  );
}

export default TarjetaContacto;
