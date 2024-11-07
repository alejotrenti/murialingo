'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Alejo',
    role: 'Estudiante 7to Informática B',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
  },
  {
    name: 'Nicolas',
    role: 'Estudiante 7to Informática B',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    name: 'Santiago',
    role: 'Estudiante 7to Informática B',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Franco',
    role: 'Estudiante 7to Informática B',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
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