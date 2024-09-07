import React from 'react';

const FullScreenModal = ({isModalOpen, closeModal, children}) => {

    return (isModalOpen && <div
        className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[1000]">
        <div className="relative w-screen h-screen flex justify-center items-center">
            <div
                className='absolute top-0 left-0 w-screen h-screen bg-black opacity-95 backdrop-blur-3xl z-[1001]'
                onClick={closeModal}/>

            <div
                className="absolute w-auto h-auto max-w-full max-h-full bg-white text-black z-[1002] overflow-x-hidden overflow-y-auto">
                <button
                    className="absolute top-3 right-3  text-custom-black text-lg"
                    onClick={closeModal}>x</button>
                <div className='w-screen sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] h-auto'>

                    {children}
                </div>
            </div>
        </div>
    </div>);
};

export default FullScreenModal;
