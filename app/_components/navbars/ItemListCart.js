"use client"

import Link from "next/link";
import Image from "next/image";
import {GoTrash} from "react-icons/go";
import QuantityUpdater from "@/app/_components/navbars/QuantityUpdater";
import DeleteItemButton from "@/app/_components/navbars/DeleteItemButton";

export default function ItemCart({ item, user, cartId, accessToken }) {

    return (
        <div className="max-h-96 overflow-auto divide-y divide-gray-100 dark:divide-white/10 child:py-4">
            <div className="flex gap-x-2 items-center dark:text-white">
                <div className="flex w-1/3">
                    <Link href={`/shop/${item?.product}`} className="w-full h-24">
                        <Image
                            loading="lazy"
                            src={item?.product_image}
                            width={100}
                            height={100}
                            alt={item?.product_name}
                            className="w-full h-full" />
                    </Link>
                </div>
                <div className="flex flex-col w-2/3">
                    <div className="flex justify-between items-start gap-x-2 w-full">
                        <Link href={`/shop/${item?.product}`} className="font-dana-medium text-zinc-700 dark:text-white text-base/5 line-clamp-2 hover:text-orange-400 dark:hover:text-orange-300 transition-colors">
                            {item?.product_name}
                        </Link>
                        <div>
                            <DeleteItemButton item={item} cartId={cartId} accessToken={accessToken}/>
                        </div>
                    </div>
                    {/*Update section*/}
                    <QuantityUpdater accessToken={accessToken} item={item} cartId={cartId}/>
                    <div className="flex flex-col mt-2">
                        <span className="inline-block font-bold text-base/5 text-teal-600 dark:text-teal-500 tracking-tighter">{item?.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}