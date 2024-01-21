import Image from "next/image";
import Link from "next/link";
import "../../css/NavBar.css";

export default function NavBar() {
  return (
    <main className="main">
      <nav>
        <div className="img"></div>
        <ul>
          <Link href="/">
            <li className="nav-item red-btn">Home</li>
          </Link>
          <Link href="/Productos">
            <li className="nav-item yellow-btn">Productos</li>
          </Link>
          <Link href="/About">
            <li className="nav-item green-btn">Sobre Nosotros</li>
          </Link>
  
        </ul>
      </nav>
    </main>
  );
}
