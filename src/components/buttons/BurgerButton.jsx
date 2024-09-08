import burger from "./../../assets/svgs/burger.svg"

export default function BurgerButton({ setIsBurgerActive}) {
    return (
        <button
            className="block lg:hidden border-gray-600 border-[1px] rounded-md p-2"
            onClick={setIsBurgerActive}>
            <img src={burger} alt="Menu" className=" w-7 h-7 "/>
        </button>
    );
}