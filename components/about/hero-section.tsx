'use client';

import { Code2, Terminal, Cpu } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#16A34A] text-primary-foreground rounded-xl drop-shadow-xl">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Bienvenidos a MuriaLingo</h1>
          <p className="text-xl max-w-2xl mx-auto font-semibold">
            Donde aprender <u>programación</u> se convierte en una aventura excitante mediante desafios interactivos y divertidos
          </p>
        </div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <Code2 className="absolute top-10 left-10 w-16 h-16" />
        <Terminal className="absolute top-40 right-20 w-12 h-12" />
        <Cpu className="absolute bottom-20 left-1/4 w-14 h-14" />
      </div>
    </section>
  );
}