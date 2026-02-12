"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Residencia Serena",
    category: "Residencial",
    location: "Zona Norte",
    year: "2025",
    image: "/images/project-1.png",
    description:
      "Casa unifamiliar de 320m2 con diseño contemporaneo que integra espacios abiertos con la naturaleza circundante.",
  },
  {
    title: "Torres del Valle",
    category: "Desarrollo Inmobiliario",
    location: "Centro Urbano",
    year: "2024",
    image: "/images/project-2.png",
    description:
      "Complejo residencial de 24 apartamentos con amenidades premium y acabados de alta gama.",
  },
  {
    title: "Edificio Nexus",
    category: "Comercial",
    location: "Distrito Financiero",
    year: "2024",
    image: "/images/project-3.png",
    description:
      "Edificio de oficinas de 6 pisos con certificacion sostenible y espacios de coworking.",
  },
  {
    title: "Loft Madera Viva",
    category: "Interiorismo",
    location: "Zona Este",
    year: "2025",
    image: "/images/project-4.png",
    description:
      "Reforma integral de un loft de 180m2, combinando madera noble con concreto aparente.",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
              Portafolio
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-5xl text-balance">
              Proyectos que hablan por si mismos
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Cada proyecto es una extension emocional. No diseñamos como quien
            entrega un producto, sino como quien crea un espacio para vivir,
            sentir y existir.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                  <span>{project.category}</span>
                  <span className="h-px w-4 bg-border" />
                  <span>{project.location}</span>
                  <span className="h-px w-4 bg-border" />
                  <span>{project.year}</span>
                </div>
                <h3 className="mt-3 font-serif text-2xl text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-medium group-hover:gap-3 transition-all">
                  <span>Ver proyecto</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
