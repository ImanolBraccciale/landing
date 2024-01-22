"use client"

import Image from "next/image"
import "./About.css"
export default function About() {


    return (
        <section className="containerAbout">
            <h2 className="h2About">Historia de las delicias del hogar</h2>
            <div className="marco">
           
      <Image alt="asd"
                        src={require("../assets/Foods/About/contacto.jpg")}
                        layout="responsive"
                    />
           
            </div>
            <div className="texto">
                <h3 className="tittleAbout">Nuestra historia</h3>
                <p className="parrafo">Lo de Lopez nace en General Villegas sinendo un lugar con
                    con gastronomía variada como Pizzas, Lomos, Hamburguesas y Media Luna rellena.
                    Nuestra misión es llenar y satisfacer el deseo alimenticio de las familias Villeguenses y alrededores
                    para que en las siguientes genereaciones seamos recordamos como un evento familiar con cariño</p>
            </div>
        </section>
    )
}