const steps = [
  {
    number: "01",
    title: "Escuchamos",
    description:
      "Todo comienza con una conversacion. Entendemos tus necesidades, sueños y el contexto del proyecto para crear una vision compartida.",
  },
  {
    number: "02",
    title: "Conceptualizamos",
    description:
      "Transformamos tus ideas en un concepto solido. Creamos moodboards, esquemas y la propuesta arquitectonica que guiara el diseño.",
  },
  {
    number: "03",
    title: "Diseñamos",
    description:
      "Desarrollamos los planos, renders y toda la documentacion tecnica. Cada detalle se piensa, cada linea tiene razon de ser.",
  },
  {
    number: "04",
    title: "Materializamos",
    description:
      "Acompañamos la construccion y gestion de permisos. Supervisamos cada etapa para que el resultado sea fiel al diseño y a tu vision.",
  },
]

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
            Proceso
          </p>
          <h2 className="mt-3 font-serif text-3xl text-background md:text-5xl text-balance">
            Como trabajamos
          </h2>
          <p className="mt-6 text-base leading-relaxed text-background/60">
            Un proceso claro, cercano y transparente. Te acompañamos en cada
            paso para que siempre sepas donde estamos y hacia donde vamos.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 gap-px bg-background/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-foreground p-8 lg:p-10 flex flex-col"
            >
              <span className="font-serif text-4xl text-accent/60">
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-xl text-background">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-background/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
