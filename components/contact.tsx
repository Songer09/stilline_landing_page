"use client"

import React from "react"
import { useState } from "react"
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Instagram,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react"

/* ─── Section 1: Contact Info ─── */
export function ContactInfo() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
            Contacto
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-5xl text-balance">
            Comencemos a construir juntos
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Tu idea, nuestro compromiso. Estamos aqui para escucharte,
            orientarte y acompanarte en cada paso de tu proyecto. No dudes en
            contactarnos por el canal que prefieras.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Phone */}
          <a
            href="tel:+573022293841"
            className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-accent/5"
          >
            <div className="flex h-12 w-12 items-center justify-center bg-accent/15">
              <Phone className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Telefono / WhatsApp
              </p>
              <p className="mt-2 text-foreground font-medium">
                +57 302 229 3841
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Llamanos o escribenos por WhatsApp para una respuesta rapida.
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:matstill.arq@gmail.com"
            className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-accent/5"
          >
            <div className="flex h-12 w-12 items-center justify-center bg-accent/15">
              <Mail className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </p>
              <p className="mt-2 text-foreground font-medium">
                matstill.arq@gmail.com
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Para consultas detalladas o envio de documentos y planos.
            </p>
          </a>

          {/* Location */}
          <div className="flex flex-col gap-4 bg-background p-8">
            <div className="flex h-12 w-12 items-center justify-center bg-accent/15">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Ubicacion
              </p>
              <p className="mt-2 text-foreground font-medium">
                Barranquilla, Colombia
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Atendemos proyectos en toda la region Caribe y a nivel nacional.
            </p>
          </div>

          {/* Instagram */}
          <a
            href="https://instagram.com/stilline_students"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-accent/5"
          >
            <div className="flex h-12 w-12 items-center justify-center bg-accent/15">
              <Instagram className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Instagram
              </p>
              <p className="mt-2 text-foreground font-medium">
                @stilline_students
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Siguenos para ver avances de proyectos e inspiracion.
            </p>
          </a>
        </div>

        {/* Hours & Extra Info */}
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between bg-background p-8">
          <div className="flex items-center gap-4">
            <Clock className="h-5 w-5 text-accent shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Horario de atencion
              </p>
              <p className="text-xs text-muted-foreground">
                Lunes a Viernes: 8:00 AM - 6:00 PM | Sabados: 9:00 AM - 1:00
                PM
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MessageCircle className="h-5 w-5 text-accent shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Primera consulta sin compromiso
              </p>
              <p className="text-xs text-muted-foreground">
                Conversemos sobre tu idea, sin costos ni obligaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 2: Appointment Form ─── */
export function AppointmentForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    modality: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setFormState({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      modality: "",
      message: "",
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="agendar" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Info about scheduling */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
              Agenda tu cita
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-5xl text-balance">
              Conversemos sobre tu proyecto
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Reserva una cita con nuestro equipo para discutir tu vision. Ya
              sea que tengas un terreno listo, una idea en mente o simplemente
              curiosidad, queremos escucharte.
            </p>

            {/* What to expect */}
            <div className="mt-12 flex flex-col gap-6">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Que esperar de la cita
              </h3>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-accent text-accent-foreground text-xs font-bold">
                  1
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Escuchamos tu idea
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Nos cuentas que tienes en mente, tu presupuesto estimado y
                    tus necesidades principales.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-accent text-accent-foreground text-xs font-bold">
                  2
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Evaluamos la viabilidad
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Analizamos juntos las posibilidades del proyecto, normativa
                    aplicable y alcance general.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-accent text-accent-foreground text-xs font-bold">
                  3
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Te presentamos una ruta
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Definimos los siguientes pasos, tiempos estimados y como
                    podemos ayudarte a hacerlo realidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick contact reminder */}
            <div className="mt-12 flex items-center gap-3 bg-card p-5">
              <ArrowRight className="h-4 w-4 text-accent shrink-0" />
              <p className="text-sm text-muted-foreground">
                Si prefieres, tambien puedes escribirnos directamente al{" "}
                <a
                  href="https://wa.me/573022293841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  WhatsApp
                </a>{" "}
                para una respuesta inmediata.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card p-8 lg:p-10">
            <h3 className="font-serif text-xl text-foreground">
              Reserva tu cita
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Completa el formulario y nos pondremos en contacto para confirmar
              tu cita.
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center bg-accent/15 rounded-full">
                  <Send className="h-6 w-6 text-accent" />
                </div>
                <p className="mt-4 font-serif text-xl text-foreground">
                  Solicitud enviada
                </p>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                  Hemos recibido tu solicitud de cita. Te confirmaremos el
                  horario por correo o WhatsApp.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-5"
              >
                <div>
                  <label
                    htmlFor="appt-name"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="appt-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full border-b border-border bg-transparent py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="appt-email"
                      className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="appt-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full border-b border-border bg-transparent py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="appt-phone"
                      className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                    >
                      Telefono / WhatsApp
                    </label>
                    <input
                      id="appt-phone"
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full border-b border-border bg-transparent py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none transition-colors"
                      placeholder="+57 302 229 3841"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="appt-service"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                  >
                    Servicio de interes
                  </label>
                  <select
                    id="appt-service"
                    value={formState.service}
                    onChange={(e) =>
                      setFormState({ ...formState, service: e.target.value })
                    }
                    className="w-full border-b border-border bg-transparent py-2.5 text-foreground focus:border-accent focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="residencial">Diseno Residencial</option>
                    <option value="inmobiliario">
                      Desarrollo Inmobiliario
                    </option>
                    <option value="interiorismo">
                      Interiorismo & Remodelacion
                    </option>
                    <option value="comercial">Diseno Comercial</option>
                    <option value="tramites">Tramites & Permisos</option>
                    <option value="otro">Otro / No estoy seguro</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="appt-date"
                      className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                    >
                      Fecha preferida
                    </label>
                    <input
                      id="appt-date"
                      type="date"
                      value={formState.date}
                      onChange={(e) =>
                        setFormState({ ...formState, date: e.target.value })
                      }
                      className="w-full border-b border-border bg-transparent py-2.5 text-foreground focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="appt-modality"
                      className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                    >
                      Modalidad
                    </label>
                    <select
                      id="appt-modality"
                      value={formState.modality}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          modality: e.target.value,
                        })
                      }
                      className="w-full border-b border-border bg-transparent py-2.5 text-foreground focus:border-accent focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Selecciona</option>
                      <option value="presencial">Presencial</option>
                      <option value="virtual">Virtual (videollamada)</option>
                      <option value="telefonica">Telefonica</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="appt-message"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                  >
                    Cuentanos sobre tu proyecto
                  </label>
                  <textarea
                    id="appt-message"
                    rows={3}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full border-b border-border bg-transparent py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tienes un terreno? Un presupuesto estimado? Cuentanos lo que quieras..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center bg-accent px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-accent-foreground transition-colors hover:bg-accent/90 w-full sm:w-auto self-start"
                >
                  Solicitar cita
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
