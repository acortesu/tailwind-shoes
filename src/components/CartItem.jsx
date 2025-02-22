import { CiTrash } from "react-icons/ci"
import { SelectOptions } from "./SelectOptions";
import { QTY, SIZES } from "../constant";

export function CartItem({ item: { product, qty, size }, onClickTrash }) {
    return (
        <div className="cursor-pointer p-2 hover:bg-[#DAFFA2] bg-gray-50 dark:bg-transparent dark:hover:bg-night-50 space-y-2">
            <div className="flex space-x-2">
                {/* Image */}
                <img className="h-24" src={product.src} />
                {/* Title and description */}
                <div className="space-y-2">
                    <div className="font-bold dark:text-white">{product.title}</div>
                    <div className="text-sm text-gray-400">{product.description}</div>
                </div>
                {/* Price */}
                <div className="font-bold dark:text-white">${product.price}</div>
            </div>
            <div className="flex justify-between pl-32">
                <div className="flex space-x-6">
                    <div>
                        <div className="font-bold dark:text-white">SIZE</div>
                        <SelectOptions value={size} title="" options={SIZES} className={"w-16 p-1 pl-2"} />
                    </div>
                    <div>
                        <div className="font-bold dark:text-white">QTY</div>
                        <SelectOptions value={qty} title="" options={QTY} className={"w-16 p-1 pl-2"} />
                    </div>
                </div>
                <button onClick={() => onClickTrash(product.id)}>
                    <CiTrash size={25} className="text-black dark:text-white cursor-pointer" />
                </button>
            </div>
        </div>
    );
}