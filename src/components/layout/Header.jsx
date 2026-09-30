import styles from "./Header.module.css";
import { Link } from "react-router-dom"; // 1. Importamos Link

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#8DE2D6",
        padding: "10px",
        textAlign: "center",
        marginTop: "20px",
        color: "black",
      }}
    >
      <h1>Mi Aplicacion React</h1>
      <nav>
        <ul className={styles.listaNav}>
          {/* 2. Usamos Link en lugar de <a> y 'to' en lugar de 'href'*/}
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/destacados">Destacados</Link>
          </li>
          <li>
            <Link to="/alta">Alta de producto</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/carrito">Carrito</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
