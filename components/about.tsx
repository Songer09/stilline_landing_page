import Image from "next/image"
import { Compass, Heart, Lightbulb, Shield } from "lucide-react"

const values = [
  {
    icon: Compass,
    title: "Flexibilidad",
    description:
      "No imponemos estilos; interpretamos contextos. Nos adaptamos al cliente y al entorno sin perder la esencia.",
  },
  {
    icon: Heart,
    title: "Empatia",
    description:
      "Nos ponemos en el lugar de quien vivira lo que diseñamos. Cada espacio nace de escuchar.",
  },
  {
    icon: Lightbulb,
    title: "Criterio",
    description:
      "No todo vale. Cada decision de diseño tiene una razon fundamentada y un proposito claro.",
  },
  {
    icon: Shield,
    title: "Cuidado",
    description:
      "Cada proyecto lleva nuestro sello y nuestra entrega. Diseñamos como si fueramos a habitarlo.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/about-studio.png"
              alt="Estudio StillLine - espacio de trabajo creativo"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
              Sobre nosotros
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-5xl text-balance">
              Diseño que se habita desde el alma
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              En StillLine nos dedicamos a diseñar soluciones arquitectonicas
              innovadoras, funcionales y visualmente impactantes. Trabajamos en
              equipo con profesionales especializados para ofrecer resultados
              que superen las expectativas.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Aspiramos a convertirnos en una marca internacional de
              arquitectura reconocida por su capacidad de diseñar y desarrollar
              cualquier tipo de proyecto con excelencia, eficiencia y una vision
              integral.
            </p>

            {/* Values Grid */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-accent/15">
                    <value.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
