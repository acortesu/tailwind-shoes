import { CardElem } from "./CardElem";

export function NewArrivalSection({ items, onClickCard }) {
    return (
        <div className="mt-20">
            <div className="flex-center">
                <dir className="dark:text-white bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold">NEW ARRIVALS</dir>
            </div>
            <div className="justify-between mt-10 grid grid-cols-1 gap-y-24 gap-x-6 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
                {items.map((item) => (
                    <CardElem key={item.id} item={item} onClick={onClickCard} />
                ))}
            </div>
        </div>
    );
}