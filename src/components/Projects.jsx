import {Element} from "react-scroll";
import GradientSection from "./GradientSection";
import TitleContainer from "./TitleContainer";
import FontSizeContainer from "./FontSizeContainer";
import GridContainer from "./GridContainer";
import CardProject from "./CardProject";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {FreeMode, Pagination} from 'swiper/modules';

export default function Projects({openModal}) {
    const data = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis ac nequ' +
                'e ullamcorper suscipit. Sed viverra, ex vel malesuada tristique, nisi felis pell' +
                'entesque neque, vel maximus dolor arcu non felis.',
            technologies: 'PHP, MYSQL',
            shortDescription: 'Lorem ipsum dolor sit amet, con',
            imageUrl: 'src/assets/images/projects.png'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis ac nequ' +
                'e ullamcorper suscipit. Sed viverra, ex vel malesuada tristique, nisi felis pell' +
                'entesque neque, vel maximus dolor arcu non felis.',
            technologies: 'PHP, MYSQL',
            shortDescription: 'Lorem ipsum dolor sit amet, con',
            imageUrl: 'src/assets/images/projects.png'
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis ac nequ' +
                'e ullamcorper suscipit. Sed viverra, ex vel malesuada tristique, nisi felis pell' +
                'entesque neque, vel maximus dolor arcu non felis.',
            technologies: 'PHP, MYSQL',
            shortDescription: 'Lorem ipsum dolor sit amet, con',
            imageUrl: 'src/assets/images/projects.png'
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis ac nequ' +
                'e ullamcorper suscipit. Sed viverra, ex vel malesuada tristique, nisi felis pell' +
                'entesque neque, vel maximus dolor arcu non felis.',
            technologies: 'PHP, MYSQL',
            shortDescription: 'Lorem ipsum dolor sit amet, con',
            imageUrl: 'src/assets/images/projects.png'
        },
        {
            id: 5,
            title: 'Project 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis ac nequ' +
                'e ullamcorper suscipit. Sed viverra, ex vel malesuada tristique, nisi felis pell' +
                'entesque neque, vel maximus dolor arcu non felis.',
            technologies: 'PHP, MYSQL',
            shortDescription: 'Lorem ipsum dolor sit amet, con',
            imageUrl: 'src/assets/images/projects.png'
        }
    ];
    return (
        <Element name="projects">
            <GradientSection isGradient={false}>
                <GridContainer isGrid={false}>
                    <div className="py-10 lg:py-24 ">
                        <TitleContainer title="MY WORK"/>

                        <FontSizeContainer size="2xl" additionalClass="mb-10">
                            RECENT PROJECTS
                        </FontSizeContainer>
                        <div className="custom-swiper">
                            <Swiper
                                spaceBetween={20}
                                grabCursor={true}
                                slidesPerView={'auto'}
                                freeMode={true}
                                pagination={{clickable: true}}
                                modules={[FreeMode, Pagination]}>
                                {data.map((datum) => (
                                    <SwiperSlide key={datum.id}>
                                        <CardProject openModal={openModal} data={datum}/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </GridContainer>
            </GradientSection>
        </Element>
    );
}