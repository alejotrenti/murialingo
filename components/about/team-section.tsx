'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Alejo',
    role: 'Estudiante 7to Informática B',
    image: '/alejo.jpg',
  },
  {
    name: 'Nicolas',
    role: 'Estudiante 7to Informática B',
    image: '/nico.jpg',
  },
  {
    name: 'Santiago',
    role: 'Estudiante 7to Informática B',
    image: '/santi.jpg',
  },
  {
    name: 'Franco',
    role: 'Estudiante 7to Informática B',
    image: '/colo.jpg',
  }
];

export function TeamSection() {
  return (
    <section className="py-20 bg-muted/50 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Conozca nuestro equipo</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}