import Image from "next/image"
import  "../../css/NavBar.css"
import Link from "next/link"

export default function NavBar() {
    return (
        <main className="main" >
            <nav>
                <div className="img"></div>
                <ul><Link href="/">
                    <li>Home</li>
                </Link>
                    <Link href="/Productos">
                    <li>Productos</li>
                    </Link>
                    <li>Sobre Nosotros</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </main>
    )
}
