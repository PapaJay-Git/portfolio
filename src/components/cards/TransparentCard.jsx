const TransparentCard = ({additionalClasses = '', children}) => {

    return (
        <div
            className={"h-fit w-fit overflow-hidden bg-transparent border border-gray-400 rounded-xl " + additionalClasses}>

            {children}
        </div>
    );
};

export default TransparentCard;