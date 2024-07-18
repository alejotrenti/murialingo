import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    // Delete all existing data
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
      db.delete(schema.userSubscription),
    ]);

    // Insert courses
    const courses = await db
      .insert(schema.courses)
      .values([
        { title: "HTML", imageSrc: "/html.svg" },
        { title: "CSS", imageSrc: "/css.svg" },
        { title: "JavaScript", imageSrc: "/js.svg" },
        { title: "Python", imageSrc: "/python.svg" },
        { title: "SQL", imageSrc: "/sql.svg" },
      ])
      .returning();

    // For each course, insert units
    for (const course of courses) {
      const units = await db
        .insert(schema.units)
        .values([
          {
            courseId: course.id,
            title: "Unidad 1",
            description: `Introducción y fundamentos de ${course.title}`,
            order: 1,
          },
          {
            courseId: course.id,
            title: "Unidad 2",
            description: `Conceptos intermedios de ${course.title}`,
            order: 2,
          },
          {
            courseId: course.id,
            title: "Unidad 3",
            description: `Funcionalidades avanzadas de ${course.title}`,
            order: 3,
          },
          {
            courseId: course.id,
            title: "Unidad 4",
            description: `Aplicaciones prácticas de ${course.title}`,
            order: 4,
          },
          {
            courseId: course.id,
            title: "Unidad 5",
            description: `Mejores prácticas y optimización de ${course.title}`,
            order: 5,
          },
          {
            courseId: course.id,
            title: "Unidad 2",
            description: `Conceptos intermedios de ${course.title}`,
            order: 2,
          },
        ])
        .returning();

      // For each unit, insert lessons
      for (const unit of units) {
        const lessons = await db
          .insert(schema.lessons)
          .values([
            { unitId: unit.id, title: "Introducción y fundamentos", order: 1 },
            { unitId: unit.id, title: "Conceptos intermedios", order: 2 },
            { unitId: unit.id, title: "Funcionalidades avanzadas", order: 3 },
            { unitId: unit.id, title: "Aplicaciones prácticas", order: 4 },
            { unitId: unit.id, title: "Conceptos intermedios", order: 5 },
          ])
          .returning();

        // For each lesson, insert challenges
        for (const lesson of lessons) {
          const challenges = await db
            .insert(schema.challenges)
            .values([
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Que significa HTML?',
                order: 1,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: '¿Cuál es la etiqueta correcta para crear un enlace en HTML?',
                order: 2,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: '¿Qué etiqueta se usa para insertar una imagen en una página web?',
                order: 3,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '¿Cuál es la función de la etiqueta <h1>?',
                order: 4,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '¿Cuál es la función de la etiqueta <ul>?',
                order: 5,
              },
            ])
            .returning();

          // For each challenge, insert challenge options
          for (const challenge of challenges) {
            if (challenge.order === 1) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "HyperText Markup Language",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Hyperlinks and Text Marking Language.",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Home Tool Markup Language.",
                },
              ]);
            }

            if (challenge.order === 2) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "<link>",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "<a>",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "<href>",
                },
              ]);
            }

            if (challenge.order === 3) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "<image>",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "<pic>",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "<img>",
                },
              ]);
            }

            if (challenge.order === 4) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Establece un encabezado de nivel 1 en la página.",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Representa la primera sección de un documento HTML.",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Define un estilo de texto grande y destacado.",
                },
              ]);
            }

            if (challenge.order === 5) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Subrayado",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Lista no ordenada",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Enlace",
                },
              ]);
            }
          }
        }
      }
    }
    console.log("Database seeded successfully");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();