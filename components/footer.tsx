import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-serif text-2xl tracking-tight text-foreground">
              STILLLINE
            </span>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs">
              Arquitectura que no grita, pero permanece. Diseñamos espacios con
              alma, dedicacion y proposito.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Navegacion
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="#inicio"
                className="text-sm text-foreground hover:text-accent transition-colors"
              >
                Inicio
              </a>
              <a
                href="#proyectos"
                className="text-sm text-foreground hover:text-accent transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#nosotros"
                className="text-sm text-foreground hover:text-accent transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#servicios"
                className="text-sm text-foreground hover:text-accent transition-colors"
              >
                Servicios
              </a>
              <a
                href="#contacto"
                className="text-sm text-foreground hover:text-accent transition-colors"
              >
                Contacto
              </a>
            </nav>
          </div>

          {/* Contact Summary */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Contacto
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+573022293841"
                className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                +57 302 229 3841
              </a>
              <a
                href="mailto:matstill.arq@gmail.com"
                className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                matstill.arq@gmail.com
              </a>
              <a
                href="https://instagram.com/stilline_students"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @stilline_students
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} StillLine. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground italic">
            Diseño que se habita desde el alma.
          </p>
        </div>
      </div>
    </footer>
  )
}
