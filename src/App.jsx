import {useEffect, useState, useRef} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Projects from "./components/Projects";
import FullScreenModal from "./components/FullscreenModal";

const App = () => {
    const [isModalOpen,
        setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
      setModalContent(content);
      setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);

    return <div>
        <FullScreenModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}>
            {modalContent}
        </FullScreenModal>
        <Header/>

        <Home/>
        <Technologies/>
        <About/>
        <Projects openModal={openModal} />
        <footer className="min-h-[80vh] bg-gray-500"></footer>
    </div>;
};

export default App;
