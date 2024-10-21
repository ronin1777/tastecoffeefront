import Image from "next/image";
import Link from "next/link";

export default function RightHeader() {
    return <nav className="flex items-center gap-x-5 ipad:gap-x-7">
        <div><Image loading="lazy" src="/images/headerimage/app-logo.svg" width="41" height="40" alt="Coffee"/></div>
        <ul className="flex items-center gap-x-5 ipad:gap-x-7 text-lg text-gray-300 tracking-tightest child-hover:text-orange-300">
            <li className="transition-colors">
                <Link href="/"> صفحه اصلی </Link></li>
            <li className="relative leading-[56px] group">
                <Link href="/shop" className="group-hover:text-orange-300 transition-colors"> فروشگاه </Link>
                <div
                    className="absolute flex flex-col p-5 top-full space-y-3 w-64 opacity-0 h-max max-h-[510px] overflow-auto invisible group-hover:opacity-100 group-hover:visible transition-all bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white text-base rounded-2xl border-t-[3px] border-orange-300 shadow-normal child:inline-block child:transition-colors child-hover:text-orange-400 dark:child-hover:text-orange-300 tracking-normal">
                    <Link href="/">قهوه فوری</Link>
                    <Link href="/">قهوه دمی و اسپرسو</Link>
                    <Link href="/">لوازم جانبی و تجهیزات</Link>
                    <Link href="/">پک تستر قهوه</Link>
                    <Link href="/">اسپرسو ساز</Link>
                    <Link href="/">قهوه ترک</Link>
                </div>
            </li>
            <li className="transition-colors"><Link href="/blog"> مقاله ها </Link></li>
            <li className="transition-colors"><Link href="/about"> درباره ما </Link></li>
            <li className="transition-colors"><Link href="/contact"> تماس با ما </Link></li>
        </ul>
    </nav>
}