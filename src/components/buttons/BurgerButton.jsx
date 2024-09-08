export default function BurgerButton({ setIsBurgerActive}) {
    return (
        <button
            className="block lg:hidden border-gray-600 border-[1px] rounded-md p-2"
            onClick={setIsBurgerActive}>
            <img src="/src/assets/svgs/burger.svg" alt="Menu" className=" w-7 h-7 "/>
        </button>
    );
}