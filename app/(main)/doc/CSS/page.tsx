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
                                ¿Qué es CSS?
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#estructura" className="hover:text-slate-400">
                                Estructura básica de CSS
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#etiquetas" className="hover:text-slate-400">
                                Las propiedades más comunes en CSS
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#atributos" className="hover:text-slate-400">
                                Selectores y Atributos en HTML
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

                        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-100 my-6 mx-auto w-full px-4 py-6">
                            Guía CSS para Principiantes
                        </h1>

                        <div className="h-full max-w-[912px] px-3 mx-auto">
                            <h1 id="que" className="text-xl font-bold text-neutral-700 dark:text-slate-300 my-4 mt-2">
                                <a href="#que" className="flex items-center hover:text-blue-600">
                                    <FaLink className="mr-2 text-xl" />
                                    ¿Qué es CSS?
                                </a>
                            </h1>
                            <Image
                                className="mx-auto my-10"
                                src="/css.svg"
                                alt="CSS Logo"
                                width={300}
                                height={350}
                            />
                            <p>
                                CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo que describe la presentación de un documento HTML. Mientras que HTML se utiliza para estructurar el contenido de una página web, CSS se utiliza para darle formato a ese contenido: colores, tipografías, márgenes, alineaciones, y mucho más.
                            </p>

                            <h2 id="estructura" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                                <a href="#estructura" className="flex items-center hover:text-blue-600">
                                    <FaLink className="mr-2 text-xl" />
                                    Estructura Básica de CSS
                                </a>
                            </h2>
                            <p>
                                Un archivo CSS se compone de reglas de estilo, que se aplican a los elementos HTML. Cada regla está formada por un selector (que indica el elemento al que se aplicará el estilo) y una declaración (que define el estilo a aplicar). La sintaxis básica de CSS es la siguiente:
                            </p>
                            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
{`h1 {
    color: orange;
    font-size: 2rem;
}`}
                            </pre>

                            <h2 id="etiquetas" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                                <a href="#etiquetas" className="flex items-center hover:text-blue-600">
                                    <FaLink className="mr-2 text-xl" />
                                    Las Propiedades Más Comunes en CSS
                                </a>
                            </h2>
                            <p>
                                Algunas de las propiedades más utilizadas en CSS incluyen:
                            </p>
                            <ul className="list-disc pl-6">
                                <li><code>color</code>: Cambia el color del texto.</li>
                                <li><code>background-color</code>: Cambia el color de fondo.</li>
                                <li><code>font-size</code>: Establece el tamaño de la fuente.</li>
                                <li><code>padding</code>: Agrega espacio interno dentro de un elemento.</li>
                                <li><code>margin</code>: Agrega espacio externo alrededor de un elemento.</li>
                            </ul>

                            <h2 id="atributos" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                                <a href="#atributos" className="flex items-center hover:text-blue-600">
                                    <FaLink className="mr-2 text-xl" />
                                    Selectores y Atributos en CSS
                                </a>
                            </h2>
                            <p>
                                Los selectores en CSS son las herramientas que usamos para identificar qué elementos HTML serán estilizados. Algunos ejemplos comunes incluyen:
                            </p>
                            <ul className="list-disc pl-6">
                                <li><code>.clase</code>: Selecciona elementos con una clase específica.</li>
                                <li><code>#id</code>: Selecciona un único elemento con un identificador específico.</li>
                                <li><code>*</code>: Selecciona todos los elementos.</li>
                            </ul>

                            <h2 id="conclusion" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                                <a href="#conclusion" className="flex items-center hover:text-blue-600">
                                    <FaLink className="mr-2 text-xl" />
                                    Conclusión
                                </a>
                            </h2>
                            <p>
                                CSS es fundamental para diseñar sitios web visualmente atractivos. Aprender a usar las propiedades y selectores de CSS te permitirá tener un control total sobre la apariencia de tu página web.
                            </p>

                            <h2 id="documentacion" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                                <a href="#documentacion" className="flex items-center hover:text-blue-600">
                                    <FaLink className="mr-2 text-xl" />
                                    Más documentación
                                </a>
                            </h2>
                            <p>
                                Para seguir aprendiendo más sobre CSS, te recomendamos los siguientes recursos:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>
                                    <a href="https://developer.mozilla.org/es/docs/Web/CSS" className="text-blue-500 hover:underline">
                                        MDN Web Docs - CSS
                                    </a>: La referencia oficial de Mozilla con documentación detallada sobre CSS y otros lenguajes web.
                                </li>
                                <li>
                                    <a href="https://www.w3schools.com/css/" className="text-blue-500 hover:underline">
                                        W3Schools - CSS Tutorial
                                    </a>: Un tutorial interactivo para aprender CSS con ejemplos fáciles de entender.
                                </li>
                                <li>
                                    <a href="https://css-tricks.com/" className="text-blue-500 hover:underline">
                                        CSS-Tricks
                                    </a>: Un sitio web lleno de consejos, trucos y tutoriales para dominar CSS.
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
