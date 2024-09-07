const TransparentCard = ({classes = '', children}) => {

    return (
        <div
            className={"h-fit w-fit overflow-hidden bg-transparent border border-gray-400 rounded-xl " + classes}>

            {children}
        </div>
    );
};

export default TransparentCard;