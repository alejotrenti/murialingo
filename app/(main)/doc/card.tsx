
import { useRouter } from 'next/navigation';
import Image from 'next/image';


type Props = {
    title: string;
    id: number;
    imageSrc: string;
    onClick: string; // Ruta a redirigir
};

export const Card = ({ title, id, imageSrc, onClick }: Props) => {
    const router = useRouter();

    // Añade una anotación de tipo explícita para handleClick
    const handleClick: () => void = () => {
        router.push(onClick); // Redirige a la ruta especificada
    };

    return (
        <div
            onClick={handleClick}
            className="h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 py-6  min-w-[180px] lg:min-w-[190px]"
        >
            <Image
                src={imageSrc}
                alt={title}
                height={70}
                width={93.33}
                className="rounded-lg drop-shadow-md object-cover"
            />
            <p className="text-neutral-700 dark:text-[#94A3B8] lg:text-xl text-center font-semibold mt-5">
                {title}
            </p>
        </div>
    );
};
