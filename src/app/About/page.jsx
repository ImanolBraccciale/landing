"use client"

import Image from "next/image"
import "./About.css"
export default function About (){

    
    return (
        <section>
            <h2 className="h2About">Historia de las delicias del hogar</h2>
            <div className="marco">
                <Image 
                src={require("../assets/Foods/About/contacto.jpg")}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50px",
                    boxShadow:" 0 0 20px rgba(0, 0, 0, 0.3)"
             
                }}
                />
            </div>
            <div className="texto">
            <h3 className="tittleAbout">Nuestra historia</h3>
            <p  className="parrafo">Lo de Lopez nace en General Villegas sinendo un lugar con
            con gastronomía variada como Pizzas, Lomos, Hamburguesas y Media Luna rellena.
            Nuestra misión es llenar y satisfacer el deseo alimenticio de las familias Villeguenses y alrededores
            para que en las siguientes genereaciones seamos recordamos como un evento familiar con cariño</p>
            </div>
        </section>
    )
}