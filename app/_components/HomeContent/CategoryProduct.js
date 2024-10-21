import Image from "next/image";
import Link from "next/link";

export default function CategoryProduct({n, title}) {
    return <div className="w-auto flex justify-center items-center flex-col">
        <Link href="/shop/">
        <Image loading="lazy" src={`/images/cat/category${n}.png`} width='200' height='200' alt="Product Category Image" className="aspect-square w-52 rounded-full"/>
        <span className="inline-block font-dana-bold text-sm/4 md:text-xl/5 text-zinc-700 dark:text-white hover:text-orange-400 hover:dark:text-orange-300 transition-colors mt-3 md:mt-4">{title}</span>
        </Link>
    </div>
}