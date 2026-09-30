import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom"; // Importamos Outlet
// Todo lo que pongamos dentro de <Layout> en App.jsx será el "children".
function Layout() {
  return (
    <div>
      <Header />
      <main>
        {/* Aquí se va a inyectar el componente de la ruta activa */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
