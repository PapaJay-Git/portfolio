import MainButton from "./MainButton";
import HeaderListItem from "./HeaderListItem";
import {useEffect, useState} from "react";
import FontSizeContainer from "./FontSizeContainer";

const Header = () => {

    const [scrolled,
        setScrolled] = useState(false);
    const [isBurgerActive,
        setIsBurgerActive] = useState(false);
    const [initialActive,
        setinitialActive] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setinitialActive(false);

            const scrollY = window.scrollY;
            if (scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section
            className={`${scrolled
            ? 'bg-custom-black'
            : 'bg-transparent'} fixed w-full transition-colors duration-500 ease-in-out z-50 overflow-hidden`}>
            <nav
                className=" bg-transparent text-gray-200 flex justify-between px-3 py-5 items-center lg:container mx-auto">
                <div className="flex flex-row gap-2 items-center">
                    <img src="/src/assets/svgs/logo.svg" alt="Logo" className="h-10 w-10"/>
                    <FontSizeContainer size="2xl">JAYSON</FontSizeContainer>
                </div>
                <div className="flex justify-between items-center gap-x-20">
                    <ul className="hidden justify-between items-center gap-x-10 lg:flex">
                        <HeaderListItem
                            sectionName="home"
                            title={"HOME"}
                            initialActive={initialActive}/>
                        <HeaderListItem sectionName="about_me" title={"ABOUT ME"}/>
                        <HeaderListItem sectionName="projects" title={"PROJECTS"}/>
                    </ul>
                    <div>
                        <span className="hidden lg:block">
                            <MainButton>LETS' TALK</MainButton>
                        </span>
                        <button
                            className="block lg:hidden border-gray-600 border-[1px] rounded-md p-2"
                            onClick={() => setIsBurgerActive((prev) => !prev)}>
                            <img src="/src/assets/svgs/burger.svg" alt="Menu" className=" w-7 h-7 "/>
                        </button>
                    </div>
                </div>

            </nav>
            <div
                className={`w-full bg-custom-black text-white border-t border-gray-600 ${isBurgerActive
                ? 'block'
                : 'hidden'} lg:hidden`}>
                <ul className="lg:container mx-auto flex flex-col gap-y-3 px-3 py-2">
                    <HeaderListItem title={"HOME"} sectionName="home"/>
                    <HeaderListItem title={"ABOUT ME"} sectionName="about_me"/>
                    <HeaderListItem title={"PROJECTS"} sectionName="projects"/>
                </ul>
            </div>
        </section>
    );
}

export default Header;