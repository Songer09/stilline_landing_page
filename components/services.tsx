"use client"

import { useState } from "react"
import {
  Building2,
  FileText,
  Home,
  Layers,
  PenTool,
  Plus,
  Minus,
} from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Diseño Residencial",
    description:
      "Diseñamos casas y residencias que reflejan tu estilo de vida. Desde el concepto inicial hasta los planos ejecutivos, cada espacio se piensa para que lo habites con alma.",
    details: [
      "Anteproyecto y concepto arquitectonico",
      "Planos arquitectonicos completos",
      "Diseño de interiores",
      "Renders fotorrealistas",
      "Supervision de obra",
    ],
  },
  {
    icon: Building2,
    title: "Desarrollo Inmobiliario",
    description:
      "Acompañamos el ciclo completo de desarrollos: desde la factibilidad hasta la entrega. Creamos proyectos rentables sin sacrificar calidad ni diseño.",
    details: [
      "Estudio de factibilidad",
      "Diseño de proyecto integral",
      "Gestion de permisos y licencias",
      "Coordinacion con ingenieros y constructores",
      "Estrategia de comercializacion",
    ],
  },
  {
    icon: PenTool,
    title: "Interiorismo & Remodelacion",
    description:
      "Transformamos espacios existentes en lugares que cuentan historias. Remodelaciones que respetan la estructura pero elevan la experiencia.",
    details: [
      "Levantamiento del espacio actual",
      "Propuesta de diseño interior",
      "Seleccion de materiales y acabados",
      "Mobiliario y decoracion",
      "Ejecucion y entrega",
    ],
  },
  {
    icon: Layers,
    title: "Diseño Comercial",
    description:
      "Oficinas, locales y espacios comerciales que potencian tu marca. Diseños funcionales que generan experiencias memorables para tus clientes.",
    details: [
      "Diseño de espacios comerciales",
      "Branding arquitectonico",
      "Optimizacion de flujos",
      "Iluminacion y acabados especializados",
      "Adaptacion normativa",
    ],
  },
  {
    icon: FileText,
    title: "Tramites & Permisos",
    description:
      "Te guiamos en todo el proceso de gestion con las autoridades. Licencias, permisos de construccion, uso de suelo y toda la documentacion necesaria para que tu proyecto avance sin tropiezos.",
    details: [
      "Licencia de construccion",
      "Permiso de uso de suelo",
      "Alineamiento y numero oficial",
      "Dictamen de impacto urbano",
      "Registro ante catastro",
      "Escrituracion y tramites notariales",
    ],
  },
]

function ServiceItem({
  service,
}: {
  service: (typeof services)[0]
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 lg:py-8 text-left group"
      >
        <div className="flex items-center gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent/15">
            <service.icon className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h3 className="font-serif text-xl text-foreground lg:text-2xl">
              {service.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground max-w-xl hidden sm:block">
              {service.description}
            </p>
          </div>
        </div>
        <div className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-accent transition-colors">
          {isOpen ? (
            <Minus className="h-5 w-5" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="pb-6 lg:pb-8 pl-17">
          <p className="text-sm text-muted-foreground sm:hidden mb-4">
            {service.description}
          </p>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 pl-[4.25rem]">
            {service.details.map((detail) => (
              <li
                key={detail}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
            Servicios
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-5xl text-balance">
            Del concepto a la realidad
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Ofrecemos un acompañamiento integral en cada etapa de tu proyecto.
            Desde la primera idea hasta la entrega de llaves, incluyendo todos
            los tramites necesarios.
          </p>
        </div>

        {/* Services Accordion */}
        <div className="mt-16 border-t border-border">
          {services.map((service) => (
            <ServiceItem key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
