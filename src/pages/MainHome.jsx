import {useState} from "react";
import Header from "../components/sections/Header";
import Home from "../components/sections/Home";
import Technologies from "../components/sections/Technologies";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import FullScreenModal from "../components/modals/FullscreenModal";
import Footer from "../components/sections/Footer";
import Services from "../components/sections/Services";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

const MainHome = () => {
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
        <Services/>
        <Experience/>
        <Contact/>
        <Footer />
    </div>;
};

export default MainHome;
