'use client';

import { Target, Users, Brain } from 'lucide-react';

export function MissionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestra misión</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Aprender haciendo</h3>
            <p className="text-muted-foreground">
              Perfecciona tu programación mediante practicas interactivas y implementadolo en proyectos
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Impulsado por la comunidad</h3>
            <p className="text-muted-foreground">
              Aprende junto a una comunidad solidaria de compañeros programadores
            </p>
          </div>
          <div className="text-center p-6">
            <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Aprendizaje gamificado</h3>
            <p className="text-muted-foreground">
              Convierta conceptos complejos en desafios atrapantes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}