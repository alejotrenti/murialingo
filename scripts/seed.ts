import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      { id: 1, title: "HTML", imageSrc: "/html.svg" },
      { id: 2, title: "CSS", imageSrc: "/css.svg" },
      { id: 3, title: "JavaScript", imageSrc: "/js.svg" },
      { id: 4, title: "Python", imageSrc: "/python.svg" },
      { id: 5, title: "SQL", imageSrc: "/sql.svg" },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // HTML
        title: "Introducción y Conceptos Básicos",
        description: "Aprende las bases de HTML",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      { id: 1, unitId: 1, order: 1, title: "Historia de HTML" },
      { id: 2, unitId: 1, order: 2, title: "Estructura Básica de un Documento HTML" },
      { id: 3, unitId: 1, order: 3, title: "Etiquetas y Elementos Comunes" },
      { id: 4, unitId: 1, order: 4, title: "Atributos Comunes en HTML" },
      { id: 5, unitId: 1, order: 5, title: "Buenas Prácticas en HTML" },
    ]);

    await db.insert(schema.challenges).values([
      // Lección 1: Historia de HTML
      { id: 1, lessonId: 1, type: "SELECT", order: 1, question: "¿En qué año se creó el HTML?" },
      { id: 2, lessonId: 1, type: "SELECT", order: 2, question: "¿Quién es considerado el creador de HTML?" },
      { id: 3, lessonId: 1, type: "SELECT", order: 3, question: "¿Cuál fue la primera versión de HTML?" },
      { id: 4, lessonId: 1, type: "SELECT", order: 4, question: "¿Cuál es el propósito principal de HTML?" },
      { id: 5, lessonId: 1, type: "SELECT", order: 5, question: "¿Qué significa HTML?" },

      // Lección 2: Estructura Básica de un Documento HTML
      { id: 6, lessonId: 2, type: "SELECT", order: 1, question: "¿Cuál es el elemento raíz de un documento HTML?" },
      { id: 7, lessonId: 2, type: "SELECT", order: 2, question: "¿Qué etiqueta contiene los metadatos de un documento HTML?" },
      { id: 8, lessonId: 2, type: "SELECT", order: 3, question: "¿Dónde se coloca el título de una página web?" },
      { id: 9, lessonId: 2, type: "SELECT", order: 4, question: "¿Cuál de las siguientes etiquetas es obligatoria en un documento HTML?" },
      { id: 10, lessonId: 2, type: "SELECT", order: 5, question: "¿Qué etiqueta se usa para definir el cuerpo del documento HTML?" },

      // Lección 3: Etiquetas y Elementos Comunes
      { id: 11, lessonId: 3, type: "SELECT", order: 1, question: "¿Qué etiqueta se usa para crear un párrafo?" },
      { id: 12, lessonId: 3, type: "SELECT", order: 2, question: "¿Cómo se define un enlace en HTML?" },
      { id: 13, lessonId: 3, type: "SELECT", order: 3, question: "¿Qué etiqueta se utiliza para insertar una imagen?" },
      { id: 14, lessonId: 3, type: "SELECT", order: 4, question: "¿Qué etiqueta se usa para crear una lista no ordenada?" },
      { id: 15, lessonId: 3, type: "SELECT", order: 5, question: "¿Qué etiqueta se usa para crear un encabezado de nivel 1?" },

      // Lección 4: Atributos Comunes en HTML
      { id: 16, lessonId: 4, type: "SELECT", order: 1, question: "¿Cuál es el atributo usado para identificar de manera única un elemento?" },
      { id: 17, lessonId: 4, type: "SELECT", order: 2, question: "¿Qué atributo se usa para aplicar una clase CSS a un elemento?" },
      { id: 18, lessonId: 4, type: "SELECT", order: 3, question: "¿Cuál es el propósito del atributo `alt` en la etiqueta `<img>`?" },
      { id: 19, lessonId: 4, type: "SELECT", order: 4, question: "¿Qué atributo se usa para abrir un enlace en una nueva pestaña?" },
      { id: 20, lessonId: 4, type: "SELECT", order: 5, question: "¿Cuál es el atributo usado para definir el estilo en línea de un elemento?" },

      // Lección 5: Buenas Prácticas en HTML
      { id: 21, lessonId: 5, type: "SELECT", order: 1, question: "¿Por qué es importante usar etiquetas semánticas en HTML5?" },
      { id: 22, lessonId: 5, type: "SELECT", order: 2, question: "¿Cuál es una práctica recomendada al escribir etiquetas HTML?" },
      { id: 23, lessonId: 5, type: "SELECT", order: 3, question: "¿Qué es el anidamiento correcto de etiquetas?" },
      { id: 24, lessonId: 5, type: "SELECT", order: 4, question: "¿Por qué es importante la validación de HTML?" },
      { id: 25, lessonId: 5, type: "SELECT", order: 5, question: "¿Qué herramienta se puede usar para validar un documento HTML?" },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Opciones para Lección 1: Historia de HTML
      { challengeId: 1, correct: true, text: "1990" },
      { challengeId: 1, correct: false, text: "1985" },
      { challengeId: 1, correct: false, text: "2000" },
      { challengeId: 1, correct: false, text: "1995" },

      { challengeId: 2, correct: true, text: "Tim Berners-Lee" },
      { challengeId: 2, correct: false, text: "Bill Gates" },
      { challengeId: 2, correct: false, text: "Steve Jobs" },
      { challengeId: 2, correct: false, text: "Mark Zuckerberg" },

      { challengeId: 3, correct: true, text: "HTML 1.0" },
      { challengeId: 3, correct: false, text: "HTML 2.0" },
      { challengeId: 3, correct: false, text: "HTML 3.0" },
      { challengeId: 3, correct: false, text: "HTML 4.0" },

      { challengeId: 4, correct: true, text: "Crear estructuras de páginas web" },
      { challengeId: 4, correct: false, text: "Diseñar gráficos" },
      { challengeId: 4, correct: false, text: "Editar videos" },
      { challengeId: 4, correct: false, text: "Escribir código backend" },

      { challengeId: 5, correct: true, text: "HyperText Markup Language" },
      { challengeId: 5, correct: false, text: "HyperText Make Language" },
      { challengeId: 5, correct: false, text: "HighText Markup Language" },
      { challengeId: 5, correct: false, text: "HyperTool Markup Language" },

      // Opciones para Lección 2: Estructura Básica de un Documento HTML
      { challengeId: 6, correct: true, text: "<html>" },
      { challengeId: 6, correct: false, text: "<head>" },
      { challengeId: 6, correct: false, text: "<body>" },
      { challengeId: 6, correct: false, text: "<title>" },

      { challengeId: 7, correct: true, text: "<head>" },
      { challengeId: 7, correct: false, text: "<meta>" },
      { challengeId: 7, correct: false, text: "<header>" },
      { challengeId: 7, correct: false, text: "<section>" },

      { challengeId: 8, correct: true, text: "En la etiqueta <title> dentro de <head>" },
      { challengeId: 8, correct: false, text: "En la etiqueta <header>" },
      { challengeId: 8, correct: false, text: "En la etiqueta <footer>" },
      { challengeId: 8, correct: false, text: "En la etiqueta <body>" },

      { challengeId: 9, correct: true, text: "<html>" },
      { challengeId: 9, correct: false, text: "<header>" },
      { challengeId: 9, correct: false, text: "<footer>" },
      { challengeId: 9, correct: false, text: "<div>" },

      { challengeId: 10, correct: true, text: "<body>" },
      { challengeId: 10, correct: false, text: "<main>" },
      { challengeId: 10, correct: false, text: "<section>" },
      { challengeId: 10, correct: false, text: "<article>" },

      // Opciones para Lección 3: Etiquetas y Elementos Comunes
      { challengeId: 11, correct: true, text: "<p>" },
      { challengeId: 11, correct: false, text: "<paragraph>" },
      { challengeId: 11, correct: false, text: "<text>" },
      { challengeId: 11, correct: false, text: "<para>" },

      { challengeId: 12, correct: true, text: "<a href=\"url\">Texto</a>" },
      { challengeId: 12, correct: false, text: "<link src=\"url\">Texto</link>" },
      { challengeId: 12, correct: false, text: "<href=\"url\">Texto</href>" },
      { challengeId: 12, correct: false, text: "<url link=\"url\">Texto</url>" },

      { challengeId: 13, correct: true, text: "<img src=\"ruta\">" },
      { challengeId: 13, correct: false, text: "<image src=\"ruta\">" },
      { challengeId: 13, correct: false, text: "<picture src=\"ruta\">" },
      { challengeId: 13, correct: false, text: "<img link=\"ruta\">" },

      { challengeId: 14, correct: true, text: "<ul>" },
      { challengeId: 14, correct: false, text: "<ol>" },
      { challengeId: 14, correct: false, text: "<li>" },
      { challengeId: 14, correct: false, text: "<list>" },

      { challengeId: 15, correct: true, text: "<h1>" },
      { challengeId: 15, correct: false, text: "<header1>" },
      { challengeId: 15, correct: false, text: "<heading1>" },
      { challengeId: 15, correct: false, text: "<h2>" },

      // Opciones para Lección 4: Atributos Comunes en HTML
      { challengeId: 16, correct: true, text: "id" },
      { challengeId: 16, correct: false, text: "class" },
      { challengeId: 16, correct: false, text: "style" },
      { challengeId: 16, correct: false, text: "name" },

      { challengeId: 17, correct: true, text: "class" },
      { challengeId: 17, correct: false, text: "id" },
      { challengeId: 17, correct: false, text: "style" },
      { challengeId: 17, correct: false, text: "type" },

      { challengeId: 18, correct: true, text: "Proveer texto alternativo para la imagen" },
      { challengeId: 18, correct: false, text: "Definir la fuente de la imagen" },
      { challengeId: 18, correct: false, text: "Aplicar estilos a la imagen" },
      { challengeId: 18, correct: false, text: "Establecer la altura de la imagen" },

      { challengeId: 19, correct: true, text: "target=\"_blank\"" },
      { challengeId: 19, correct: false, text: "rel=\"noopener\"" },
      { challengeId: 19, correct: false, text: "href=\"_new\"" },
      { challengeId: 19, correct: false, text: "link=\"_blank\"" },

      { challengeId: 20, correct: true, text: "style" },
      { challengeId: 20, correct: false, text: "class" },
      { challengeId: 20, correct: false, text: "id" },
      { challengeId: 20, correct: false, text: "format" },

      // Opciones para Lección 5: Buenas Prácticas en HTML
      { challengeId: 21, correct: true, text: "Mejora la accesibilidad y SEO" },
      { challengeId: 21, correct: false, text: "Aumenta el tamaño del archivo" },
      { challengeId: 21, correct: false, text: "Hace el código más difícil de leer" },
      { challengeId: 21, correct: false, text: "Reduce la compatibilidad con navegadores" },

      { challengeId: 22, correct: true, text: "Utilizar minúsculas para los nombres de etiquetas" },
      { challengeId: 22, correct: false, text: "Utilizar mayúsculas para los nombres de etiquetas" },
      { challengeId: 22, correct: false, text: "No cerrar etiquetas auto-cerradas" },
      { challengeId: 22, correct: false, text: "No utilizar comillas para valores de atributos" },

      { challengeId: 23, correct: true, text: "Colocar etiquetas dentro de otras de forma ordenada" },
      { challengeId: 23, correct: false, text: "Escribir todas las etiquetas en una sola línea" },
      { challengeId: 23, correct: false, text: "Usar etiquetas sin cerrar" },
      { challengeId: 23, correct: false, text: "No usar etiquetas anidadas" },

      { challengeId: 24, correct: true, text: "Para asegurar que el código siga estándares web" },
      { challengeId: 24, correct: false, text: "Para hacer el sitio más lento" },
      { challengeId: 24, correct: false, text: "Para aumentar el tráfico del sitio" },
      { challengeId: 24, correct: false, text: "Para hacer el código más complicado" },

      { challengeId: 25, correct: true, text: "W3C Markup Validation Service" },
      { challengeId: 25, correct: false, text: "Google Analytics" },
      { challengeId: 25, correct: false, text: "Adobe Dreamweaver" },
      { challengeId: 25, correct: false, text: "GitHub" },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
