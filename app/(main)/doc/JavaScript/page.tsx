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
                                ¿Qué es JavaScript?
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#estructura" className="hover:text-slate-400">
                                Estructura básica de JavaScript
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#funciones" className="hover:text-slate-400">
                                Funciones en JavaScript
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#variables" className="hover:text-slate-400">
                                Variables y Tipos de Datos
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

                    <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-100 my-6 mx-auto w-full px-4 py-6">
                        Guía JavaScript para Principiantes
                    </h1>

                    <div className="h-full max-w-[912px] px-3 mx-auto">
                        <h1 id="que" className="text-xl font-bold text-neutral-700 dark:text-slate-300 my-4 mt-2">
                            <a href="#que" className="flex items-center hover:text-blue-600">
                                <FaLink className="mr-2 text-xl" />
                                ¿Qué es JavaScript?
                            </a>
                        </h1>
                        <Image
                            className="mx-auto my-10"
                            src="/js.svg"
                            alt="JavaScript Logo"
                            width={300}
                            height={350}
                        />
                        <p>
                            JavaScript es un lenguaje de programación utilizado para crear páginas web interactivas. Se ejecuta en el navegador web y es una de las tres tecnologías principales junto con HTML y CSS para el desarrollo web. JavaScript te permite interactuar con el contenido de la página, validar formularios, crear animaciones, y mucho más.
                        </p>

                        <h2 id="estructura" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                            <a href="#estructura" className="flex items-center hover:text-blue-600">
                                <FaLink className="mr-2 text-xl" />
                                Estructura Básica de JavaScript
                            </a>
                        </h2>
                        <p>
                            La estructura básica de un script JavaScript es muy sencilla. Generalmente, el código se coloca entre las etiquetas <code>&lt;script&gt;</code> y <code>&lt;/script&gt;</code> dentro de un archivo HTML o en un archivo .js externo.
                        </p>
                        <Image
                            className="mx-auto my-10"
                            src="/esquema_js.png"
                            alt="Estructura básica de JavaScript"
                            width={500}
                            height={300}
                        />
                        <p>
                            A continuación se muestra un ejemplo básico de código JavaScript:
                        </p>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
{`<script>
    console.log('Hola Mundo');
</script>`}
                        </pre>

                        <h2 id="funciones" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                            <a href="#funciones" className="flex items-center hover:text-blue-600">
                                <FaLink className="mr-2 text-xl" />
                                Funciones en JavaScript
                            </a>
                        </h2>
                        <p>
                            En JavaScript, las funciones permiten agrupar un bloque de código que se puede ejecutar cuando se le llama. A continuación, se muestra un ejemplo de cómo crear una función:
                        </p>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
{`function saludar(nombre) {
    console.log('Hola ' + nombre);
}

saludar('Juan');`}
                        </pre>

                        <h2 id="variables" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                            <a href="#variables" className="flex items-center hover:text-blue-600">
                                <FaLink className="mr-2 text-xl" />
                                Variables y Tipos de Datos
                            </a>
                        </h2>
                        <p>
                            Las variables en JavaScript se utilizan para almacenar valores, y se pueden declarar con las palabras clave <code>let</code>, <code>const</code>, o <code>var</code>. JavaScript también maneja varios tipos de datos como cadenas de texto, números, booleanos, y más.
                        </p>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
{`let nombre = 'Juan';
const edad = 30;
let esEstudiante = true;`}
                        </pre>

                        <h2 id="documentacion" className="text-xl font-semibold text-neutral-700 dark:text-slate-300 mt-6">
                            <a href="#documentacion" className="flex items-center hover:text-blue-600">
                                <FaLink className="mr-2 text-xl" />
                                Más documentación
                            </a>
                        </h2>
                        <p>
                            Para seguir aprendiendo más sobre JavaScript, te recomendamos los siguientes recursos:
                        </p>
                        <ul className="list-disc pl-6">
                            <li>
                                <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" className="text-blue-500 hover:underline">
                                    MDN Web Docs - JavaScript
                                </a>: La referencia oficial de Mozilla con documentación detallada sobre JavaScript.
                            </li>
                            <li>
                                <a href="https://www.w3schools.com/js/" className="text-blue-500 hover:underline">
                                    W3Schools - JavaScript Tutorial
                                </a>: Un tutorial interactivo para aprender JavaScript con ejemplos fáciles de entender.
                            </li>
                            <li>
                                <a href="https://javascript.info/" className="text-blue-500 hover:underline">
                                    JavaScript.info - The Modern JavaScript Tutorial
                                </a>: Un sitio completo que cubre desde los aspectos básicos hasta avanzados de JavaScript.
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
