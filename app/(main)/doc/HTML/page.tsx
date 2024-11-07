import { currentUser } from "@clerk/nextjs/server";
import { getCourses, getUserProgress } from "@/db/queries";
import { Header } from "../header";
import Image from "next/image";
import { StickyWrapper } from "@/components/sticky-wrapper";
import Link from "next/link";
import { FeedWrapper } from "@/components/feed-wrapper";
import { FaLink } from 'react-icons/fa';

const Documentation = async () => {
    const user = await currentUser();

    const coursesData = getCourses();
    const userProgressData = getUserProgress();

    const [
        courses,
        userProgress,
    ] = await Promise.all([
        coursesData,
        userProgressData,
    ]);

    return (
        <div>
            <Header />
            <section className="flex flex-row-reverse gap-[48px] px-6">
                <StickyWrapper>
                    <h1 className="text-xl">
                        En este artículo:
                    </h1>
                    <nav className="flex flex-col gap-y-3 border-l-2 border-slate-500 pl-6">
                        <ul>
                            <Link href="#que" className="hover:text-slate-400">
                                ¿Qué es HTML?
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#estructura" className="hover:text-slate-400">
                                Estructura básica de HTML
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#etiquetas" className="hover:text-slate-400">
                                Las etiquetas más comunes
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#atributos" className="hover:text-slate-400">
                                Atributos en HTML
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#conclusion" className="hover:text-slate-400">
                                Conclusión
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#documentacion" className="hover:text-slate-400">
                                Más documentación
                            </Link>
                        </ul>
                    </nav>
                </StickyWrapper>
                <FeedWrapper>
                    <div className='flex w-full flex-col items-center'>

                    <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500 my-6 mx-auto w-full px-4 py-6">
                        Guía HTML para Principiantes
                    </h1>



                        <div className="h-full max-w-[912px] px-3 mx-auto">
                            <h1 id="que" className="text-xl font-bold text-neutral-700 dark:text-slate-300 my-4 mt-2">
                                <a href="#que"className="flex items-center  hover:text-blue-600">
                                    <FaLink className="mr-2 text-xl" />
                                    ¿Qué es HTML?
                                </a>
                            </h1>
                            <Image
                                className="mx-auto my-10"
                                src="/html.svg"
                                alt="HTML Logo"
                                width={300}
                                height={350}
                            />
                            <p>
                                HTML (HyperText Markup Language) es un lenguaje de marcado que le indica a los navegadores web cómo estructurar las páginas web que visitas. Puede ser tan complicado o tan sencillo como el desarrollador web lo desee. HTML se compone de una serie de elementos que se utilizan para envolver, marcar o señalar diferentes partes del contenido, de manera que se muestren o actúen de una forma determinada. 
                                Los elementos pueden hacer que el contenido se convierta en un hipervínculo para conectar con otra página, poner palabras en cursiva, entre otras cosas.
                            </p>

                            <h2 id="estructura" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                                <a href="#estructura"className="flex items-center  hover:text-blue-600">
                                    <FaLink className="mr-2 text-xl" />
                                    Estructura Básica de HTML
                                </a>
                            </h2>
                            <p>
                                La estructura básica de un documento HTML está formada por etiquetas que definen el contenido y la estructura de la página. La etiqueta principal es <code>&lt;html&gt;</code>, que indica el comienzo y el final de un documento HTML. Dentro de <code>&lt;html&gt;</code>, se encuentra la etiqueta <code>&lt;head&gt;</code>, que contiene metadatos, como el título de la página y los enlaces a archivos CSS o JavaScript, y la etiqueta <code>&lt;body&gt;</code>, que contiene el contenido visible de la página.
                            </p>
                            <Image
                                className="mx-auto my-10"
                                src="/esquema_pag_web.png"
                                alt="Estructura básica de HTML"
                                width={500}
                                height={300}
                            />
                            <p>
                                A continuación se muestra un ejemplo básico de un documento HTML:
                            </p>
                            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                                {`<!DOCTYPE html>
<html>
    <head>
        <title>Mi primera página HTML</title>
    </head>
    <body>
        <h1>Bienvenido a HTML</h1>
        <p>Este es un párrafo de ejemplo.</p>
    </body>
</html>`}
                            </pre>

                            <h2 id="etiquetas" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                            <a href="#etiquetas"className="flex items-center  hover:text-blue-600">
                                    <FaLink className="mr-2 text-xl" />
                                    Las Etiquetas Más Comunes
                                </a>
                            </h2>
                            <p>
                                Existen muchas etiquetas en HTML, pero algunas de las más comunes son:
                            </p>
                            <ul className="list-disc pl-6">
                                <li><code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>: Etiquetas de encabezado.</li>
                                <li><code>&lt;p&gt;</code>: Etiqueta de párrafo.</li>
                                <li><code>&lt;a&gt;</code>: Etiqueta para enlaces.</li>
                                <li><code>&lt;img&gt;</code>: Etiqueta para imágenes.</li>
                                <li><code>&lt;div&gt;</code>: Etiqueta contenedora de bloques.</li>
                            </ul>

                            <h2 id="atributos" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                            <a href="#atributos"className="flex items-center  hover:text-blue-600">
                                    <FaLink className="mr-2 text-xl" />
                                    Atributos en HTML
                                </a>
                            </h2>
                            <p>
                                Los atributos proporcionan información adicional sobre un elemento HTML. Los atributos siempre van dentro de la etiqueta de apertura y tienen una sintaxis clave-valor. Por ejemplo, en la etiqueta <code>&lt;a&gt;</code> para enlaces, se utiliza el atributo <code>href</code> para especificar la URL del enlace.
                            </p>
                            <Image
                                className="mx-auto my-10"
                                src="/atributos_html.png"
                                alt="Atributos en HTML"
                                width={400}
                                height={250}
                            />
                            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                                {`<a href="https://www.ejemplo.com">Visitar sitio web</a>`}
                            </pre>

                            <h2 id="conclusion" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                            <a href="#conclusion"className="flex items-center hover:text-blue-600">
                                    <FaLink className="mr-2 text-xl" />
                                    Conclusión
                                </a>
                            </h2>
                            <p>
                                HTML es la base de la web y aprenderlo es el primer paso para crear sitios web. A medida que avances, aprenderás cómo combinar HTML con CSS y JavaScript para hacer páginas más interactivas y atractivas.
                            </p>
                            <h2 id="documentacion" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                            <a href="#documentacion"className="flex items-center hover:text-blue-600">
                                    <FaLink className="mr-2 text-xl" />
                                    Más documentación
                                </a>
                            </h2>
                            <p>
                                Para seguir aprendiendo más sobre HTML, te recomendamos los siguientes recursos:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>
                                    <a href="https://developer.mozilla.org/es/docs/Web/HTML" className="text-blue-500 hover:underline">
                                        MDN Web Docs - HTML
                                    </a>: La referencia oficial de Mozilla con documentación detallada sobre HTML y otros lenguajes web.
                                </li>
                                <li>
                                    <a href="https://www.w3schools.com/html/" className="text-blue-500 hover:underline">
                                        W3Schools - HTML Tutorial
                                    </a>: Un tutorial interactivo para aprender HTML con ejemplos fáciles de entender.
                                </li>
                                <li>
                                    <a href="https://html.com/" className="text-blue-500 hover:underline">
                                        HTML.com - HTML Guide
                                    </a>: Una guía práctica para aprender y dominar HTML.
                                </li>
                            </ul>
                        </div>
                    </div>
                </FeedWrapper>
            </section>
        </div>
    );
};

export default Documentation;
