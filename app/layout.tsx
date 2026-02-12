import React from "react"
import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'

import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'StillLine | Arquitectura que permanece',
  description:
    'Estudio de arquitectura e inmobiliaria. Diseño que se habita desde el alma. Proyectos residenciales, comerciales y desarrollos inmobiliarios.',
  keywords: ['arquitectura', 'inmobiliaria', 'StillLine', 'diseño', 'proyectos', 'desarrollo urbano'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
