import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import {Autoplay} from 'swiper/modules';
import GradientSection from '../containers/GradientSection';
import FontSizeContainer from '../texts/FontSizeContainer';
import Container from '../containers/Container';

const Technologies = () => {
    const autoplay = {
        delay: 1000,
        disableOnInteraction: false
    };
    const breakpoints = {
        0: {
            slidesPerView: 2
        },
        400: {
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
            logo: '/src/assets/svgs/react.svg'
        }, {
            name: 'CSS',
            logo: '/src/assets/svgs/css.svg'
        }, {
            name: 'Bootstrap 5',
            logo: '/src/assets/svgs/bootstrap.svg'
        }, {
            name: 'HTML',
            logo: '/src/assets/svgs/html.svg'
        }, {
            name: 'JavaScript',
            logo: '/src/assets/svgs/javascript.svg'
        }, {
            name: 'PHP',
            logo: '/src/assets/svgs/php.svg'
        }, {
            name: 'jQuery',
            logo: '/src/assets/svgs/jquery.svg'
        }, {
            name: 'Pusher',
            logo: '/src/assets/svgs/pusher.svg'
        }, {
            name: 'Laravel',
            logo: '/src/assets/svgs/laravel.svg'
        }, {
            name: 'SQL',
            logo: '/src/assets/svgs/sql.svg'
        }, {
            name: 'MySQL',
            logo: '/src/assets/svgs/mysql.svg'
        }, {
            name: 'Tailwind',
            logo: '/src/assets/svgs/tailwind.svg'
        }, {
            name: 'Vue.js',
            logo: '/src/assets/svgs/vue.svg'
        }
    ];
    return (
        <GradientSection >
            <Container disableGrid={true}>
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
            </Container>
        </GradientSection>
    );
}

export default Technologies;