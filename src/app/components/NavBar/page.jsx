"use client"
import Link from "next/link";
import "../../css/NavBar.css";


export default function NavBar() {
  const toggleMenu = () => {
    const menu = document.getElementById('navLinks');
    menu.classList.toggle('show');
  };

  return (
    <main className="main">
      <nav className="nav">
        <div className="img"></div>
        <button className="menu-btn" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
        <ul id="navLinks">
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
