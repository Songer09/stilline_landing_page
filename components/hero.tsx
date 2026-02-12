import Image from "next/image"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end pb-16 pt-20 lg:pb-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-building.png"
          alt="Proyecto arquitectonico moderno de StillLine"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-background/70 font-medium">
            Estudio de Arquitectura & Inmobiliaria
          </p>
          <h1 className="font-serif text-4xl leading-tight text-background md:text-6xl lg:text-7xl text-balance">
            Arquitectura que no grita, pero permanece.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 lg:text-lg">
            Diseñamos espacios con la misma dedicación con la que diseñaríamos
            nuestra propia casa. Cada línea tiene propósito, cada espacio cuenta
            una historia.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center bg-accent px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Ver proyectos
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center justify-center border border-background/40 px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-background/10"
            >
              Conoce el estudio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
