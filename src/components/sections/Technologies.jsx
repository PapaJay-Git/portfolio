import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import {Autoplay} from 'swiper/modules';
import GradientSection from '../containers/GradientSection';
import FontSizeContainer from '../texts/FontSizeContainer';
import Container from '../containers/Container';
import AnimatedSection from "../animations/AnimatedSection";

import react from "./../../assets/svgs/react.svg"
import css from "./../../assets/svgs/css.svg"
import bootstrap from "./../../assets/svgs/bootstrap.svg"
import html from "./../../assets/svgs/html.svg"
import javascript from "./../../assets/svgs/javascript.svg"
import php from "./../../assets/svgs/php.svg"
import jquery from "./../../assets/svgs/jquery.svg"
import laravel from "./../../assets/svgs/laravel.svg"
import pusher from "./../../assets/svgs/pusher.svg"
import sql from "./../../assets/svgs/sql.svg"
import mysql from "./../../assets/svgs/mysql.svg"
import tailwind from "./../../assets/svgs/tailwind.svg"
import vue from "./../../assets/svgs/vue.svg"


const Technologies = () => {
    const autoplay = {
        delay: 1000,
        disableOnInteraction: false
    };
    const breakpoints = {
        200: {
            slidesPerView: 1
        },
        300: {
            slidesPerView: 2
        },
        500: {
            slidesPerView: 2.5
        },
        700: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    };
    const technologies = [
        {
            name: 'React.js',
            logo: react
        }, {
            name: 'CSS',
            logo: css
        }, {
            name: 'Bootstrap 5',
            logo: bootstrap
        }, {
            name: 'HTML',
            logo: html
        }, {
            name: 'JavaScript',
            logo: javascript
        }, {
            name: 'PHP',
            logo: php
        }, {
            name: 'jQuery',
            logo: jquery
        }, {
            name: 'Pusher',
            logo: pusher
        }, {
            name: 'Laravel',
            logo: laravel
        }, {
            name: 'SQL',
            logo: sql
        }, {
            name: 'MySQL',
            logo: mysql
        }, {
            name: 'Tailwind',
            logo: tailwind
        }, {
            name: 'Vue.js',
            logo: vue
        }
    ];


    const animationSettings = (delay) => {
        return {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0},
            transition: { duration: delay},
        }
      };
      
    return (
        <GradientSection >
            <Container disableGrid={true}>
                <AnimatedSection animationSettings={animationSettings(2)}>
                    <Swiper
                        breakpoints={breakpoints}
                        spaceBetween={10}
                        grabCursor={true}
                        autoplay={autoplay}
                        loop={true}
                        modules={[Autoplay]}>

                        {technologies.map(technology => (
                            <SwiperSlide
                                key={technology.name}
                                className="flex items-center gap-3 py-10 text-nowrap font-light ">
                                <img
                                    src={technology.logo}
                                    alt={technology.name + " Logo"}
                                    className="w-1/2 h-auto max-h-12"/>
                                <FontSizeContainer size='sm'>{technology.name}</FontSizeContainer>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </AnimatedSection>
            </Container>
        </GradientSection>
    );
}

export default Technologies;