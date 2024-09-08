const RoundedButton = ({onClick, children}) => {
    return (
        <button onClick={onClick}
            className="bg-custom-light-blue p-2 rounded-full text-base md:text-base border border-custom-black
            hover:bg-custom-black hover:border-white transition-colors duration-300 ease-in-out flex gap-2 items-center">
            {children}
        </button>
    );
};

export default RoundedButton;