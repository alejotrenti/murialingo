'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, Trophy, BookOpen } from 'lucide-react';

const stats = [
  {
    label: 'Lenguajes de programación',
    value: '4+',
    icon: Code,
  },
  {
    label: 'Estudiantes activos',
    value: '10+',
    icon: Users,
  },
  {
    label: 'Desafios completados',
    value: '10+',
    icon: Trophy,
  },
  {
    label: 'Retos implementados',
    value: '25+',
    icon: BookOpen,
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <CardContent className="flex flex-col items-center p-6">
                  <Icon className="w-8 h-8 mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground text-center">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}